/**
 * DiWA — Digital Information & Wire Archive
 * Philippine National Agencies News System
 * Strict compliance with Design MD specifications.
 */

// Comprehensive authentic dataset for Philippine National Agencies
const AGENCY_NEWS = [
  {
    id: "dict-2026-01",
    agency: "DICT",
    agencyFullName: "Department of Information and Communications Technology",
    category: "Memorandum Circular",
    docNumber: "DICT-MC-2026-008",
    date: "August 26, 2026",
    timePHT: "16:45 PHT",
    title: "National Government Portal 3.0 & Inter-Agency API Gateway Architecture Mandate",
    summary: "DICT issues mandatory interoperability guidelines requiring all national departments, constitutional commissions, and GOCCs to adopt the Unified Philippine API Gateway for cross-agency data verification by Q4 2026.",
    bullets: [
      "Mandates JSON REST / gRPC standardized interfaces for public records exchange",
      "Deploys zero-trust cryptographic signature verification for all government issuances",
      "Reduces citizen document re-submission overhead across 34 executive bureaus"
    ],
    signatory: "Ivan John E. Uy, Secretary of Information & Communications Technology",
    authority: "Republic Act No. 10844 & E-Government Masterplan 2028",
    content: `Pursuant to Section 15 of Republic Act No. 10844 and the national policy on Digital Public Infrastructure, all national line agencies, attached bureaus, and constitutional bodies are hereby directed to interconnect their public service catalogs to the National Government Portal 3.0 (DiWA Network).

Key Provisions:
1. Universal API Architecture: All government registries must publish Open API 3.1 compliant endpoints via the DICT Central Gateway.
2. Digital Document Integrity: PDF and Markdown dispatches must embed national PKI digital timestamps to prevent disinformation and unauthorized alteration.
3. Citizen Data Sovereignty: Agencies shall comply with National Privacy Commission Circular 2024-02 on cross-border data residency and cryptographic data partitioning.`
  },
  {
    id: "comelec-2026-01",
    agency: "COMELEC",
    agencyFullName: "Commission on Elections",
    category: "En Banc Resolution",
    docNumber: "COMELEC-RES-11048",
    date: "August 26, 2026",
    timePHT: "14:20 PHT",
    title: "Promulgation of Open Audit Protocols for Automated Election Optical Mark Readers",
    summary: "The Commission en banc has enacted Resolution 11048, institutionalizing 100% public source code escrow, deterministic hardware hash checks, and random manual audit standards for all national electoral equipment.",
    bullets: [
      "Open source code repository made inspectable to accredited political parties and civic tech groups",
      "Random Manual Audit sample rate increased to five precincts per legislative district",
      "Real-time transmission integrity logs published directly to DiWA public wire"
    ],
    signatory: "George Erwin M. Garcia, Chairman, Commission on Elections",
    authority: "The 1987 Constitution & Republic Act No. 9369",
    content: `WHEREAS, transparency is the bedrock of democratic consent and institutional trust; the Commission on Elections En Banc resolves to open the technical validation framework for the Automated Election System to continuous public scrutiny.

Enacted Guidelines:
1. Technical Committee Oversight: Accredited academic institutions and software engineers may inspect cryptographic hash seeds 90 days prior to election cycles.
2. Zero Airgap Breach Policy: Any machine checksum anomaly triggers immediate automated failover and mandatory physical ballot count in the presence of watchers.`
  },
  {
    id: "coa-2026-01",
    agency: "COA",
    agencyFullName: "Commission on Audit",
    category: "Audit Report",
    docNumber: "COA-AFR-2026-04",
    date: "August 25, 2026",
    timePHT: "11:15 PHT",
    title: "Consolidated Annual Audit Findings on Digital Infrastructure Procurement & Fund Utilization",
    summary: "The Commission on Audit submits its consolidated audit report detailing procurement compliance, project execution velocity, and liquidation benchmarks across major national infrastructure programs.",
    bullets: [
      "Unqualified audit opinions issued to 14 national agencies demonstrating 98%+ budget utilization",
      "Audit Observation Memorandums (AOMs) uploaded directly to the open digital ledger",
      "New audit guidelines released for cloud computing subscriptions and SaaS procurement"
    ],
    signatory: "Gamaliel A. Cordoba, Chairperson, Commission on Audit",
    authority: "Article IX-D, 1987 Constitution of the Republic of the Philippines",
    content: `The Commission on Audit transmits herewith the 2025 Consolidated Annual Financial Report on Executive Departments and Agencies pursuant to constitutional reporting timelines.

Highlights:
- Capital Outlay Delivery: National road and fiber corridor completion rates improved by 22% year-on-year.
- Compliance With RA 9184: All evaluated bidding records across 48 sampled bureaus complied with public procurement electronic bidding requirements.
- Action on Recommendations: 87% of previous audit findings have been fully implemented by the respective governing boards.`
  },
  {
    id: "deped-2026-01",
    agency: "DepEd",
    agencyFullName: "Department of Education",
    category: "Department Order",
    docNumber: "DEPED-DO-014-S2026",
    date: "August 25, 2026",
    timePHT: "09:30 PHT",
    title: "Expansion of MATATAG Curriculum Open Learning Commons & AI-Assisted Pedagogy Framework",
    summary: "DepEd issues policy guidelines for the nationwide distribution of standardized, open-access digital learning materials and ethical teacher-assistive technologies across 47,000 public schools.",
    bullets: [
      "12,000 peer-reviewed digital learning modules released under Open Government Educational Commons",
      "Classroom broadband connectivity extended to 3,800 Last Mile Schools in geographically isolated areas",
      "Clear boundaries prohibiting algorithmic replacement of classroom teachers and safeguarding student privacy"
    ],
    signatory: "Sonny Angara, Secretary of Education",
    authority: "Republic Act No. 10533 (Enhanced Basic Education Act)",
    content: `In line with our commitment to decongesting basic education and elevating foundational literacy, the Department of Education promulgates Order No. 14, series of 2026.

Sections:
1. The MATATAG Commons: Every teacher and learner shall have unrestricted, bandwidth-subsidized access to foundational literacy and numeracy resources.
2. Last-Mile Infrastructure: DepEd Computerization Program (DCP) hardware shipments are expedited to island and upland schools with solar microgrid assistance.`
  },
  {
    id: "doh-2026-01",
    agency: "DOH",
    agencyFullName: "Department of Health",
    category: "Public Advisory",
    docNumber: "DOH-ADV-2026-112",
    date: "August 24, 2026",
    timePHT: "17:00 PHT",
    title: "Universal Health Care Primary Care Network Integration: PhilHealth Konsulta Rollout",
    summary: "DOH and PhilHealth announce the nationwide expansion of accredited primary care facilities, granting every Filipino family access to free essential diagnostics and preventive consultation bundles.",
    bullets: [
      "Accreditation of 2,450 rural health units and private clinics as comprehensive Konsulta providers",
      "Guaranteed zero out-of-pocket expenses for 21 essential blood tests, imaging, and core maintenance medicines",
      "Unified electronic health records (EHR) sync implemented with national health data cloud"
    ],
    signatory: "Teodoro J. Herbosa, MD, Secretary of Health",
    authority: "Republic Act No. 11223 (Universal Health Care Act)",
    content: `The Department of Health advises the general public on the full-scale deployment of the Konsulta Comprehensive Benefit Package across all 17 regions.

Under Republic Act No. 11223:
1. Universal Registration: Every citizen is automatically eligible at their nearest barangay health station or accredited private clinic.
2. Medicine Delivery: Maintenance medicines for hypertension, diabetes, and asthma will be distributed through local health centers without cost.`
  },
  {
    id: "dbm-2026-01",
    agency: "DBM",
    agencyFullName: "Department of Budget and Management",
    category: "National Budget Circular",
    docNumber: "DBM-NBC-2026-594",
    date: "August 24, 2026",
    timePHT: "13:40 PHT",
    title: "FY 2027 National Expenditure Program Guidelines: Cash-Budgeting & Climate Tagging",
    summary: "DBM releases budget preparation parameters for fiscal year 2027, highlighting digital transformation priorities, disaster resilience climate expenditures, and strict implementation of the Cash Budgeting System.",
    bullets: [
      "Prioritizes digitalization projects demonstrating inter-agency API connectivity",
      "Mandatory 15% minimum allocation for climate mitigation and flood control verification metrics",
      "Streamlined Notice of Cash Allocation (NCA) automation eliminating paper processing delays"
    ],
    signatory: "Amenah F. Pangandaman, Secretary of Budget and Management",
    authority: "Executive Order No. 91 & Administrative Code of 1987",
    content: `All heads of departments, bureaus, state universities and colleges (SUCs), and government-owned or -controlled corporations (GOCCs) are instructed to align FY 2027 proposals with the Philippine Development Plan 2023-2028.

Key Directives:
1. Performance-Informed Budgeting: Agency allocations shall be directly linked to audited physical accomplishments.
2. Electronic Disbursement: 100% of vendor payments and personnel benefits must pass through PhilPaSS / RTGS channels.`
  },
  {
    id: "dost-2026-01",
    agency: "DOST",
    agencyFullName: "Department of Science and Technology",
    category: "Press Release",
    docNumber: "DOST-PR-2026-031",
    date: "August 23, 2026",
    timePHT: "15:20 PHT",
    title: "Launch of PhilSA Diwata-3 Earth Observation Satellite Ground Data Sharing Service",
    summary: "DOST in collaboration with the Philippine Space Agency (PhilSA) opens open-access multi-spectral satellite imagery and disaster mapping datasets to all LGUs and national planning agencies.",
    bullets: [
      "Sub-meter resolution satellite imagery refreshed every 48 hours for typhoon and flood tracking",
      "Agricultural yield estimation models made freely available to municipal agriculturists",
      "Automated coastal zone and maritime domain environmental monitoring feeds"
    ],
    signatory: "Dr. Renato U. Solidum Jr., Secretary of Science and Technology",
    authority: "Republic Act No. 11363 (Philippine Space Act)",
    content: `The Department of Science and Technology, alongside PhilSA, officially inaugurates the Diwata-3 Open Earth Observation Downlink. LGUs, environmental agencies, and researchers can download calibrated spectral feeds to support disaster mitigation, agriculture, and urban planning.`
  },
  {
    id: "dswd-2026-01",
    agency: "DSWD",
    agencyFullName: "Department of Social Welfare and Development",
    category: "Administrative Order",
    docNumber: "DSWD-AO-2026-009",
    date: "August 23, 2026",
    timePHT: "10:15 PHT",
    title: "Digital Wallets & Biometric Verification for 4Ps Beneficiary Cash Grants",
    summary: "DSWD completes migration to electronic cash cards and PhilSys-enabled biometric verification, eradicating intermediary fees and reducing payout queue times from 6 hours to under 8 minutes.",
    bullets: [
      "4.4 million household beneficiaries now equipped with EMV and digital wallet accounts",
      "Elimination of physical over-the-counter paymaster queuing in remote municipalities",
      "Real-time fraud detection and instant grievance resolution through the DiWA e-Gov wire"
    ],
    signatory: "Rex Gatchalian, Secretary of Social Welfare and Development",
    authority: "Republic Act No. 11310 (4Ps Act)",
    content: `Pursuant to our mandate to protect and promote the welfare of impoverished sectors, DSWD transitions all conditional cash transfers to direct-to-account digital disbursements. Beneficiaries may withdraw without fees at LandBank, DBP, and partner automated teller networks.`
  },
  {
    id: "neda-2026-01",
    agency: "NEDA",
    agencyFullName: "National Economic and Development Authority",
    category: "Policy Brief",
    docNumber: "NEDA-PB-2026-08",
    date: "August 22, 2026",
    timePHT: "16:00 PHT",
    title: "Medium-Term Philippine Development Plan Mid-Decade Review: 6.2% GDP Growth & Inflation Stability",
    summary: "NEDA presents the mid-decade socioeconomic scorecard showing robust domestic demand, expanding manufacturing capacity, and declining poverty incidence towards single-digit levels by 2028.",
    bullets: [
      "Headline inflation sustained within the 2.0% - 4.0% official target corridor",
      "Infrastructure spending maintained at 5.4% of Gross Domestic Product",
      "Labor market participation reaches historic high with underemployment dropping to 11.2%"
    ],
    signatory: "Arsenio M. Balisacan, Secretary of Socioeconomic Planning",
    authority: "Philippine Development Plan 2023-2028",
    content: `The National Economic and Development Authority confirms that key targets under the Philippine Development Plan remain resilient amid global headwinds. Sustained public investments in transport logistics, renewable energy, and digital infrastructure have created high-quality employment.`
  }
];

