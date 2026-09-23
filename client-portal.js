import {
  getUser,
  handleAuthCallback,
  login,
  logout,
  requestPasswordRecovery,
  signup,
  updateUser,
} from "@netlify/identity";

const API = "/api/client-portal";
const loadingView = document.querySelector("#loading-view");
const accessView = document.querySelector("#access-view");
const onboardingView = document.querySelector("#onboarding-view");
const dashboardView = document.querySelector("#dashboard-view");
const logoutButton = document.querySelector("#logout-button");
const accessMessage = document.querySelector("#access-message");
const demoMode = new URLSearchParams(location.search).get("demo");
const DEMO_CLIENT = {
  name: "Avery Morgan",
  preferredName: "Avery",
  focus: "Practicing the pause between what you feel and what you choose next.",
  memberSince: "2026-04-09",
  summaries: [
    {
      sessionDate: "2026-09-18",
      title: "Let the pause do some of the work",
      reflection:
        "You noticed how quickly urgency can sound like certainty. The work this week is not to eliminate the feeling, but to make enough room to decide whether it deserves the wheel.",
      takeaways: [
        "Urgency is information, not instruction.",
        "A pause can be an active choice.",
      ],
      nextSteps: [
        "Wait ten minutes before answering the charged message.",
        "Write down what a steadier response would protect.",
      ],
    },
    {
      sessionDate: "2026-09-04",
      title: "Choosing the honest yes",
      reflection:
        "We separated generosity from self-erasure and named the difference between a wholehearted yes and a reflexive one.",
      takeaways: ["A boundary can protect warmth instead of reducing it."],
      nextSteps: ["Use “Let me come back to you” before making a commitment."],
    },
  ],
};

function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    character =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character]
  );
}

function friendlyError(error) {
  const message = error instanceof Error ? error.message : "";
  if (/invalid login credentials|invalid email or password/i.test(message))
    return "That email and password do not match. Try again or reset your password.";
  if (/already registered|already exists/i.test(message))
    return "An account already exists for that email. Sign in or reset your password.";
  if (/password.*(short|length)|at least/i.test(message))
    return "Please use a password with at least 8 characters.";
  if (/identity.*(not available|not configured)|404/i.test(message))
    return "Account access is being connected now. Please check back shortly.";
  return message || "Something went wrong. Please try again.";
}

async function api(path, options = {}) {
  const response = await fetch(`${API}${path}`, {
    credentials: "same-origin",
    headers: { "content-type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok)
    throw new Error(data.error || "Something went wrong. Please try again.");
  return data;
}

function setActiveView(view) {
  loadingView.hidden = view !== "loading";
  accessView.hidden = view !== "access";
  onboardingView.hidden = view !== "onboarding";
  dashboardView.hidden = view !== "dashboard";
  logoutButton.hidden = !["onboarding", "dashboard"].includes(view);
}

function showAuthPanel(panel) {
  const isAccessPanel = panel === "signin" || panel === "signup";
  document.querySelector("#signin-panel").hidden = panel !== "signin";
  document.querySelector("#signup-panel").hidden = panel !== "signup";
  document.querySelector("#recovery-panel").hidden = panel !== "recovery";
  document.querySelector(".auth-tabs").hidden = !isAccessPanel;
  document
    .querySelector("#signin-tab")
    .classList.toggle("active", panel === "signin");
  document
    .querySelector("#signup-tab")
    .classList.toggle("active", panel === "signup");
  document
    .querySelector("#signin-tab")
    .setAttribute("aria-selected", String(panel === "signin"));
  document
    .querySelector("#signup-tab")
    .setAttribute("aria-selected", String(panel === "signup"));
  accessMessage.textContent = "";
}

function showAccess(message = "", panel = "signin") {
  setActiveView("access");
  showAuthPanel(panel);
  accessMessage.textContent = message;
}

function showOnboarding(user) {
  setActiveView("onboarding");
  const fullName = user?.name || "";
  document.querySelector("#profile-name").value = fullName;
  document.querySelector("#profile-preferred-name").value =
    fullName.split(/\s+/)[0] || "";
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function listMarkup(items) {
  if (!items?.length) return "";
  return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function summaryMarkup(summary, index) {
  const takeaways = listMarkup(summary.takeaways);
  const nextSteps = listMarkup(summary.nextSteps);
  const supporting =
    takeaways || nextSteps
      ? `<div class="summary-columns">
        ${takeaways ? `<div><h4>What became clear</h4>${takeaways}</div>` : ""}
        ${nextSteps ? `<div><h4>Carry this forward</h4>${nextSteps}</div>` : ""}
      </div>`
      : "";
  return `<details class="summary-item" ${index === 0 ? "open" : ""}>
    <summary>
      <span class="summary-date">${escapeHtml(formatDate(summary.sessionDate))}</span>
      <span class="summary-title">${escapeHtml(summary.title)}</span>
      <span class="summary-toggle" aria-hidden="true">+</span>
    </summary>
    <div class="summary-body"><p>${escapeHtml(summary.reflection)}</p>${supporting}</div>
  </details>`;
}

function showDashboard(client) {
  setActiveView("dashboard");
  const preferredName =
    client.preferredName || client.name?.split(/\s+/)[0] || "Welcome";
  document.querySelector("#welcome-heading").textContent =
    `Welcome back, ${preferredName}.`;
  document.querySelector("#focus-copy").textContent =
    client.focus ||
    "A place to revisit your insights, intentions, and next steps between sessions.";
  document.querySelector("#member-since").textContent = client.memberSince
    ? formatDate(client.memberSince)
    : "Your first session";
  const count = client.summaries?.length || 0;
  document.querySelector("#summary-count").textContent = `${count} shared`;
  document.querySelector("#summary-list").innerHTML = count
    ? client.summaries.map(summaryMarkup).join("")
    : `<div class="empty-state"><h3>Your summaries will appear here.</h3><p>After each session, a dated, client-facing summary can be added automatically so you can return to what mattered without searching through notes.</p></div>`;
}

async function openPortal() {
  const data = await api("/session");
  if (data.needsProfile) showOnboarding(data.user);
  else if (data.role === "client") showDashboard(data.client);
  else showAccess();
}

async function withBusyButton(form, busyText, action) {
  const button = form.querySelector('button[type="submit"]');
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = busyText;
  accessMessage.textContent = "";
  try {
    await action();
  } catch (error) {
    accessMessage.textContent = friendlyError(error);
  } finally {
    button.disabled = false;
    button.innerHTML = original;
  }
}

document
  .querySelector("#signin-tab")
  .addEventListener("click", () => showAuthPanel("signin"));
document
  .querySelector("#signup-tab")
  .addEventListener("click", () => showAuthPanel("signup"));
document
  .querySelector("#back-to-signin-button")
  .addEventListener("click", () => showAuthPanel("signin"));
document
  .querySelector("#forgot-password-button")
  .addEventListener("click", () => {
    document.querySelector("#new-password-form").hidden = true;
    document.querySelector("#recovery-form").hidden = false;
    document.querySelector("#recovery-copy").textContent =
      "Enter your email and we’ll send you a secure reset link.";
    showAuthPanel("recovery");
  });

document.querySelector("#signin-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  withBusyButton(form, "Opening…", async () => {
    const fields = new FormData(form);
    await login(String(fields.get("email")), String(fields.get("password")));
    form.reset();
    await openPortal();
  });
});

document.querySelector("#signup-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  withBusyButton(form, "Creating…", async () => {
    const fields = new FormData(form);
    const user = await signup(
      String(fields.get("email")),
      String(fields.get("password")),
      { full_name: String(fields.get("name")) }
    );
    form.reset();
    if (user.confirmedAt || (await getUser())) {
      await openPortal();
      return;
    }
    showAccess(
      "Check your email to confirm your account. Then return here and sign in.",
      "signin"
    );
  });
});

