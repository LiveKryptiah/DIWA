/**
 * DiWA — Dedicated Agency Dataset
 * Detailed editorial content for Philippine National Agencies
 * Following the requested 2-tier magazine layout (media_1787798556458.png).
 */

const AGENCIES_DATABASE = {
  dict: {
    code: "DICT",
    shortName: "DICT",
    fullName: "Department of Information and Communications Technology",
    mandate: "Formulates and implements national ICT development, digital governance, sovereign cloud infrastructure, and nationwide broadband connectivity policies.",
    secretary: "Ivan John E. Uy, Secretary",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/dict",
    heroImage: "assets/mosaic-dict-tall.jpg",
    accentPill: "pill-dict",
    featureStory: {
      id: "dict-feat-01",
      category: "National Infrastructure",
      title: "DICT Expands National Fiber Backbone & Free Wi-Fi 4 All to 420 Island Schools",
      readTime: "4 min read",
      date: "August 26, 2026",
      image: "assets/mosaic-dict-tall.jpg",
      summary: "DICT accelerates roll-out of high-capacity submarine cable landings and microwave links, provisioning gigabit connectivity to geographically isolated schools across Visayas and Mindanao.",
      content: `Pursuant to Section 15 of Republic Act No. 10844 and the E-Government Masterplan 2028, the Department of Information and Communications Technology has commissioned 420 high-speed satellite downlinks and fiber optical termination points for geographically isolated and disadvantaged areas (GIDAs).

Key Provisions:
1. Universal High-Speed Access: Bandwidth speeds of at least 100 Mbps symmetrical are guaranteed for beneficiary public elementary and secondary schools.
2. Inter-Agency Cloud Integration: Schools will connect directly to the DepEd MATATAG Commons without incurring commercial data transit costs.
3. Renewable Power Resilience: Off-grid installations are paired with lithium-iron-phosphate battery solar microgrids for continuous operation during weather disturbances.`
    },
    latestDispatches: [
      {
        id: "dict-2026-01",
        title: "National Government Portal 3.0 & Inter-Agency API Gateway Architecture Mandate",
        date: "Aug 26, 2026",
        readTime: "3 min read",
        category: "Policy",
        image: "assets/thumb-dict.jpg"
      },
      {
        id: "dict-latest-02",
        title: "National Cybersecurity Command Center Activates Real-Time Gov Threat Feed",
        date: "Aug 25, 2026",
        readTime: "4 min read",
        category: "Cybersecurity",
        image: "assets/thumb-dict.jpg"
      },
      {
        id: "dict-latest-03",
        title: "eGov Super App Digital ID Wallet Verifies 12 Million Citizens Seamlessly",
        date: "Aug 24, 2026",
        readTime: "2 min read",
        category: "Digital ID",
        image: "assets/thumb-dict.jpg"
      },
      {
        id: "dict-latest-04",
        title: "Free Wi-Fi in Public Places Surpasses 15,000 Active Municipal Points",
        date: "Aug 23, 2026",
        readTime: "3 min read",
        category: "Connectivity",
        image: "assets/thumb-dict.jpg"
      }
    ],
    initiatives: [
      {
        id: "dict-init-01",
        category: "Cloud First Policy",
        title: "GovCloud Sovereign Infrastructure Migration Enters Phase 3",
        summary: "Mandates transition of non-classified public registries to sovereign cloud infrastructure to slash server maintenance overhead by 40%.",
        date: "Aug 22, 2026",
        readTime: "5 min read",
        image: "assets/thumb-dict.jpg"
      },
      {
        id: "dict-init-02",
        category: "Broadband Corridor",
        title: "Northern Luzon Fiber Optic Spur Links Subic to Baler with 100 Gbps",
        summary: "Inaugurates carrier-grade optical bypass routes to guarantee zero internet downtime across regional disaster command facilities.",
        date: "Aug 21, 2026",
        readTime: "4 min read",
        image: "assets/mosaic-dict-tall.jpg"
      },
      {
        id: "dict-init-03",
        category: "Zero-Trust Standards",
        title: "Mandatory Multi-Factor & Cryptographic Tokens for Agency Portals",
        summary: "All national government web services must implement automated intrusion monitoring and PKI document signing by Q4 2026.",
        date: "Aug 20, 2026",
        readTime: "6 min read",
        image: "assets/thumb-dict.jpg"
      }
    ]
  },

  deped: {
    code: "DepEd",
    shortName: "DepEd",
    fullName: "Department of Education",
    mandate: "Ensures access to, equity in, and improving the quality of basic education across all public elementary and high schools nationwide.",
    secretary: "Sonny Angara, Secretary",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/deped",
    heroImage: "assets/mosaic-students.jpg",
    accentPill: "pill-deped",
    featureStory: {
      id: "deped-feat-01",
      category: "Basic Education",
      title: "MATATAG Curriculum Open Commons Deployed Across 47,000 Public Schools",
      readTime: "5 min read",
      date: "August 25, 2026",
      image: "assets/mosaic-students.jpg",
      summary: "DepEd issues policy directives standardizing open-access digital learning materials, foundational literacy toolkits, and teacher-assistive technologies nationwide.",
      content: `The Department of Education promulgates Department Order No. 14, series of 2026, launching the centralized MATATAG Learning Commons across all 17 administrative regions.

Key Milestones:
1. Standardized Digital Modules: 12,000 peer-reviewed digital lesson plans and interactive science assessments are made available without subscription fees.
2. Decongested Curriculum: Lesson schedules emphasize core reading comprehension, mathematics, and critical thinking fundamentals.
3. Teacher Support: Teachers receive official educational technology kits and pre-loaded offline learning caches for non-connected rural classrooms.`
    },
    latestDispatches: [
      {
        id: "deped-2026-01",
        title: "DepEd Digital Learning Modules Standardized Under MATATAG Commons",
        date: "Aug 25, 2026",
        readTime: "4 min read",
        category: "Curriculum",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "deped-latest-02",
        title: "DepEd Computerization Program Deploys 85,000 Smart Classroom Kits",
        date: "Aug 24, 2026",
        readTime: "3 min read",
        category: "Classroom Tech",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "deped-latest-03",
        title: "School-Based Feeding Program Budget Doubled for Underweight Learners",
        date: "Aug 23, 2026",
        readTime: "2 min read",
        category: "Nutrition",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "deped-latest-04",
        title: "National Diagnostic Assessment Yields 18% Gain in Early Grade Literacy",
        date: "Aug 22, 2026",
        readTime: "4 min read",
        category: "Assessment",
        image: "assets/thumb-deped.jpg"
      }
    ],
    initiatives: [
      {
        id: "deped-init-01",
        category: "Teacher Welfare",
        title: "Career Progression System for Public School Teachers Formally Implemented",
        summary: "Removes promotion ceilings by introducing Expanded Career Pathways for Master Teachers and School Principals.",
        date: "Aug 21, 2026",
        readTime: "4 min read",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "deped-init-02",
        category: "Disaster Resilience",
        title: "Quick-Response Modular Classrooms Certified for Typhoon Corridors",
        summary: "Engineered pre-fabricated classrooms capable of withstanding Category 5 typhoons are deployed across Bicol and Eastern Samar.",
        date: "Aug 20, 2026",
        readTime: "3 min read",
        image: "assets/mosaic-students.jpg"
      },
      {
        id: "deped-init-03",
        category: "Special Education",
        title: "Inclusive Learning Centers Established in Every Division Office",
        summary: "Expands assistive learning devices and sign-language interpreters for learners with disabilities under Republic Act 11650.",
        date: "Aug 19, 2026",
        readTime: "5 min read",
        image: "assets/thumb-deped.jpg"
      }
    ]
  },

  coa: {
    code: "COA",
    shortName: "COA",
    fullName: "Commission on Audit",
    mandate: "Constitutional commission examining, auditing, and settling all accounts pertaining to the revenue, receipts, and expenditures of government funds.",
    secretary: "Gamaliel A. Cordoba, Chairperson",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/coa",
    heroImage: "assets/mosaic-audit.jpg",
    accentPill: "pill-coa",
    featureStory: {
      id: "coa-feat-01",
      category: "Constitutional Audit",
      title: "Consolidated Annual Audit Findings on Digital Infrastructure Procurement",
      readTime: "6 min read",
      date: "August 25, 2026",
      image: "assets/mosaic-audit.jpg",
      summary: "The Commission on Audit submits its consolidated financial audit report detailing procurement compliance, capital outlay execution velocity, and budget liquidation benchmarks.",
      content: `The Commission on Audit transmits the FY 2025 Consolidated Annual Financial Report pursuant to Article IX-D of the 1987 Philippine Constitution.

Key Audit Observations:
1. Public Procurement Electronic Bidding: 98% of surveyed national line agencies executed capital outlays in accordance with the modernized Government Procurement Reform Act (RA 12009).
2. Unqualified Opinions: Fourteen constitutional commissions and executive portfolios earned unqualified audit ratings, reflecting reliable accounting ledgers.
3. Open Ledger Index: All citizen audit observation memorandums (AOMs) are indexed into the DiWA public feed for unhindered public access.`
    },
    latestDispatches: [
      {
        id: "coa-2026-01",
        title: "COA Transmits Consolidated Annual Financial Report to Congress",
        date: "Aug 25, 2026",
        readTime: "5 min read",
        category: "Annual Report",
        image: "assets/thumb-coa.jpg"
      },
      {
        id: "coa-latest-02",
        title: "Modernized Electronic Audit Solution (e-Audit) Operationalized Nationwide",
        date: "Aug 24, 2026",
        readTime: "3 min read",
        category: "Technology",
        image: "assets/thumb-coa.jpg"
      },
      {
        id: "coa-latest-03",
        title: "Citizen Participatory Audit (CPA) Program Wins UN Public Service Recognition",
        date: "Aug 23, 2026",
        readTime: "4 min read",
        category: "Transparency",
        image: "assets/thumb-coa.jpg"
      },
      {
        id: "coa-latest-04",
        title: "Audit Standards Promulgated for Cloud Computing SaaS Subscriptions",
        date: "Aug 22, 2026",
        readTime: "4 min read",
        category: "Guidelines",
        image: "assets/thumb-coa.jpg"
      }
    ],
    initiatives: [
      {
        id: "coa-init-01",
        category: "Real-Time Audit",
        title: "Continuous Digital Ledger Verification for High-Value Infrastructure",
        summary: "Auditors utilize cryptographic timestamping and drone photogrammetry to verify infrastructure milestones prior to tranche release.",
        date: "Aug 21, 2026",
        readTime: "5 min read",
        image: "assets/thumb-coa.jpg"
      },
      {
        id: "coa-init-02",
        category: "Local Governance",
        title: "Barangay Financial Records Management Handbook Enacted",
        summary: "Simplifies financial accountability templates for over 42,000 barangays to eradicate unliquidated cash advances.",
        date: "Aug 20, 2026",
        readTime: "3 min read",
        image: "assets/mosaic-audit.jpg"
      },
      {
        id: "coa-init-03",
        category: "Integrity Framework",
        title: "Public Red Flag Analytics System Deployed Against Bid Rigging",
        summary: "Automated pattern detection algorithms flag suspicious tender bundling and collusive supplier networks.",
        date: "Aug 19, 2026",
        readTime: "4 min read",
        image: "assets/thumb-coa.jpg"
      }
    ]
  },

  comelec: {
    code: "COMELEC",
    shortName: "COMELEC",
    fullName: "Commission on Elections",
    mandate: "Constitutional commission enforcing and administering all election laws and regulations to guarantee free, orderly, honest, and credible elections.",
    secretary: "George Erwin M. Garcia, Chairman",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/comelec",
    heroImage: "assets/mosaic-election.jpg",
    accentPill: "pill-comelec",
    featureStory: {
      id: "comelec-feat-01",
      category: "Electoral Transparency",
      title: "En Banc Promulgates Open Audit Protocols for Automated Election Optical Mark Readers",
      readTime: "5 min read",
      date: "August 26, 2026",
      image: "assets/mosaic-election.jpg",
      summary: "Resolution 11048 institutionalizes 100% public source code escrow, deterministic hardware checksum verification, and random manual audit standards.",
      content: `The Commission on Elections en banc enacts Resolution No. 11048, opening the Automated Election System (AES) architecture to continuous public review.

Key Mandates:
1. Public Source Code Escrow: Source code repositories will be deposited with the Bangko Sentral ng Pilipinas and made reviewable by civic technologists and accredited political entities.
2. Random Manual Audit Sampling: Increased to 5 random sample clustered precincts per legislative district to verify 99.995% statistical accuracy.
3. Cryptographic Transmission Logs: Real-time transmission checksums are published immediately to the DiWA public wire.`
    },
    latestDispatches: [
      {
        id: "comelec-2026-01",
        title: "COMELEC Institutionalizes Source Code Escrow & Optical Mark Audit",
        date: "Aug 26, 2026",
        readTime: "4 min read",
        category: "Resolution",
        image: "assets/thumb-comelec.jpg"
      },
      {
        id: "comelec-latest-02",
        title: "Register Anywhere Program (RAP) Mall-Based Booths Open Nationwide",
        date: "Aug 25, 2026",
        readTime: "3 min read",
        category: "Voter Registration",
        image: "assets/thumb-comelec.jpg"
      },
      {
        id: "comelec-latest-03",
        title: "Internet Voting System for Overseas Filipino Workers (OFWs) Certified",
        date: "Aug 24, 2026",
        readTime: "4 min read",
        category: "Overseas Voting",
        image: "assets/thumb-comelec.jpg"
      },
      {
        id: "comelec-latest-04",
        title: "Campaign Finance Monitoring Unit Launches Real-Time Digital Expense Ledger",
        date: "Aug 23, 2026",
        readTime: "3 min read",
        category: "Campaign Finance",
        image: "assets/thumb-comelec.jpg"
      }
    ],
    initiatives: [
      {
        id: "comelec-init-01",
        category: "Accessibility",
        title: "Accessible Polling Places Guaranteed for Senior Citizens and PWDs",
        summary: "Ground-floor accessible polling places and tactile ballot guides mandated in all 107,000 clustered voting precincts.",
        date: "Aug 22, 2026",
        readTime: "3 min read",
        image: "assets/thumb-comelec.jpg"
      },
      {
        id: "comelec-init-02",
        category: "Hardware Integrity",
        title: "Deterministic Checksum Verification Before Precinct Deployment",
        summary: "Public hash-signing demonstrations conducted in the presence of citizen observer watchdogs.",
        date: "Aug 21, 2026",
        readTime: "4 min read",
        image: "assets/mosaic-election.jpg"
      },
      {
        id: "comelec-init-03",
        category: "Civic Education",
        title: "Voter Information Campaign Integrates Interactive High School Modules",
        summary: "Partnership with DepEd brings simulated ballot casting and electoral literacy into senior high curricula.",
        date: "Aug 20, 2026",
        readTime: "4 min read",
        image: "assets/thumb-comelec.jpg"
      }
    ]
  },

  doh: {
    code: "DOH",
    shortName: "DOH",
    fullName: "Department of Health",
    mandate: "Guarantees equitable, sustainable, and quality health for all Filipinos through Universal Health Care and robust disease surveillance.",
    secretary: "Teodoro J. Herbosa, MD, Secretary",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/doh",
    heroImage: "assets/mosaic-health.jpg",
    accentPill: "pill-doh",
    featureStory: {
      id: "doh-feat-01",
      category: "Universal Health Care",
      title: "Universal Health Care: 2,450 Primary Care Clinics Formally Accredited",
      readTime: "4 min read",
      date: "August 24, 2026",
      image: "assets/mosaic-health.jpg",
      summary: "DOH and PhilHealth complete nationwide accreditation of 2,450 rural health units and medical centers, delivering free diagnostic tests and maintenance medicines.",
      content: `The Department of Health announces the nationwide operationalization of the PhilHealth Konsulta comprehensive primary care network.

Key Care Benefits:
1. Zero Out-of-Pocket Diagnostics: 21 essential blood tests, chest X-rays, and ECG screenings provided free at accredited municipal health units.
2. Free Maintenance Medicines: Hypertension, diabetes, and asthma medications supplied directly through public healthcare pharmacies.
3. Unified Health Records: Electronic medical charts securely synced via the national health data cloud to prevent duplicate examinations.`
    },
    latestDispatches: [
      {
        id: "doh-2026-01",
        title: "PhilHealth Konsulta Guarantees Zero Out-of-Pocket Diagnostic Bundles",
        date: "Aug 24, 2026",
        readTime: "4 min read",
        category: "Public Health",
        image: "assets/thumb-doh.jpg"
      },
      {
        id: "doh-latest-02",
        title: "National Dengue & Vector-Borne Disease Early Warning System Deployed",
        date: "Aug 23, 2026",
        readTime: "3 min read",
        category: "Surveillance",
        image: "assets/thumb-doh.jpg"
      },
      {
        id: "doh-latest-03",
        title: "Regional Specialty Centers Inaugurated in Northern Luzon and Zamboanga",
        date: "Aug 22, 2026",
        readTime: "4 min read",
        category: "Hospital Care",
        image: "assets/thumb-doh.jpg"
      },
      {
        id: "doh-latest-04",
        title: "Health Human Resource Deployment Fills 96% of Rural Doctor Vacancies",
        date: "Aug 21, 2026",
        readTime: "3 min read",
        category: "Personnel",
        image: "assets/thumb-doh.jpg"
      }
    ],
    initiatives: [
      {
        id: "doh-init-01",
        category: "Maternal Health",
        title: "Buntis First Program Slashes Neonatal Mortality in Isolated Barangays",
        summary: "Equips rural health midwives with portable ultrasound monitors and telemedicine satellite uplinks.",
        date: "Aug 20, 2026",
        readTime: "4 min read",
        image: "assets/mosaic-health.jpg"
      },
      {
        id: "doh-init-02",
        category: "Cancer Support",
        title: "Cancer Assistance Fund Expanded to Cover 18 Essential Chemotherapy Lines",
        summary: "Patients at apex government oncology centers receive complete medicine subsidies without co-payment.",
        date: "Aug 19, 2026",
        readTime: "5 min read",
        image: "assets/thumb-doh.jpg"
      },
      {
        id: "doh-init-03",
        category: "Emergency Medicine",
        title: "National Patient Navigation & Referral Center Response Time Cut to 4 Minutes",
        summary: "Centralized ambulance coordination connects regional hospitals to prevent ER congestion.",
        date: "Aug 18, 2026",
        readTime: "3 min read",
        image: "assets/thumb-doh.jpg"
      }
    ]
  },

  dbm: {
    code: "DBM",
    shortName: "DBM",
    fullName: "Department of Budget and Management",
    mandate: "Promotes the sound, efficient, and transparent allocation of government fiscal resources to support national development priorities.",
    secretary: "Amenah F. Pangandaman, Secretary",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/dbm",
    heroImage: "assets/thumb-dbm.jpg",
    accentPill: "pill-coa",
    featureStory: {
      id: "dbm-feat-01",
      category: "Fiscal Governance",
      title: "FY 2027 National Expenditure Program Guidelines: Cash-Budgeting & Climate Tagging",
      readTime: "5 min read",
      date: "August 24, 2026",
      image: "assets/thumb-dbm.jpg",
      summary: "DBM promulgates National Budget Circular 594, prioritizing digitalization investments, 15% climate adaptation expenditure quotas, and cash budgeting rigor.",
      content: `The Department of Budget and Management releases the budget preparation parameters for fiscal year 2027 under Executive Order No. 91.

Core Guidelines:
1. Performance-Linked Appropriations: Budget allocations are calibrated against certified physical outputs verified by COA.
2. Climate Change Expenditure Tagging (CCET): Mandatory 15% allocation for flood prevention, slope stabilization, and clean energy resilience.
3. Modernized Electronic Disbursements: Eliminates paper checks across all national government agencies in favor of automated PhilPaSS wire settlement.`
    },
    latestDispatches: [
      {
        id: "dbm-2026-01",
        title: "FY 2027 National Budget Circular: Cash Budgeting & Climate Tagging",
        date: "Aug 24, 2026",
        readTime: "4 min read",
        category: "Circular",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "dbm-latest-02",
        title: "DBM Releases P14.2 Billion for Local Government Calamity Mitigation Funds",
        date: "Aug 23, 2026",
        readTime: "3 min read",
        category: "Releases",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "dbm-latest-03",
        title: "Open Budget Index Rates Philippines Top in Southeast Asia for Transparency",
        date: "Aug 22, 2026",
        readTime: "4 min read",
        category: "Transparency",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "dbm-latest-04",
        title: "Digital Procurement System (mPhilGEPS) Saves P8.4 Billion in Agency Outlays",
        date: "Aug 21, 2026",
        readTime: "3 min read",
        category: "Procurement",
        image: "assets/thumb-dbm.jpg"
      }
    ],
    initiatives: [
      {
        id: "dbm-init-01",
        category: "Public Sector Salaries",
        title: "Salary Standardization Law Tranche Adjustments Disbursed on Schedule",
        summary: "Guarantees competitive compensation and health allowances for 1.9 million civil servants.",
        date: "Aug 20, 2026",
        readTime: "4 min read",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "dbm-init-02",
        category: "Local Dev Support",
        title: "Support and Assistance to Municipalities (LGSF-SAM) Accelerates Farm Roads",
        summary: "Direct budget transfers empower 4th to 6th class municipalities to construct vital agricultural corridors.",
        date: "Aug 19, 2026",
        readTime: "4 min read",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "dbm-init-03",
        category: "Green Budgeting",
        title: "Green Public Procurement Framework Mandates Eco-Certified Goods",
        summary: "Government agencies instructed to prioritize energy-efficient equipment and biodegradable materials.",
        date: "Aug 18, 2026",
        readTime: "5 min read",
        image: "assets/thumb-dbm.jpg"
      }
    ]
  },

  dost: {
    code: "DOST",
    shortName: "DOST",
    fullName: "Department of Science and Technology",
    mandate: "Provides central direction, leadership, and coordination of scientific and technological research and technological innovations for national self-reliance.",
    secretary: "Dr. Renato U. Solidum Jr., Secretary",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/dost",
    heroImage: "assets/mosaic-satellite.jpg",
    accentPill: "pill-dost",
    featureStory: {
      id: "dost-feat-01",
      category: "Space & Science",
      title: "PhilSA Diwata-3 Earth Observation Satellite Downlink Live for LGUs",
      readTime: "5 min read",
      date: "August 23, 2026",
      image: "assets/mosaic-satellite.jpg",
      summary: "DOST and the Philippine Space Agency (PhilSA) launch direct, open-access sub-meter earth observation feeds to municipal disaster councils and agricultural bureaus.",
      content: `The Department of Science and Technology, in partnership with PhilSA, announces the operational readiness of the Diwata-3 Multi-Spectral Earth Observation Ground Downlink.

Technical Capabilities:
1. High-Frequency Revisit: Sub-meter satellite imagery refreshed every 48 hours for real-time flood inundation mapping and agricultural assessment.
2. Open Satellite Data Portal: Municipal agriculturists and disaster risk reduction officers can download raw radiometric feeds without license constraints.
3. Coastal Ecosystem Mapping: Calibrated sensor bands detect coral bleaching events and illegal offshore reclamation.`
    },
    latestDispatches: [
      {
        id: "dost-2026-01",
        title: "PhilSA Satellite Mapping Feeds Opened for Municipal Disaster Response",
        date: "Aug 23, 2026",
        readTime: "4 min read",
        category: "Satellite",
        image: "assets/thumb-dost.jpg"
      },
      {
        id: "dost-latest-02",
        title: "Project NOAH AI-Enhanced Flash Flood Warning Window Extended to 6 Hours",
        date: "Aug 22, 2026",
        readTime: "3 min read",
        category: "Disaster Tech",
        image: "assets/thumb-dost.jpg"
      },
      {
        id: "dost-latest-03",
        title: "Tuklas Lunas Research Hub Develops Indigenous Herbal Therapeutics",
        date: "Aug 21, 2026",
        readTime: "4 min read",
        category: "Biotechnology",
        image: "assets/thumb-dost.jpg"
      },
      {
        id: "dost-latest-04",
        title: "Balik Scientist Program Inducts 45 Diaspora AI and Semiconductor Experts",
        date: "Aug 20, 2026",
        readTime: "3 min read",
        category: "Innovation",
        image: "assets/thumb-dost.jpg"
      }
    ],
    initiatives: [
      {
        id: "dost-init-01",
        category: "Regional MSMEs",
        title: "Small Enterprise Technology Upgrading Program (SETUP) Aids 2,100 Producers",
        summary: "Provides packaging automation and food safety testing laboratories to regional agricultural cooperatives.",
        date: "Aug 19, 2026",
        readTime: "4 min read",
        image: "assets/thumb-dost.jpg"
      },
      {
        id: "dost-init-02",
        category: "Nuclear Energy",
        title: "Philippine Nuclear Research Institute Commissions Gamma Irradiation Facility",
        summary: "Extends shelf-life of export-grade fruits and sterilizes medical supplies for regional hospitals.",
        date: "Aug 18, 2026",
        readTime: "5 min read",
        image: "assets/mosaic-satellite.jpg"
      },
      {
        id: "dost-init-03",
        category: "STEM Education",
        title: "Philippine Science High School System Adds Microelectronics Specialization",
        summary: "Prepares young scholars for advanced semiconductor design and quantum computing research.",
        date: "Aug 17, 2026",
        readTime: "3 min read",
        image: "assets/thumb-dost.jpg"
      }
    ]
  },

  dswd: {
    code: "DSWD",
    shortName: "DSWD",
    fullName: "Department of Social Welfare and Development",
    mandate: "Formulates, develops, and implements social welfare and development policies, programs, and services to protect poor and marginalized sectors.",
    secretary: "Rex Gatchalian, Secretary",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/dswd",
    heroImage: "assets/mosaic-students.jpg",
    accentPill: "pill-comelec",
    featureStory: {
      id: "dswd-feat-01",
      category: "Social Protection",
      title: "Digital Wallets & Biometric Verification for 4Ps Beneficiary Cash Grants",
      readTime: "4 min read",
      date: "August 23, 2026",
      image: "assets/mosaic-students.jpg",
      summary: "DSWD completes the migration of 4.4 million households to electronic cash cards and PhilSys-enabled biometric verification, cutting payout queue times from 6 hours to under 8 minutes.",
      content: `Pursuant to Republic Act No. 11310, the Department of Social Welfare and Development has finalized the total digitalization of the Pantawid Pamilyang Pilipino Program (4Ps) payment gateway.

Transformative Results:
1. Zero Intermediary Deductions: Beneficiaries receive 100% of cash grants directly through automated teller networks and accredited digital wallets.
2. Rapid Verification: PhilSys biometric matching eliminates fraudulent duplication and ghost claims across municipal payrolls.
3. Emergency Top-Ups: In times of disaster, emergency cash transfers can be credited to affected families within 15 minutes of local state of calamity declaration.`
    },
    latestDispatches: [
      {
        id: "dswd-2026-01",
        title: "Digital Wallets & Biometric Verification for 4Ps Beneficiary Cash Grants",
        date: "Aug 23, 2026",
        readTime: "4 min read",
        category: "Digital 4Ps",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "dswd-latest-02",
        title: "Walang Gutom 2027 Food Stamp Program Expands to 300,000 Families",
        date: "Aug 22, 2026",
        readTime: "3 min read",
        category: "Food Security",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "dswd-latest-03",
        title: "Pre-positioned Family Food Packs Surpass 2.5 Million Across Regional Hubs",
        date: "Aug 21, 2026",
        readTime: "3 min read",
        category: "Disaster Relief",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "dswd-latest-04",
        title: "Assistance to Individuals in Crisis Situations (AICS) Streamlines Medical Grants",
        date: "Aug 20, 2026",
        readTime: "4 min read",
        category: "Social Services",
        image: "assets/thumb-deped.jpg"
      }
    ],
    initiatives: [
      {
        id: "dswd-init-01",
        category: "Child Protection",
        title: "National Child Development Center Construction in Geographically Isolated LGUs",
        summary: "Establishes early childhood care facilities staffed by licensed social workers and early learning specialists.",
        date: "Aug 19, 2026",
        readTime: "4 min read",
        image: "assets/thumb-deped.jpg"
      },
      {
        id: "dswd-init-02",
        category: "Elderly Care",
        title: "Centenarians Cash Gift & Social Pension Expanded to Indigent Seniors Aged 60+",
        summary: "Ensures monthly social pensions are remitted digitally to senior citizens without administrative deductions.",
        date: "Aug 18, 2026",
        readTime: "3 min read",
        image: "assets/mosaic-students.jpg"
      },
      {
        id: "dswd-init-03",
        category: "Community Empowerment",
        title: "KALAHI-CIDSS Community-Driven Climate Resilience Grants Awarded",
        summary: "Barangay assemblies democratically plan and build communal flood gates and solar water pumps.",
        date: "Aug 17, 2026",
        readTime: "5 min read",
        image: "assets/thumb-deped.jpg"
      }
    ]
  },

  neda: {
    code: "NEDA",
    shortName: "NEDA",
    fullName: "National Economic and Development Authority",
    mandate: "Country's premier socioeconomic planning agency providing high-level policy guidance and coordinating infrastructure and economic reforms.",
    secretary: "Arsenio M. Balisacan, Secretary",
    feedEndpoint: "https://diwa.gov.ph/api/v1/agency/neda",
    heroImage: "assets/thumb-dbm.jpg",
    accentPill: "pill-coa",
    featureStory: {
      id: "neda-feat-01",
      category: "Economic Planning",
      title: "Philippine Development Plan Mid-Decade Review: 6.2% GDP Growth & Poverty Reduction",
      readTime: "5 min read",
      date: "August 22, 2026",
      image: "assets/thumb-dbm.jpg",
      summary: "NEDA confirms steady macroeconomic indicators, declining underemployment at 11.2%, and accelerating public infrastructure delivery towards 2028 targets.",
      content: `The National Economic and Development Authority presents the midterm socioeconomic scorecard of the Philippine Development Plan (PDP) 2023-2028.

Key Macro Indicators:
1. Robust Domestic Expansion: Real Gross Domestic Product expanded by 6.2%, driven by construction, tech services, and consumer confidence.
2. Infrastructure Velocity: 198 Infrastructure Flagship Projects (IFPs) valued at P8.7 trillion remain on schedule under the Build-Better-More program.
3. Poverty Alleviation: Poverty incidence dropped to 13.5%, maintaining the trajectory toward single-digit levels by 2028.`
    },
    latestDispatches: [
      {
        id: "neda-2026-01",
        title: "Medium-Term Philippine Development Plan Mid-Decade Review",
        date: "Aug 22, 2026",
        readTime: "5 min read",
        category: "Scorecard",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "neda-latest-02",
        title: "Investment Coordination Committee (ICC) Approves 6 Flagship Transit Lines",
        date: "Aug 21, 2026",
        readTime: "4 min read",
        category: "Infrastructure",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "neda-latest-03",
        title: "Public-Private Partnership (PPP) Code Implementing Rules Finalized",
        date: "Aug 20, 2026",
        readTime: "3 min read",
        category: "PPP Reforms",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "neda-latest-04",
        title: "Regional Development Council (RDC) Budget Allocation Framework Enforced",
        date: "Aug 19, 2026",
        readTime: "4 min read",
        category: "Regional Dev",
        image: "assets/thumb-dbm.jpg"
      }
    ],
    initiatives: [
      {
        id: "neda-init-01",
        category: "Digital Economy",
        title: "National Innovation Council Grants P250 Million for Deep Tech Startups",
        summary: "Funding released to local robotics, biomedical devices, and clean energy commercial spin-offs.",
        date: "Aug 18, 2026",
        readTime: "4 min read",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "neda-init-02",
        category: "Food Logistics",
        title: "National Food Logistics Masterplan Integrates Cold Storage Along Nautical Highway",
        summary: "Cuts agricultural post-harvest wastage by 28% through synchronized coastal transport hubs.",
        date: "Aug 17, 2026",
        readTime: "5 min read",
        image: "assets/thumb-dbm.jpg"
      },
      {
        id: "neda-init-03",
        category: "Sustainable Development",
        title: "SDG Progress Tracker Documents Universal Basic Electricity Reaching 96%",
        summary: "Solar off-grid energization connects rural island sitios ahead of 2028 targets.",
        date: "Aug 16, 2026",
        readTime: "4 min read",
        image: "assets/thumb-dbm.jpg"
      }
    ]
  }
};