// Agency Directory Data for the 3-up Cards
const AGENCY_DIRECTORY = [
  {
    code: "DICT",
    name: "Department of Information and Communications Technology",
    mandate: "Formulates national ICT development, cybersecurity, digital government, and broadband infrastructure policies.",
    dispatchesCount: 42,
    lead: "Ivan John E. Uy, Secretary",
    feedUrl: "https://diwa.gov.ph/api/v1/agency/dict"
  },
  {
    code: "DepEd",
    name: "Department of Education",
    mandate: "Sets national policy, standards, and curricula for basic and secondary education across 47,000 public schools.",
    dispatchesCount: 58,
    lead: "Sonny Angara, Secretary",
    feedUrl: "https://diwa.gov.ph/api/v1/agency/deped"
  },
  {
    code: "COA",
    name: "Commission on Audit",
    mandate: "Independent constitutional commission auditing all government revenues, expenditures, and state property.",
    dispatchesCount: 64,
    lead: "Gamaliel A. Cordoba, Chairperson",
    feedUrl: "https://diwa.gov.ph/api/v1/agency/coa"
  },
  {
    code: "COMELEC",
    name: "Commission on Elections",
    mandate: "Enforces and administers all election laws to ensure free, orderly, honest, peaceful, and credible voting.",
    dispatchesCount: 37,
    lead: "George Erwin M. Garcia, Chairman",
    feedUrl: "https://diwa.gov.ph/api/v1/agency/comelec"
  },
  {
    code: "DOH",
    name: "Department of Health",
    mandate: "National health policy authority guaranteeing equitable, sustainable, and quality universal healthcare for all.",
    dispatchesCount: 49,
    lead: "Teodoro J. Herbosa, Secretary",
    feedUrl: "https://diwa.gov.ph/api/v1/agency/doh"
  },
  {
    code: "DOST",
    name: "Department of Science and Technology",
    mandate: "Directs science, technological research, space observation, meteorology, and domestic innovation initiatives.",
    dispatchesCount: 31,
    lead: "Dr. Renato U. Solidum Jr., Secretary",
    feedUrl: "https://diwa.gov.ph/api/v1/agency/dost"
  }
];

