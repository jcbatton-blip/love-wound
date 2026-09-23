const API = "/api/client-portal";
const loadingView = document.querySelector("#admin-loading");
const loginView = document.querySelector("#admin-login-view");
const adminView = document.querySelector("#admin-view");
const logoutButton = document.querySelector("#admin-logout");
const clientForm = document.querySelector("#client-form");
const summaryForm = document.querySelector("#summary-form");
let clients = [];
let selectedClientId = null;

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

function showLogin(message = "") {
  loadingView.hidden = true;
  adminView.hidden = true;
  loginView.hidden = false;
  logoutButton.hidden = true;
  document.querySelector("#admin-login-message").textContent = message;
}

async function showAdmin() {
  loadingView.hidden = true;
  loginView.hidden = true;
  adminView.hidden = false;
  logoutButton.hidden = false;
  await loadClients();
}

async function loadClients() {
  const data = await api("/admin/clients");
  clients = data.clients.sort((a, b) => a.name.localeCompare(b.name));
  renderClientList();
  if (selectedClientId) {
    const client = clients.find(item => item.id === selectedClientId);
    if (client) selectClient(client.id);
  }
}

function renderClientList() {
  const list = document.querySelector("#client-list");
  list.innerHTML = clients.length
    ? clients
        .map(
          client => `
    <button class="client-row ${client.id === selectedClientId ? "active" : ""}" type="button" data-client-id="${escapeHtml(client.id)}">
      <strong>${escapeHtml(client.name)}</strong>
      <span>${client.summaries.length} reflection${client.summaries.length === 1 ? "" : "s"} • ${escapeHtml(client.status)}</span>
    </button>`
        )
        .join("")
    : `<p class="small-note">No client profiles yet.</p>`;
  list
    .querySelectorAll("[data-client-id]")
    .forEach(button =>
      button.addEventListener("click", () =>
        selectClient(button.dataset.clientId)
      )
    );
}

function setInvite(link) {
  const box = document.querySelector("#invite-box");
  box.hidden = !link;
  document.querySelector("#invite-link").textContent = link || "";
}

function openNewClient() {
  selectedClientId = null;
  renderClientList();
  document.querySelector("#empty-editor").hidden = true;
  clientForm.hidden = false;
  clientForm.reset();
  clientForm.elements.clientId.value = "";
  clientForm.elements.memberSince.value = new Date().toISOString().slice(0, 10);
  document.querySelector("#client-form-kicker").textContent = "New client";
  document.querySelector("#client-form-title").textContent =
    "Create a private profile";
  document.querySelector("#status-field").hidden = true;
  document.querySelector("#rotate-link-button").hidden = true;
  document.querySelector("#summaries-editor").hidden = true;
  document.querySelector("#client-form-message").textContent = "";
  setInvite("");
  clientForm.elements.name.focus();
}

function selectClient(id) {
  const client = clients.find(item => item.id === id);
  if (!client) return;
  selectedClientId = id;
  renderClientList();
  document.querySelector("#empty-editor").hidden = true;
  clientForm.hidden = false;
  clientForm.elements.clientId.value = client.id;
  clientForm.elements.name.value = client.name;
  clientForm.elements.preferredName.value = client.preferredName || "";
  clientForm.elements.email.value = client.email;
  clientForm.elements.memberSince.value = client.memberSince || "";
  clientForm.elements.focus.value = client.focus || "";
  clientForm.elements.status.value = client.status;
  document.querySelector("#client-form-kicker").textContent = "Client profile";
  document.querySelector("#client-form-title").textContent = client.name;
  document.querySelector("#status-field").hidden = false;
  document.querySelector("#rotate-link-button").hidden = false;
  document.querySelector("#summaries-editor").hidden = false;
  document.querySelector("#client-form-message").textContent = "";
  summaryForm.hidden = true;
  setInvite("");
  renderSummaries(client);
}

function renderSummaries(client) {
  const list = document.querySelector("#summary-admin-list");
  list.innerHTML = client.summaries.length
    ? client.summaries
        .map(
          summary => `
    <button class="summary-admin-row" type="button" data-summary-id="${escapeHtml(summary.id)}">
      <span><strong>${escapeHtml(summary.title)}</strong><br><span class="small-note">${escapeHtml(summary.sessionDate)}</span></span>
      <span class="status-pill ${summary.status === "published" ? "published" : ""}">${escapeHtml(summary.status)}</span>
    </button>`
        )
        .join("")
    : `<p class="small-note">No reflections yet. Add one after a session and keep it as a draft until it is ready to share.</p>`;
  list
    .querySelectorAll("[data-summary-id]")
    .forEach(button =>
      button.addEventListener("click", () =>
        openSummary(button.dataset.summaryId)
      )
    );
}