document.querySelector("#recovery-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  withBusyButton(form, "Sending…", async () => {
    const email = String(new FormData(form).get("email"));
    await requestPasswordRecovery(email);
    form.reset();
    accessMessage.textContent =
      "If an account exists for that email, a secure reset link is on its way.";
  });
});

document
  .querySelector("#new-password-form")
  .addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    withBusyButton(form, "Saving…", async () => {
      await updateUser({
        password: String(new FormData(form).get("password")),
      });
      history.replaceState(null, "", location.pathname);
      await openPortal();
    });
  });

document
  .querySelector("#onboarding-form")
  .addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button[type="submit"]');
    const message = document.querySelector("#onboarding-message");
    if (demoMode) {
      message.textContent =
        "This is the setup example. No account or profile was created.";
      return;
    }
    button.disabled = true;
    message.textContent = "Creating your private space…";
    try {
      const fields = new FormData(form);
      const data = await api("/onboard", {
        method: "POST",
        body: JSON.stringify({
          name: fields.get("name"),
          preferredName: fields.get("preferredName"),
          focus: fields.get("focus"),
          summaryAcknowledgement: fields.get("summaryAcknowledgement") === "on",
          nuggetConsent: fields.get("nuggetConsent") === "on",
        }),
      });
      showDashboard(data.client);
    } catch (error) {
      message.textContent = friendlyError(error);
    } finally {
      button.disabled = false;
    }
  });

logoutButton.addEventListener("click", async () => {
  try {
    await logout();
  } catch {}
  showAccess("You have been signed out.");
});

(async function initialize() {
  try {
    if (demoMode === "setup" || demoMode === "complete") {
      document.querySelector("#demo-label").hidden = false;
      if (demoMode === "setup") {
        showOnboarding({ name: "Avery Morgan" });
      } else {
        showDashboard(DEMO_CLIENT);
      }
      return;
    }
    const callback = await handleAuthCallback();
    if (callback?.type === "recovery") {
      setActiveView("access");
      showAuthPanel("recovery");
      document.querySelector("#recovery-form").hidden = true;
      document.querySelector("#new-password-form").hidden = false;
      document.querySelector("#recovery-copy").textContent =
        "Choose a new password for your client portal.";
      return;
    }
    if (callback) history.replaceState(null, "", location.pathname);
    await openPortal();
  } catch (error) {
    showAccess(friendlyError(error));
  }
})();