// Simulated Live Terminal Stream Logs
const TERMINAL_LOGS = [
  { time: "09:28:14 PHT", agency: "DICT", text: "DNSSEC and TLS 1.3 cryptographic validation passed for *.gov.ph master registry." },
  { time: "09:25:02 PHT", agency: "COMELEC", text: "En banc publishes official resolution COMELEC-RES-11048 to public archive." },
  { time: "09:20:45 PHT", agency: "COA", text: "Executive summary for FY2025 procurement audit indexed to DiWA dataset." },
  { time: "09:14:30 PHT", agency: "DepEd", text: "MATATAG digital curriculum v2.4 mirrored to regional cache servers." },
  { time: "09:08:12 PHT", agency: "DOH", text: "PhilHealth Konsulta provider directory updated: 2,450 clinics accredited." },
  { time: "09:02:50 PHT", agency: "DBM", text: "Notice of Cash Allocation batch #2026-Q3-08 released to DOTr railway projects." },
  { time: "08:55:18 PHT", agency: "DOST", text: "PhilSA satellite pass completed: Sentinel imagery processed for typhoon watch." },
  { time: "08:44:00 PHT", agency: "DSWD", text: "Biometric e-wallet sync confirmed for 180,000 households in Region VI." }
];

// State Management
let currentAgencyFilter = "all";
let currentSearchQuery = "";
let isTerminalStreaming = true;
let terminalInterval = null;
const HERO_STORIES = [
  {
    pill: "POLITICS & GOVERNANCE · DICT",
    title: "How the Philippines is Unifying All National Agency Records with the DiWA Wire",
    excerpt: "A landmark memorandum circular directs thirty-four executive departments, constitutional commissions, and attached bureaus to synchronize public registries into a single cryptographic wire by Q4 2026.",
    id: "dict-2026-01"
  },
  {
    pill: "ELECTORAL REFORM · COMELEC",
    title: "En Banc Promulgates Open Audit Protocols for Automated Election Optical Mark Readers",
    excerpt: "The Commission en banc enacts Resolution 11048, institutionalizing public source code escrow, deterministic hardware hash checks, and random manual audit standards for all national electoral equipment.",
    id: "comelec-2026-01"
  },
  {
    pill: "PUBLIC ACCOUNTABILITY · COA",
    title: "Consolidated Annual Audit Findings on Digital Infrastructure Procurement & Fund Utilization",
    excerpt: "The Commission on Audit releases its comprehensive review detailing procurement velocity, cloud subscription compliance, and liquidation benchmarks across major national digital programs.",
    id: "coa-2026-01"
  },
  {
    pill: "BASIC EDUCATION · DEPED",
    title: "Expansion of MATATAG Curriculum Open Learning Commons & AI-Assisted Pedagogy",
    excerpt: "DepEd issues policy guidelines for the nationwide distribution of standardized, open-access digital learning materials and ethical teacher-assistive technologies across 47,000 public schools.",
    id: "deped-2026-01"
  }
];

