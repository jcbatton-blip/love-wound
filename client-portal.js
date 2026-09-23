const API = "/api/client-portal";
const loadingView = document.querySelector("#loading-view");
const accessView = document.querySelector("#access-view");
const dashboardView = document.querySelector("#dashboard-view");
const logoutButton = document.querySelector("#logout-button");

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

function showAccess(message = "") {
  loadingView.hidden = true;
  dashboardView.hidden = true;
  accessView.hidden = false;
  logoutButton.hidden = true;
  document.querySelector("#access-message").textContent = message;
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
  loadingView.hidden = true;
  accessView.hidden = true;
  dashboardView.hidden = false;
  logoutButton.hidden = false;
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
    : `<div class="empty-state"><h3>Your reflections will appear here.</h3><p>After a session, Jeff can publish a client-facing summary so the insight stays close when you need it.</p></div>`;
}

async function signIn(code) {
  const button = document.querySelector("#access-form button");
  const message = document.querySelector("#access-message");
  button.disabled = true;
  button.textContent = "Opening…";
  message.textContent = "";
  try {
    const data = await api("/client-login", {
      method: "POST",
      body: JSON.stringify({ code }),
    });
    showDashboard(data.client);
  } catch (error) {
    showAccess(error.message);
  } finally {
    button.disabled = false;
    button.innerHTML = `Open my portal <span aria-hidden="true">→</span>`;
  }
}

document.querySelector("#access-form").addEventListener("submit", event => {
  event.preventDefault();
  signIn(new FormData(event.currentTarget).get("code"));
});

logoutButton.addEventListener("click", async () => {
  try {
    await api("/logout", { method: "POST", body: "{}" });
  } catch {}
  showAccess("You have been signed out.");
});

(async function initialize() {
  const fragment = new URLSearchParams(window.location.hash.slice(1));
  const accessCode = fragment.get("access");
  if (accessCode) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
    await signIn(accessCode);
    return;
  }
  try {
    const data = await api("/session");
    if (data.role === "client") showDashboard(data.client);
    else showAccess();
  } catch {
    showAccess();
  }
})();
