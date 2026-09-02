/**
 * DiWA — Agency Portal Interactive Controller
 * Strictly adheres to Ollama Design MD and reference layout (media_1787798556458.png).
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Determine active agency from query string (e.g. ?agency=dict)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedAgency = (urlParams.get("agency") || "dict").toLowerCase();
  
  const agencyData = AGENCIES_DATABASE[requestedAgency] || AGENCIES_DATABASE.dict;
  const currentKey = AGENCIES_DATABASE[requestedAgency] ? requestedAgency : "dict";

  // 2. Initialize Manila Clock
  initManilaClock();

  // 3. Render Agency Page Content
  renderAgencyPage(agencyData, currentKey);

  // 4. Setup Copy Button for Agency API Endpoint
  setupCopyButton(agencyData.feedEndpoint);

  // 5. Setup Search and Modals
  setupAgencyModal();

  // 6. Deep-link modal support (e.g. ?agency=dost&modal=dost-latest-02)
  const modalTarget = urlParams.get("modal");
  if (modalTarget) {
    openAgencyModal(modalTarget);
  }
});

/**
 * Manila Standard Time (PHT, UTC+8) Live Clock
 */
function initManilaClock() {
  const clockEl = document.getElementById("manilaLiveClock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const phtOptions = {
      timeZone: "Asia/Manila",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const timeStr = now.toLocaleTimeString("en-US", phtOptions);
    clockEl.textContent = `${timeStr} PHT · Manila`;
  }
  update();
  setInterval(update, 1000);
}

/**
 * Render all sections of the agency portal
 */
function renderAgencyPage(data, key) {
  // Update document title
  document.title = `${data.code} — DiWA | Republic of the Philippines`;

  // Update Breadcrumb & Header
  const agencyCrumb = document.getElementById("agencyBreadcrumbName");
  if (agencyCrumb) agencyCrumb.textContent = `${data.fullName} (${data.code})`;

  const agencyBadge = document.getElementById("agencyProfileBadge");
  if (agencyBadge) {
    agencyBadge.textContent = data.code;
    agencyBadge.className = `agency-profile-badge ${data.accentPill || 'pill-dict'}`;
  }

  const agencyFullName = document.getElementById("agencyProfileFullName");
  if (agencyFullName) agencyFullName.textContent = data.fullName;

  const agencyLead = document.getElementById("agencyProfileLead");
  if (agencyLead) agencyLead.textContent = data.secretary;

  const agencyMandate = document.getElementById("agencyProfileMandate");
  if (agencyMandate) agencyMandate.textContent = data.mandate;

  const curlCode = document.getElementById("agencyCurlCode");
  if (curlCode) {
    curlCode.innerHTML = `<span class="prefix">curl -fsSL </span>https://diwa.gov.ph/api/v1/agency/${key} | jq .`;
  }

  // Update Active Navigation Tab
  document.querySelectorAll(".sub-nav-links a").forEach(link => {
    const linkAgency = link.getAttribute("data-agency-target");
    if (linkAgency === key) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // 1. Top Section: Feature Card (Left Column)
  const feat = data.featureStory;
  const featureContainer = document.getElementById("agencyFeatureContainer");
  if (featureContainer && feat) {
    featureContainer.innerHTML = `
      <article class="agency-feature-card" onclick="openAgencyModal('${feat.id}')">
        <img src="${feat.image}" alt="${feat.title}" class="agency-feature-img">
        <div class="agency-feature-overlay">
          <div class="agency-cat-pill">
            <span class="cat-dot"></span>
            <span>${feat.category}</span>
          </div>
          <h2 class="agency-feature-title">${feat.title}</h2>
          <div class="agency-feature-meta">
            <span>${feat.date}</span>
            <span>·</span>
            <span>${feat.readTime}</span>
          </div>
        </div>
      </article>
    `;
  }

  // 2. Top Section: Latest Dispatches (Right Column - 4 items)
  const latestListContainer = document.getElementById("agencyLatestList");
  if (latestListContainer && data.latestDispatches) {
    latestListContainer.innerHTML = data.latestDispatches.map(item => `
      <article class="agency-latest-item" onclick="openAgencyModal('${item.id}')">
        <div class="agency-latest-thumb-wrap">
          <img src="${item.image}" alt="${item.title}" class="agency-latest-thumb">
        </div>
        <div class="agency-latest-content">
          <h4 class="agency-latest-title">${item.title}</h4>
          <div class="agency-latest-meta">
            <span>${item.category}</span>
            <span>·</span>
            <span>${item.date}</span>
            <span>·</span>
            <span>${item.readTime}</span>
          </div>
        </div>
      </article>
    `).join("");
  }

  // 3. Bottom Section: Key Initiatives / Circulars (3-Up Grid)
  const initiativesGrid = document.getElementById("agencyInitiativesGrid");
  if (initiativesGrid && data.initiatives) {
    initiativesGrid.innerHTML = data.initiatives.map(init => `
      <article class="agency-initiative-card" onclick="openAgencyModal('${init.id}')">
        <div class="agency-initiative-thumb-wrap">
          <img src="${init.image}" alt="${init.title}" class="agency-initiative-thumb">
        </div>
        <div class="agency-initiative-body">
          <div class="agency-cat-pill-inline">
            <span class="cat-dot"></span>
            <span>${init.category}</span>
          </div>
          <h3 class="agency-initiative-title">${init.title}</h3>
          <p class="agency-initiative-summary">${init.summary}</p>
          <div class="agency-initiative-meta">
            <span>${init.date}</span>
            <span>·</span>
            <span>${init.readTime}</span>
          </div>
        </div>
      </article>
    `).join("");
  }
}

/**
 * Copy CLI command to clipboard with tooltip animation
 */
function setupCopyButton(endpointUrl) {
  const copyBtn = document.getElementById("copyInstallBtn");
  const tooltip = document.getElementById("copyTooltip");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const cmdText = `curl -fsSL ${endpointUrl} | jq .`;
    navigator.clipboard.writeText(cmdText).then(() => {
      if (tooltip) {
        tooltip.classList.add("show");
        setTimeout(() => tooltip.classList.remove("show"), 1800);
      }
    });
  });
}