function switchHeroStory(index) {
  const story = HERO_STORIES[index];
  if (!story) return;

  currentHeroIndex = index;

  const pill = document.getElementById("heroStoryPill");
  const title = document.getElementById("heroStoryTitle");
  const excerpt = document.getElementById("heroStoryExcerpt");
  const readBtn = document.getElementById("heroReadBtn");

  // Fade out, swap content, fade in
  const mainCol = document.querySelector(".hero-main-column");
  if (mainCol) mainCol.classList.add("hero-fade-out");

  setTimeout(() => {
    if (pill) pill.innerText = story.pill;
    if (title) title.innerText = story.title;
    if (excerpt) excerpt.innerText = story.excerpt;
    if (readBtn) {
      readBtn.onclick = () => openDispatchModal(story.id);
    }

    const pills = document.querySelectorAll(".hero-page-pill");
    pills.forEach((p, i) => {
      if (i === index) p.classList.add("active");
      else p.classList.remove("active");
    });

    if (mainCol) {
      mainCol.classList.remove("hero-fade-out");
      mainCol.classList.add("hero-fade-in");
      setTimeout(() => mainCol.classList.remove("hero-fade-in"), 400);
    }
  }, 250);
}

// Hero Auto-Rotate
let currentHeroIndex = 0;
let heroAutoInterval = null;
let heroIsPaused = false;