function openSummary(summaryId = "") {
  const client = clients.find(item => item.id === selectedClientId);
  if (!client) return;
  const summary = client.summaries.find(item => item.id === summaryId);
  summaryForm.hidden = false;
  summaryForm.reset();
  summaryForm.elements.summaryId.value = summary?.id || "";
  summaryForm.elements.sessionDate.value =
    summary?.sessionDate || new Date().toISOString().slice(0, 10);
  summaryForm.elements.status.value = summary?.status || "draft";
  summaryForm.elements.title.value = summary?.title || "";
  summaryForm.elements.reflection.value = summary?.reflection || "";
  summaryForm.elements.takeaways.value = summary?.takeaways?.join("\n") || "";
  summaryForm.elements.nextSteps.value = summary?.nextSteps?.join("\n") || "";
  document.querySelector("#summary-form-message").textContent = "";
  summaryForm.elements.title.focus();
}

document
  .querySelector("#admin-login-form")
  .addEventListener("submit", async event => {
    event.preventDefault();
    const button = event.currentTarget.querySelector("button");
    const message = document.querySelector("#admin-login-message");
    button.disabled = true;
    message.textContent = "";
    try {
      await api("/admin-login", {
        method: "POST",
        body: JSON.stringify({
          password: new FormData(event.currentTarget).get("password"),
        }),
      });
      event.currentTarget.reset();
      await showAdmin();
    } catch (error) {
      message.textContent = error.message;
    } finally {
      button.disabled = false;
    }
  });

clientForm.addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const id = form.elements.clientId.value;
  const payload = Object.fromEntries(new FormData(form));
  delete payload.clientId;
  const message = document.querySelector("#client-form-message");
  message.textContent = "Saving…";
  try {
    const data = await api(id ? `/admin/clients/${id}` : "/admin/clients", {
      method: id ? "PATCH" : "POST",
      body: JSON.stringify(payload),
    });
    selectedClientId = data.client.id;
    if (data.inviteLink) setInvite(data.inviteLink);
    await loadClients();
    message.textContent = id
      ? "Profile saved."
      : "Profile created. Copy the private access link below.";
    if (data.inviteLink) setInvite(data.inviteLink);
  } catch (error) {
    message.textContent = error.message;
  }
});

summaryForm.addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const summaryId = form.elements.summaryId.value;
  const payload = Object.fromEntries(new FormData(form));
  delete payload.summaryId;
  payload.takeaways = payload.takeaways
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);
  payload.nextSteps = payload.nextSteps
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);
  const message = document.querySelector("#summary-form-message");
  message.textContent = "Saving…";
  try {
    const suffix = summaryId ? `/${summaryId}` : "";
    await api(`/admin/clients/${selectedClientId}/summaries${suffix}`, {
      method: summaryId ? "PATCH" : "POST",
      body: JSON.stringify(payload),
    });
    message.textContent =
      payload.status === "published"
        ? "Saved and published to the client."
        : "Draft saved. The client cannot see it yet.";
    await loadClients();
    summaryForm.hidden = false;
  } catch (error) {
    message.textContent = error.message;
  }
});

document
  .querySelector("#new-client-button")
  .addEventListener("click", openNewClient);
document
  .querySelector("#new-summary-button")
  .addEventListener("click", () => openSummary());
document
  .querySelector("#cancel-summary-button")
  .addEventListener("click", () => {
    summaryForm.hidden = true;
  });
document
  .querySelector("#rotate-link-button")
  .addEventListener("click", async () => {
    const button = document.querySelector("#rotate-link-button");
    button.disabled = true;
    try {
      const data = await api(
        `/admin/clients/${selectedClientId}/rotate-access`,
        { method: "POST", body: "{}" }
      );
      setInvite(data.inviteLink);
      document.querySelector("#client-form-message").textContent =
        "New link created. The previous link will no longer sign in.";
    } catch (error) {
      document.querySelector("#client-form-message").textContent =
        error.message;
    } finally {
      button.disabled = false;
    }
  });
document
  .querySelector("#copy-invite-button")
  .addEventListener("click", async () => {
    const button = document.querySelector("#copy-invite-button");
    await navigator.clipboard.writeText(
      document.querySelector("#invite-link").textContent
    );
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy link";
    }, 1800);
  });
logoutButton.addEventListener("click", async () => {
  try {
    await api("/logout", { method: "POST", body: "{}" });
  } catch {}
  showLogin("You have been signed out.");
});

(async function initialize() {
  try {
    const session = await api("/session");
    if (session.role === "admin") await showAdmin();
    else showLogin();
  } catch {
    showLogin();
  }
})();