/**
 * Modal reader setup
 */
function setupAgencyModal() {
  const modal = document.getElementById("dispatchModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeAgencyModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeAgencyModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeAgencyModal();
    }
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let currentModalItem = null;

function openAgencyModal(id) {
  const modal = document.getElementById("dispatchModal");
  const container = document.getElementById("modalDynamicContent");
  if (!modal || !container) return;

  // Search across agency database for this item
  let found = null;
  let agencyKey = "dict";

  for (const [key, ag] of Object.entries(AGENCIES_DATABASE)) {
    if (ag.featureStory && ag.featureStory.id === id) {
      found = { 
        ...ag.featureStory, 
        agency: ag.code, 
        agencyFullName: ag.fullName,
        docNumber: `${ag.code}-SO-2026-088`,
        authority: "Executive Order No. 292 & Administrative Code",
        signatory: ag.secretary,
        category: ag.featureStory.category
      };
      agencyKey = key;
      break;
    }
    const inLatest = ag.latestDispatches.find(d => d.id === id);
    if (inLatest) {
      found = { 
        ...inLatest, 
        agency: ag.code, 
        agencyFullName: ag.fullName, 
        docNumber: `${ag.code}-DISP-2026-0${Math.floor(10 + Math.random()*90)}`,
        authority: "Official Gazette of the Republic of the Philippines",
        signatory: ag.secretary,
        summary: inLatest.title, 
        content: `Official Gazette record and public issuance from ${ag.fullName}. Full circular text is synchronized with the national registry pursuant to Section 18 of Executive Order No. 292.` 
      };
      agencyKey = key;
      break;
    }
    const inInit = ag.initiatives.find(i => i.id === id);
    if (inInit) {
      found = { 
        ...inInit, 
        agency: ag.code, 
        agencyFullName: ag.fullName, 
        docNumber: `${ag.code}-DIR-2026-0${Math.floor(10 + Math.random()*90)}`,
        authority: "Philippine Development Plan 2023-2028",
        signatory: ag.secretary,
        content: inInit.summary 
      };
      agencyKey = key;
      break;
    }
  }

  if (!found) return;
  currentModalItem = found;

  container.innerHTML = `
    <div class="news-meta-left" style="margin-bottom: 8px;">
      <span class="agency-badge">${escapeHtml(found.agency)}</span>
      <span class="news-date">${escapeHtml(found.date)} · PHT</span>
    </div>

    <h2 class="modal-article-title">${escapeHtml(found.title)}</h2>

    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <strong>Document Code:</strong> ${escapeHtml(found.docNumber || `${found.agency}-DISP-2026`)}
      </div>
      <div class="modal-meta-item">
        <strong>Legal Authority:</strong> ${escapeHtml(found.authority || "Republic of the Philippines")}
      </div>
      <div class="modal-meta-item">
        <strong>Classification:</strong> ${escapeHtml(found.category || "Official Issuance")}
      </div>
      <div class="modal-meta-item">
        <strong>Signatory:</strong> ${escapeHtml(found.signatory || AGENCIES_DATABASE[agencyKey].secretary)}
      </div>
    </div>

    <div class="modal-content-prose">
      <blockquote>
        Official National Gazette Abstract: ${escapeHtml(found.summary || found.title)}
      </blockquote>
      
      <p>${escapeHtml(found.content || found.summary).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")}</p>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAgencyModal() {
  const modal = document.getElementById("dispatchModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function copyModalMarkdown() {
  if (!currentModalItem) return;
  const md = `# ${currentModalItem.agency}: ${currentModalItem.title}\n\n**Document ID**: ${currentModalItem.docNumber || "N/A"}\n\n> ${currentModalItem.summary || ""}\n\n${currentModalItem.content || currentModalItem.summary}\n\n---\n*DiWA · Republic of the Philippines Public Information Wire*`;
  navigator.clipboard.writeText(md).then(() => {
    alert("Official dispatch copied as Markdown!");
  });
}