function startHeroAutoRotate() {
  heroAutoInterval = setInterval(() => {
    if (!heroIsPaused) {
      currentHeroIndex = (currentHeroIndex + 1) % HERO_STORIES.length;
      switchHeroStory(currentHeroIndex);
    }
  }, 5000);
}

function initHeroAutoRotate() {
  startHeroAutoRotate();

  // Pause on hover
  const heroSection = document.querySelector(".editorial-hero");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", () => { heroIsPaused = true; });
    heroSection.addEventListener("mouseleave", () => { heroIsPaused = false; });
  }

  // Reset timer when user manually clicks a pill
  document.querySelectorAll(".hero-page-pill").forEach((pill, i) => {
    pill.addEventListener("click", () => {
      clearInterval(heroAutoInterval);
      currentHeroIndex = i;
      heroIsPaused = false;
      startHeroAutoRotate();
    });
  });
}

function initManilaClock() {
  const badge = document.getElementById("navTimeBadge");
  if (!badge) return;
  const update = () => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const pht = new Date(utc + (3600000 * 8));
    const h = String(pht.getHours()).padStart(2, '0');
    const m = String(pht.getMinutes()).padStart(2, '0');
    const s = String(pht.getSeconds()).padStart(2, '0');
    badge.innerHTML = `<span class="nav-status-dot"></span><span>${h}:${m}:${s} PHT · Manila</span>`;
  };
  update();
  setInterval(update, 1000);
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initManilaClock();
  initHeroAutoRotate();
  renderNewsFeed();
  renderAgencyDirectory();
  initTerminalStream();
  setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
  // Search Inputs (Nav search and in-page triggers)
  const navSearch = document.getElementById("navSearchInput");
  if (navSearch) {
    navSearch.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      renderNewsFeed();
    });
  }

  // Agency Filter Pills
  const filterButtons = document.querySelectorAll("[data-agency-filter]");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentAgencyFilter = btn.getAttribute("data-agency-filter");
      renderNewsFeed();
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
    });
  }

  // Copy Install Snippet
  const copyBtn = document.getElementById("copyInstallBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const codeSnippet = document.getElementById("installSnippetCode").innerText;
      copyToClipboard(codeSnippet, "Command copied to clipboard");
      
      const tooltip = document.getElementById("copyTooltip");
      if (tooltip) {
        tooltip.classList.add("show");
        setTimeout(() => tooltip.classList.remove("show"), 2000);
      }
    });
  }

  // Terminal Play/Pause Button
  const termControl = document.getElementById("terminalToggleBtn");
  if (termControl) {
    termControl.addEventListener("click", () => {
      isTerminalStreaming = !isTerminalStreaming;
      termControl.innerText = isTerminalStreaming ? "Pause Stream" : "Resume Stream";
      showToast(isTerminalStreaming ? "Resumed live wire streaming" : "Paused wire streaming");
    });
  }

  // Close Modal on Escape or Backdrop Click
  const modalBackdrop = document.getElementById("dispatchModal");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeDispatchModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDispatchModal();
    }
  });
}

// Render News Feed Cards
function renderNewsFeed() {
  const container = document.getElementById("newsFeedList");
  const countBadge = document.getElementById("newsCountBadge");
  if (!container) return;

  // Filter Items
  const filtered = AGENCY_NEWS.filter(item => {
    const matchesAgency = currentAgencyFilter === "all" || item.agency.toLowerCase() === currentAgencyFilter.toLowerCase();
    const query = currentSearchQuery;
    const matchesQuery = !query || 
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.agency.toLowerCase().includes(query) ||
      item.agencyFullName.toLowerCase().includes(query) ||
      item.docNumber.toLowerCase().includes(query);

    return matchesAgency && matchesQuery;
  });

  if (countBadge) {
    countBadge.innerText = `Showing ${filtered.length} of ${AGENCY_NEWS.length} official issuances`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No official issuances matched your filter criteria.</p>
        <button class="button-secondary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="news-card" data-id="${item.id}">
      <div class="news-card-with-thumb">
        <div class="news-card-thumb" onclick="openDispatchModal('${item.id}')">
          <img src="assets/thumb-${item.agency.toLowerCase()}.jpg" alt="${escapeHtml(item.agency)}" />
        </div>
        <div class="news-card-content">
          <div class="news-card-header">
            <div class="news-meta-left">
              <span class="agency-badge">${escapeHtml(item.agency)}</span>
              <span class="news-date">${escapeHtml(item.date)} · ${escapeHtml(item.timePHT)}</span>
            </div>
            <span class="news-doc-id">${escapeHtml(item.docNumber)}</span>
          </div>

          <h3 class="news-title" onclick="openDispatchModal('${item.id}')">${escapeHtml(item.title)}</h3>
          
          <p class="news-summary">${escapeHtml(item.summary)}</p>

          <ul class="news-bullets">
            ${item.bullets.map(b => `
              <li class="feature-bullet">
                <span class="bullet-check">✓</span>
                <span>${escapeHtml(b)}</span>
              </li>
            `).join("")}
          </ul>

          <div class="news-card-footer">
            <span class="news-category-label">${escapeHtml(item.category)}</span>
            <button class="news-read-btn" onclick="openDispatchModal('${item.id}')">
              Read Official Dispatch →
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

// Render 3-up Agency Directory Cards
function renderAgencyDirectory() {
  const container = document.getElementById("directoryGrid");
  if (!container) return;

  container.innerHTML = AGENCY_DIRECTORY.map(agency => `
    <div class="pricing-card">
      <div class="agency-card-top">
        <h4 class="agency-code">${escapeHtml(agency.code)}</h4>
        <div class="agency-full-name">${escapeHtml(agency.name)}</div>
        <p class="agency-desc">${escapeHtml(agency.mandate)}</p>
      </div>

      <div>
        <div class="agency-card-divider"></div>
        <div class="agency-card-stats" style="margin-bottom: 16px;">
          <div class="feature-bullet">
            <span class="bullet-check">✓</span>
            <span>${agency.dispatchesCount} Verified Digital Circulars</span>
          </div>
          <div class="feature-bullet">
            <span class="bullet-check">✓</span>
            <span>Lead: ${escapeHtml(agency.lead)}</span>
          </div>
        </div>

        <button class="button-primary" style="width: 100%;" onclick="filterByAgency('${agency.code}')">
          View ${agency.code} Dispatches →
        </button>
      </div>
    </div>
  `).join("");
}

// Live Terminal Simulation
function initTerminalStream() {
  const terminalBody = document.getElementById("terminalLogsBody");
  if (!terminalBody) return;

  let logIndex = 0;
  const addLogEntry = () => {
    if (!isTerminalStreaming) return;

    const entry = TERMINAL_LOGS[logIndex % TERMINAL_LOGS.length];
    logIndex++;

    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = `
      <span class="terminal-time">[${entry.time}]</span>
      <span class="terminal-badge">${entry.agency}:</span>
      <span class="terminal-text">${entry.text}</span>
    `;

    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;

    // Keep max 20 lines to maintain clean memory
    if (terminalBody.children.length > 20) {
      terminalBody.removeChild(terminalBody.children[0]);
    }
  };

  // Prepopulate initial lines
  TERMINAL_LOGS.slice(0, 5).forEach(entry => {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = `
      <span class="terminal-time">[${entry.time}]</span>
      <span class="terminal-badge">${entry.agency}:</span>
      <span class="terminal-text">${entry.text}</span>
    `;
    terminalBody.appendChild(line);
  });

  terminalInterval = setInterval(addLogEntry, 6000);
}

// Open Dispatch Modal
function openDispatchModal(id) {
  const item = AGENCY_NEWS.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById("dispatchModal");
  const container = document.getElementById("modalDynamicContent");
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="news-meta-left" style="margin-bottom: 8px;">
      <span class="agency-badge">${escapeHtml(item.agency)}</span>
      <span class="news-date">${escapeHtml(item.date)} · ${escapeHtml(item.timePHT)}</span>
    </div>

    <h2 class="modal-article-title">${escapeHtml(item.title)}</h2>

    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <strong>Document Code:</strong> ${escapeHtml(item.docNumber)}
      </div>
      <div class="modal-meta-item">
        <strong>Legal Authority:</strong> ${escapeHtml(item.authority || "Republic of the Philippines")}
      </div>
      <div class="modal-meta-item">
        <strong>Classification:</strong> ${escapeHtml(item.category)}
      </div>
      <div class="modal-meta-item">
        <strong>Signatory:</strong> ${escapeHtml(item.signatory || "Executive Authority")}
      </div>
    </div>

    <div class="modal-content-prose">
      <blockquote>
        Official National Gazette Abstract: ${escapeHtml(item.summary)}
      </blockquote>
      
      <p>${escapeHtml(item.content).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")}</p>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Close Dispatch Modal
function closeDispatchModal() {
  const modal = document.getElementById("dispatchModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

// Filter helpers
function filterByAgency(agencyCode) {
  currentAgencyFilter = agencyCode.toLowerCase();
  const filterButtons = document.querySelectorAll("[data-agency-filter]");
  filterButtons.forEach(btn => {
    if (btn.getAttribute("data-agency-filter").toLowerCase() === currentAgencyFilter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderNewsFeed();
  const feedSection = document.getElementById("newsFeedSection");
  if (feedSection) {
    feedSection.scrollIntoView({ behavior: "smooth" });
  }
}

function resetFilters() {
  currentAgencyFilter = "all";
  currentSearchQuery = "";
  const navSearch = document.getElementById("navSearchInput");
  if (navSearch) navSearch.value = "";

  const filterButtons = document.querySelectorAll("[data-agency-filter]");
  filterButtons.forEach(btn => {
    if (btn.getAttribute("data-agency-filter") === "all") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderNewsFeed();
}

// Copy to Clipboard Utility
function copyToClipboard(text, message = "Copied to clipboard") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(message);
  } catch (err) {
    showToast("Failed to copy");
  }
  document.body.removeChild(textArea);
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById("toastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotification";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Copy Modal Content as Markdown
function copyModalMarkdown() {
  const container = document.getElementById("modalDynamicContent");
  if (!container) return;

  const title = container.querySelector(".modal-article-title")?.innerText || "";
  const prose = container.querySelector(".modal-content-prose")?.innerText || "";
  const md = `# ${title}\n\n${prose}\n\n*Source: DiWA Republic of the Philippines National Wire*`;
  
  copyToClipboard(md, "Markdown formatted issuance copied");
}

// Escape HTML utility
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Weather — Live Manila weather via Open-Meteo (free, no API key)
(function fetchWeather() {
  const WMO_DESCRIPTIONS = {
    0: "Clear Sky", 1: "Mostly Clear", 2: "Partly Cloudy", 3: "Overcast",
    45: "Foggy", 48: "Rime Fog", 51: "Light Drizzle", 53: "Drizzle",
    55: "Heavy Drizzle", 61: "Light Rain", 63: "Rain", 65: "Heavy Rain",
    71: "Light Snow", 73: "Snow", 75: "Heavy Snow", 80: "Rain Showers",
    81: "Moderate Showers", 82: "Heavy Showers", 95: "Thunderstorm",
    96: "Thunderstorm w/ Hail", 99: "Severe Thunderstorm"
  };

  const WEATHER_ICONS = {
    clear: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    cloudy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    rain: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`,
    storm: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>`
  };

  function getIcon(code) {
    if (code <= 1) return WEATHER_ICONS.clear;
    if (code <= 48) return WEATHER_ICONS.cloudy;
    if (code <= 82) return WEATHER_ICONS.rain;
    return WEATHER_ICONS.storm;
  }

  // Manila coordinates: 14.5995° N, 120.9842° E
  fetch("https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current_weather=true&timezone=Asia%2FManila")
    .then(r => r.json())
    .then(data => {
      const w = data.current_weather;
      if (!w) return;
      const tempEl = document.getElementById("weatherTemp");
      const descEl = document.getElementById("weatherDesc");
      const badge = document.getElementById("navWeatherBadge");
      if (tempEl) tempEl.textContent = Math.round(w.temperature) + "°C";
      if (descEl) descEl.textContent = WMO_DESCRIPTIONS[w.weathercode] || "Fair";
      if (badge) {
        const iconEl = badge.querySelector(".weather-icon");
        if (iconEl) iconEl.outerHTML = getIcon(w.weathercode);
      }
    })
    .catch(() => { /* silently fallback to defaults */ });
})();
