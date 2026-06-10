/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              NAGENDRA.WORK — CV CONTENT FILE                    ║
 * ║  Edit this file to update your portfolio. No other file needed. ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * QUICK GUIDE
 * ───────────
 * • Personal info         → CV.personal
 * • Add a new job         → CV.experience[]
 * • Add a skill           → CV.skills[]
 * • Add an award          → CV.awards[]
 * • Add a gallery photo   → CV.gallery[]
 * • Add a Sanskrit quote  → CV.quotes[]
 * • Sanskrit expertise    → CV.sanskrit
 * • Change photo          → replace assets/images/nagendra.jpg
 * • Change CV PDF         → replace assets/NagendraPidaparthy.pdf
 *
 * MULTILINGUAL
 * ────────────
 * Fields ending in _te = Telugu translation
 * Fields ending in _sa = Sanskrit translation
 * If a _te or _sa field is missing, the English version is shown.
 */

const CV = {

  /* ── PERSONAL ─────────────────────────────────────────────────── */
  personal: {
    name:       "Nagendra Pidaparthy",
    title:      "Senior DevOps & SRE Engineer",
    title_te:   "సీనియర్ డెవాప్స్ & SRE ఇంజనీర్",
    title_sa:   "वरिष्ठ देवॉप्स & SRE अभियन्ता",
    tagline:    "21+ years building resilient cloud platforms at scale — AWS · Azure · GCP · Kubernetes · Terraform",
    tagline_te: "21+ సంవత్సరాల అనుభవంతో AWS · Azure · GCP · Kubernetes · Terraform లో నమ్మకమైన క్లౌడ్ వ్యవస్థలు నిర్మించడం",
    tagline_sa: "21+ वर्षाणां अनुभवेन AWS · Azure · GCP · Kubernetes · Terraform मध्ये विश्वसनीयाः क्लाउड-मञ्चाः निर्मिताः",
    location:   "Sydney, NSW, Australia",
    available:  false,         // set true to show the green "Available for Senior Roles" badge
    email:      "npidaparthy@gmail.com",
    phone:      "+61 410 410 806",
    linkedin:   "https://www.linkedin.com/in/npidaparthy/",
    github:     "https://github.com/npidaparthy/nagendra.work",
    youtube:    "https://www.youtube.com/@samskruti.info.1",
    photo:      "assets/images/nagendra.jpg",
    cvPdf:      "assets/NagendraPidaparthy.pdf",
  },

  /* ── ABOUT ────────────────────────────────────────────────────── */
  about: {
    paragraphs: [
      "Senior DevOps and Site Reliability Engineering professional with <strong>21+ years of IT experience</strong> and 11+ years specialising in cloud platforms, infrastructure automation, and production reliability engineering.",
      "Proven expertise in designing, implementing, and operating <strong>highly available, scalable cloud platforms</strong> across AWS, Azure, and GCP — for banking, telecom, and government sectors across Australia.",
    ],
    paragraphs_te: [
      "21+ సంవత్సరాల IT అనుభవం మరియు 11+ సంవత్సరాల క్లౌడ్ ప్లాట్‌ఫారమ్‌లు, మౌలిక సదుపాయాల ఆటోమేషన్ మరియు ఉత్పత్తి విశ్వసనీయత ఇంజనీరింగ్‌లో నైపుణ్యం కలిగిన <strong>సీనియర్ DevOps & SRE నిపుణుడు</strong>.",
      "AWS, Azure మరియు GCP అంతటా బ్యాంకింగ్, టెలికామ్ మరియు ప్రభుత్వ రంగాలలో <strong>అత్యంత అందుబాటులో ఉండే, స్కేలబుల్ క్లౌడ్ ప్లాట్‌ఫారమ్‌లను</strong> రూపొందించడంలో నిరూపితమైన నైపుణ్యం.",
    ],
    paragraphs_sa: [
      "21+ वर्षाणां IT-अनुभवेन सहितः, 11+ वर्षेभ्यः क्लाउड-मञ्च-निर्माणे, मूलभूत-स्वयंक्रिया-अभियान्त्रिके च <strong>वरिष्ठः DevOps & SRE विशेषज्ञः</strong>।",
      "AWS, Azure तथा GCP मध्ये बैंकिंग, दूरसञ्चार, सरकारी क्षेत्रेषु <strong>अत्यन्त-उपलब्धाः, मापनीयाः क्लाउड-मञ्चाः</strong> निर्मितवान्।",
    ],
    stats: [
      { num: "21+", label: "Years Experience", label_te: "సంవత్సరాల అనుభవం",    label_sa: "वर्षाणामनुभवः" },
      { num: "11+", label: "Years Cloud",      label_te: "సంవత్సరాల క్లౌడ్",    label_sa: "वर्षाणां क्लाउड" },
      { num: "9",   label: "Companies",        label_te: "కంపెనీలు",             label_sa: "संस्थाः" },
      { num: "15+", label: "Major Clients",    label_te: "ప్రధాన క్లయింట్లు",   label_sa: "प्रमुखाः सेव्याः" },
      { num: "700", label: "Gītā Verses by Heart", label_te: "కంఠస్థ గీతా శ్లోకాలు", label_sa: "कण्ठस्थाः गीताश्लोकाः" },
    ],
  },

  /* ── CERTIFICATIONS (hero badges) ────────────────────────────── */
  certifications: [
    "AWS Solutions Architect",
    "Certified Jenkins Engineer",
    "Certified Scrum Master",
    "Saṃskṛta Kovidā",
  ],

  /* ── EXPERIENCE ───────────────────────────────────────────────── */
  /*
   * Each job:
   *   company    string   — company name
   *   role       string   — job title
   *   dates      string   — date range shown on the card
   *   location   string   — city (optional)
   *   current    bool     — shows green "Current" badge
   *   logoText   string   — 2-4 char abbreviation shown in the logo circle
   *   logoColor  string   — CSS gradient for the logo background
   *   clients    string   — (optional) shown as italic line
   *   tags       string[] — tech tags shown as pills
   *   bullets    string[] — bullet points (HTML allowed)
   */
  experience: [
    {
      company:   "Coforge",
      role:      "Senior Tech Lead",
      dates:     "Jan 2026 – Present",
      location:  "Sydney, NSW",
      current:   true,
      logoText:  "CO",
      logoColor: "linear-gradient(135deg,#FF6B35,#F7C59F)",
      clients:   "Clients: SITA · ASX",
      tags:      ["Ansible","Jenkins JCasC","Kubernetes","Nexus","PostgreSQL","MinIO","Vault","ForgeRock","Longhorn"],
      bullets: [
        "Migrated Nexus repository from OrientDB to PostgreSQL, automating the full cutover with Ansible playbooks and eliminating a known OrientDB reliability risk",
        "Containerised Jenkins on RHEL using Jenkins Configuration as Code (JCasC) — entire platform state version-controlled and reproducible from a single YAML",
        "Deployed and configured ForgeRock IAM, MinIO object storage, Vault secrets management, and Longhorn persistent volumes across Kubernetes-based UAT environments",
        "Automated SITA's on-prem Jenkins &amp; Nexus infrastructure; delivered Managed File Transfer pipelines for ASX using Terraform, Ansible, and GitLab CI",
      ],
    },
    {
      company:   "Thoughtworks",
      role:      "Senior Consultant – DevOps & SRE",
      dates:     "Aug 2025 – Jan 2026",
      location:  "Sydney, NSW",
      current:   false,
      logoText:  "TW",
      logoColor: "linear-gradient(135deg,#FF4785,#FF8C42)",
      tags:      ["Disaster Recovery","SLA/SLO","RTO/RPO","Performance Testing","Platform Resilience"],
      bullets: [
        "Defined SLA, RTO, and RPO targets for critical government applications and translated them into an actionable enterprise disaster recovery strategy",
        "Executed DR readiness assessments and failover testing, validating recovery procedures against agreed RTO/RPO thresholds",
        "Delivered a performance testing strategy and remediation roadmap for high-traffic government platforms — identifying bottlenecks before they reached production",
      ],
    },
    {
      company:   "Australian Taxation Office",
      role:      "Senior Cloud Platform Engineer",
      dates:     "Nov 2022 – Jun 2025",
      location:  "Sydney, NSW",
      current:   false,
      logoText:  "ATO",
      logoColor: "linear-gradient(135deg,#1C3F7F,#2E6DB4)",
      tags:      ["AWS Organizations","SCPs","Terraform","GitLab CI","Azure DevOps","Security Hub","Macie","Detective","Data Perimeter"],
      bullets: [
        "Designed and maintained ATO's AWS governance architecture — AWS Organizations, OU hierarchy, and Service Control Policies (SCPs) enforcing least-privilege guardrails at scale",
        "Implemented AWS Data Perimeter controls, restricting data egress to trusted identities, networks, and resources — a critical security boundary for a federal agency",
        "Built infrastructure-as-code pipelines using Terraform with GitLab CI and Azure DevOps, enabling consistent, auditable provisioning across accounts",
        "Activated Security Hub, Macie, and Detective for continuous threat detection and compliance posture visibility across ATO's AWS estate",
      ],
    },
    {
      company:   "Transport NSW",
      role:      "Senior Cloud DevOps Engineer",
      dates:     "Feb 2022 – Oct 2022",
      location:  "Sydney, NSW",
      current:   false,
      logoText:  "TfNSW",
      logoColor: "linear-gradient(135deg,#00857E,#00AFAA)",
      tags:      ["Sumo Logic","New Relic","Terraform","AWS Lambda","Jenkins","Cost Optimisation"],
      bullets: [
        "Built enterprise observability dashboards in Sumo Logic and New Relic, giving Transport NSW operations teams real-time visibility across applications and infrastructure",
        "Codified observability stack deployment with Terraform — dashboards, alerts, and log pipelines provisioned as infrastructure, not click-ops",
        "Developed AWS Lambda functions to automate operational workflows, integrated directly into Jenkins pipelines for event-driven execution",
        "Identified and implemented AWS cost optimisation measures, reducing cloud spend through right-sizing, scheduling, and unused resource cleanup",
      ],
    },
    {
      company:   "NAB / MLC / IOOF",
      role:      "Senior DevOps Engineer",
      dates:     "Oct 2019 – Feb 2022",
      location:  "Sydney, NSW",
      current:   false,
      logoText:  "NAB",
      logoColor: "linear-gradient(135deg,#E31837,#FF6B6B)",
      tags:      ["Jenkins","Terraform","AWS","Azure","CI/CD","High Availability"],
      bullets: [
        "Operated and maintained Jenkins-based CI/CD platforms processing hundreds of daily deployments across NAB, MLC, and IOOF banking applications on AWS and Azure",
        "Implemented Terraform modules and Jenkins pipelines to automate infrastructure provisioning and environment management, replacing months of manual runbooks",
        "Sustained large-scale non-production environment fleets, ensuring high availability and consistent release cadence for engineering teams through two major mergers",
      ],
    },
    {
      company:   "Industrie IT",
      role:      "Senior DevOps Engineer",
      dates:     "Feb 2016 – Oct 2019",
      location:  "Sydney, NSW",
      current:   false,
      logoText:  "IIT",
      logoColor: "linear-gradient(135deg,#6366f1,#8b5cf6)",
      clients:   "Clients: TfNSW · IAG · NAB · PwC · Origin Energy · Aussie Home Loans · HSBC · AMP · CareGiverAsia",
      tags:      ["AWS","Azure","GCP","Kubernetes","Terraform","Puppet","Jenkins","Bamboo","Docker","Rancher"],
      bullets: [
        "Delivered multi-cloud AWS, Azure, and GCP infrastructure for 10+ enterprise clients across banking, insurance, government, and energy — operating as embedded DevOps consultant across concurrent engagements",
        "Tuned Kubernetes (AKS, VMSS) Horizontal Pod Autoscaler for pod and node-level auto-scaling, improving resilience under peak traffic without over-provisioning",
        "Built CI/CD pipelines across Jenkins, Bamboo, Codeship, and Travis CI — standardising deployment patterns and cutting release cycle times for each client",
        "Led Origin Energy's on-premises to AWS migration — designed target architecture, authored IaC with Terraform, and established CI/CD pipelines from scratch",
        "Built a cost visibility dashboard (Bootstrap + Jenkins integration) surfacing real-time AWS spend per environment — giving clients actionable data to eliminate idle spend",
      ],
    },
    {
      company:   "Infosys Technologies",
      role:      "Technology Lead",
      dates:     "Jul 2007 – Jan 2016",
      location:  "India & Australia",
      current:   false,
      logoText:  "IN",
      logoColor: "linear-gradient(135deg,#007CC3,#00B5E2)",
      clients:   "Clients: Westpac · NAB · AMP · Telstra",
      tags:      ["Jenkins","Git","SonarQube","Liquibase","Control-M","Oracle","Perl","Agile"],
      bullets: [
        "Drove DevOps transformation across Westpac, NAB, AMP, and Telstra accounts — introduced CI/CD practices, Git branching strategies, and automated quality gates into legacy delivery teams",
        "Eliminated error-prone manual DB releases by automating schema migrations with Liquibase, FlyWayDB, and Maven SQL Plugin through Jenkins pipelines",
        "Led 24×7 BAU operations team — owned DR/BCP procedures, chaired Change Approval Board representation, and maintained SLA compliance across production environments",
      ],
    },
    {
      company:   "Huawei Technologies",
      role:      "Software Engineer",
      dates:     "Feb 2005 – Jun 2007",
      location:  "",
      current:   false,
      logoText:  "HW",
      logoColor: "linear-gradient(135deg,#CF0A2C,#FF4444)",
      tags:      ["Java","Telecom OSS","C/C++"],
      bullets: [
        "Developed OSS (Operations Support System) modules for telecom provisioning and network management",
        "Received Golden Team Award for Russian Telecom (RTC) project delivery",
        "Reduced codebase from 8,000 to 2,000 lines using Java Reflections — recognised with an individual excellence award",
      ],
    },
    {
      company:   "CMC Ltd",
      role:      "Test Engineer",
      dates:     "Sep 2004 – Feb 2005",
      location:  "Hyderabad, India",
      current:   false,
      logoText:  "CMC",
      logoColor: "linear-gradient(135deg,#374151,#6B7280)",
      clients:   "Client: TRW, UK",
      tags:      ["Unit Testing","Manual Testing","BVA","Test Cases","IPMS","C/C++","Embedded"],
      bullets: [
        "Tested Electric Power Assisted Steering (EPAS) system — safety-critical automotive software for TRW, UK",
        "Wrote stub-based unit test cases; applied Boundary Value Analysis (BVA) for input coverage",
        "Verified Boolean, decision, and statement coverage across motor control and torque control modules",
        "Tracked and reported defects via I.P.M.S; validated actual vs expected results against design documents",
      ],
    },
  ],

  /* ── SKILLS ───────────────────────────────────────────────────── */
  /*
   * Each category:
   *   icon  string   — emoji for the category
   *   name  string   — category title
   *   tags  string[] — list of skill tags
   */
  skills: [
    {
      icon: "☁️",
      name: "Cloud Platforms",
      tags: ["AWS","Azure","GCP","EC2","S3","EKS","ELB","CloudFormation","CloudFront","Lambda","RDS","Route 53","ACM","Elastic Beanstalk"],
    },
    {
      icon: "🏗️",
      name: "Infrastructure as Code",
      tags: ["Terraform","Ansible","Puppet","CloudFormation","Packer","Vagrant"],
    },
    {
      icon: "🔄",
      name: "CI/CD & Automation",
      tags: ["Jenkins","GitLab CI","Azure DevOps","Bamboo","Travis CI","Codeship","TeamCity","Maven","Ant","SonarQube"],
    },
    {
      icon: "🐳",
      name: "Containers & Orchestration",
      tags: ["Kubernetes (EKS, AKS)","Docker","Rancher","Helm","Longhorn","MinIO","Vault","ForgeRock"],
    },
    {
      icon: "📊",
      name: "Observability & Monitoring",
      tags: ["New Relic","Sumo Logic","CloudWatch","Stackdriver","Prometheus","Grafana"],
    },
    {
      icon: "🔐",
      name: "Security & Governance",
      tags: ["AWS Organizations","SCPs","Security Hub","Macie","Detective","Data Perimeter","ForgeRock"],
    },
    {
      icon: "💻",
      name: "Programming & Scripting",
      tags: ["Python","Bash / Shell","Perl","Ruby","JavaScript","Java","C / C++","PL/SQL","Google Apps Script"],
    },
    {
      icon: "🗄️",
      name: "Databases & Tools",
      tags: ["Oracle","PostgreSQL","MySQL","Sybase","Informix","Liquibase","FlyWayDB","Control-M","Autosys"],
    },
  ],

  /* ── AWARDS ───────────────────────────────────────────────────── */
  /*
   * Each award group:
   *   org   string   — organisation name
   *   color string   — CSS gradient for the org badge
   *   items string[] — list of award descriptions (emoji + text)
   */
  awards: [
    {
      org:   "NAB / MLC / IOOF",
      color: "linear-gradient(135deg,#E31837,#FF6B6B)",
      items: [
        "🏆 Multiple Awards for Environment & Cost Optimisation",
        "🏆 Outstanding Technical Contribution Award",
      ],
    },
    {
      org:   "Huawei Technologies",
      color: "linear-gradient(135deg,#CF0A2C,#FF4444)",
      items: [
        "🥇 RTC (Russian Telecom) Golden Team Award",
        "🏆 Award for Code Optimisation — 8k → 2k lines via Java Reflections",
      ],
    },
    {
      org:   "Certifications",
      color: "linear-gradient(135deg,#6366f1,#8b5cf6)",
      items: [
        "☁️ AWS Certified Solutions Architect – Associate",
        "🔧 Certified Jenkins Engineer (CJE)",
        "🔄 Professional Scrum Master (PSM)",
      ],
    },
    {
      org:   "♔ Chess",
      color: "linear-gradient(135deg,#4a5568,#718096)",
      span:  true,
      board: true,
      items: [
        "♛ 2nd Place — Andhra Pradesh State Open Chess Tournament (Under-12), 1994",
        "♛ 2nd Place — Visakhapatnam District Chess Tournament, Lions Club of India, 1996",
        "♛ 2nd Place — Mandal Chess Championship, Government Library, 2000",
        "♛ 2nd Place — Andhra University Chess Tournament, 2001",
        "♛ 2nd Place — Andhra University Chess Tournament, 2002",
        "♛ 1st Place — Inter-College Chess Championship, 2004",
      ],
    },
    {
      org:   "Infosys Technologies",
      color: "linear-gradient(135deg,#007CC3,#00B5E2)",
      span:  true,   // renders full-width
      items: [
        "⭐ Most Outstanding Technical Contribution – Q3 2007-08",
        "⭐ Most Outstanding Technical Contribution – Q1 2008-09",
        "🏆 Best Project Annuity – NDSD Project 2007-08",
        "🏆 Best Project Non-Annuity – OSS Transition Project 2007-08",
        "🎖️ Individual Excellence Award – PE GIS 2008",
        "🎖️ InfyA Encore Award – Delivery Excellence Oct 2008-09",
        "🏅 Proactive Risk Management Award 2009-10",
        "🏅 Westpac EoFY Performance Award 2013",
        "🏅 Westpac EoFY Performance Award 2014",
      ],
    },
  ],

  /* ── PROJECTS ─────────────────────────────────────────────────── */
  /*
   * Personal / community projects outside of employment.
   * Each project:
   *   title       string   — project name
   *   title_te    string   — Telugu name (optional)
   *   title_sa    string   — Sanskrit name (optional)
   *   subtitle    string   — one-line tagline
   *   desc_en     string   — 2–3 sentence description (HTML allowed)
   *   desc_te     string   — Telugu description (optional)
   *   impact      string[] — key impact / stat bullets
   *   tags        string[] — technologies used
   *   link        string   — URL or "" to hide
   *   linkLabel   string   — button text
   *   icon        string   — emoji for the card header
   */
  projects: [
    {
      title:    "Bhagavad Gītā Telegram Bot",
      title_te: "భగవద్గీత టెలిగ్రామ్ బాట్",
      title_sa: "भगवद्गीता-टेलिग्राम्-यन्त्रम्",
      subtitle: "Daily Gītā wisdom for thousands of students — powered by Google Apps Script",
      desc_en:  "Built a Telegram bot that delivers Bhagavad Gītā verses, meanings, and study content to students of <strong>Mysore Datta Peeṭham</strong>. Content is managed through Google Sheets — teachers update the data and the bot instantly serves it to subscribers. No server, no infrastructure cost — entirely serverless via Google Apps Script triggers.",
      desc_te:  "మైసూర్ దత్త పీఠం విద్యార్థులకు భగవద్గీత శ్లోకాలు, అర్థాలు మరియు అధ్యయన విషయాలను అందించే టెలిగ్రామ్ బాట్ నిర్మించారు. Google Sheets ద్వారా కంటెంట్ నిర్వహించబడుతుంది.",
      impact: [
        "Used daily by thousands of Gītā students across Mysore Datta Peeṭham",
        "Zero server cost — fully serverless via Google Apps Script",
        "Teachers manage all content through a simple Google Sheet",
        "Delivers verses in Devanagari, Telugu, and transliteration",
      ],
      tags:      ["Google Apps Script","Telegram Bot API","Google Sheets","JavaScript","Serverless"],
      link:      "",
      linkLabel: "View on Telegram",
      icon:      "🕉️",
    },
    /*
     * To add another project, copy the block above and paste here.
     * Set link: "" to hide the button, or add a real URL.
     */
  ],

  /* ── GALLERY ──────────────────────────────────────────────────── */
  /*
   * Add photos here. Put image files in assets/images/gallery/
   *
   * Each item:
   *   image      string  — path relative to project root
   *   caption    string  — English caption
   *   caption_te string  — Telugu caption (optional)
   *   caption_sa string  — Sanskrit caption (optional)
   *   category   string  — optional filter tag (e.g. "family","travel","awards")
   */
  gallery: [
    {
      image:      "assets/images/gallery/placeholder1.jpg",
      caption:    "Add your first photo — place the image in assets/images/gallery/ and update this path",
      caption_te: "మీ మొదటి ఫోటో జోడించండి",
      category:   "personal",
    },
    {
      image:      "assets/images/gallery/placeholder2.jpg",
      caption:    "Family / Travel / Awards — anything that shows who you are beyond the CV",
      caption_te: "కుటుంబం / ప్రయాణం / పురస్కారాలు",
      category:   "travel",
    },
    {
      image:      "assets/images/gallery/placeholder3.jpg",
      caption:    "Conference, speaking engagement, or community event",
      caption_te: "సమావేశం లేదా సమాజ కార్యక్రమం",
      category:   "professional",
    },
  ],

  /* ── SANSKRIT EXPERTISE ───────────────────────────────────────── */
  sanskrit: {
    bio_en: "A dedicated Sanskrit practitioner with formal examinations across three of India's most respected institutions — Saṃskṛta Bhāratī, IIT Roorkee, and the Śṛṅgerī Surasarasvatī Sabhā. Progressed from foundational Praveśaḥ through the advanced Kovidā level with Saṃskṛta Bhāratī, alongside a rigorous five-level grammar curriculum from IIT Roorkee covering vibhakti, lakāra, avyaya, kṛdanta, sandhi, and samāsa. A student of the Bhagavad Gītā in its original Sanskrit, guided by the Gītā Sopānam and Śṛṅgerī's traditional śāstra lineage.",
    bio_te: "మూడు ప్రతిష్ఠాత్మక సంస్థల నుండి — సంస్కృత భారతి, IIT రూర్కీ మరియు శృంగేరీ సురసరస్వతీ సభ — అధికారిక పరీక్షలలో ఉత్తీర్ణులైన సంస్కృత సాధకుడు. సంస్కృత భారతి ప్రవేశ స్థాయి నుండి అత్యున్నత కోవిద స్థాయి వరకు అభివృద్ధి చెందారు. భగవద్గీతను మూల సంస్కృతంలో, శృంగేరీ శాస్త్ర పరంపర మార్గదర్శకత్వంలో అభ్యసిస్తున్నారు.",
    bio_sa: "त्रिषु प्रतिष्ठितसंस्थासु — संस्कृतभारत्याम्, IIT-रुर्कीविश्वविद्यालये, शृङ्गेरीसुरसरस्वतीसभायां च — औपचारिकपरीक्षाः उत्तीर्णः संस्कृतसाधकः। संस्कृतभारत्याः प्रवेशस्तरात् आरभ्य कोविदस्तरपर्यन्तं प्रगतः। भगवद्गीतां मूलसंस्कृते, शृङ्गेरीशास्त्रपरम्परामार्गदर्शने च अभ्यस्यति।",

    /*
     * Certifications — grouped by institution.
     * To add more: copy any object block and paste after the last one.
     */
    certifications: [
      /* ── Saṃskṛta Bhāratī ── */
      {
        name:        "Praveśaḥ (प्रवेशः)",
        institution: "Saṃskṛta Bhāratī",
        level:       "Level 1",
        desc_en:     "Foundation level — introduction to spoken Sanskrit",
        desc_te:     "మాట్లాడే సంస్కృతానికి పరిచయం",
        desc_sa:     "भाषितसंस्कृतस्य प्रारम्भिकः परिचयः",
      },
      {
        name:        "Paricayā (परिचया)",
        institution: "Saṃskṛta Bhāratī",
        level:       "Level 2",
        desc_en:     "Familiarity level — basic grammar and conversation",
        desc_te:     "ప్రాథమిక వ్యాకరణం మరియు సంభాషణ",
        desc_sa:     "प्राथमिकं व्याकरणं संभाषणं च",
      },
      {
        name:        "Śikṣā (शिक्षा)",
        institution: "Saṃskṛta Bhāratī",
        level:       "Level 3",
        desc_en:     "Teaching level — proficiency in grammar and composition",
        desc_te:     "వ్యాకరణం మరియు రచనలో నైపుణ్యం",
        desc_sa:     "व्याकरणे निबन्धने च प्रावीण्यम्",
      },
      {
        name:        "Kovidā (कोविदा)",
        institution: "Saṃskṛta Bhāratī",
        level:       "Level 4 — Expert",
        desc_en:     "Expert level — advanced grammar, kāvya, and śāstra texts",
        desc_te:     "అధునాతన వ్యాకరణం, కావ్యం మరియు శాస్త్ర గ్రంథాలు",
        desc_sa:     "उच्चतरं व्याकरणं, काव्यं, शास्त्रग्रन्थाश्च",
      },
      /* ── IIT Roorkee — Subhāṣitaṃ Saṃkṛtam ── */
      {
        name:        "Subhāṣitaṃ Saṃskṛtam — Level 1",
        institution: "IIT Roorkee",
        level:       "Spoken Sanskrit",
        desc_en:     "Conversational Sanskrit — pronunciation, common phrases, basic sūtras",
        desc_te:     "ఉచ్చారణ, సాధారణ వాక్యాలు, ప్రాథమిక సూత్రాలు",
        desc_sa:     "उच्चारणं, सामान्यवाक्यानि, प्राथमिकसूत्राणि च",
      },
      {
        name:        "Subhāṣitaṃ Saṃskṛtam — Level 2",
        institution: "IIT Roorkee",
        level:       "Vibhakti & Lakāra",
        desc_en:     "Case endings (vibhakti) and verb conjugations (lakāra) — Pāṇinian grammar",
        desc_te:     "విభక్తి మరియు లకార — పాణినీయ వ్యాకరణం",
        desc_sa:     "विभक्तयः लकाराश्च — पाणिनीयव्याकरणम्",
      },
      {
        name:        "Subhāṣitaṃ Saṃskṛtam — Level 3",
        institution: "IIT Roorkee",
        level:       "Avyaya, Kṛdanta & Prayoga",
        desc_en:     "Indeclinables, participial forms, and applied usage in classical texts",
        desc_te:     "అవ్యయాలు, కృదంతాలు మరియు ప్రయోగాలు",
        desc_sa:     "अव्ययानि, कृदन्तानि, शास्त्रग्रन्थेषु प्रयोगश्च",
      },
      {
        name:        "Subhāṣitaṃ Saṃskṛtam — Level 4",
        institution: "IIT Roorkee",
        level:       "Sandhiḥ",
        desc_en:     "Euphonic combination rules (sandhi) — vowel, consonant and visarga sandhi",
        desc_te:     "స్వర, వ్యంజన మరియు విసర్గ సంధి నియమాలు",
        desc_sa:     "स्वर-व्यञ्जन-विसर्गसन्धिनियमाः",
      },
      {
        name:        "Subhāṣitaṃ Saṃskṛtam — Level 5",
        institution: "IIT Roorkee",
        level:       "Samāsa & Anvaya",
        desc_en:     "Compound word formation (samāsa) and introduction to sentence analysis (anvaya)",
        desc_te:     "సమాస నిర్మాణం మరియు అన్వయ పరిచయం",
        desc_sa:     "समासनिर्माणं अन्वयपरिचयश्च",
      },
      /* ── Gītā Sopānam ── */
      {
        name:        "Gītā Sopānam — Level 1",
        institution: "Saṃskṛta Bhāratī",
        level:       "Gītā in Sanskrit",
        desc_en:     "Study of Bhagavad Gītā in original Sanskrit with word-by-word analysis",
        desc_te:     "భగవద్గీతను మూల సంస్కృతంలో పద పద విశ్లేషణతో అధ్యయనం",
        desc_sa:     "मूलसंस्कृते भगवद्गीतायाः पदशः अध्ययनम्",
      },
      /* ── Gītāyāḥ Bhāṣā Saṃskṛtam ── */
      {
        name:        "Gītāyāḥ Bhāṣā Saṃskṛtam — Level 1",
        institution: "Saṃskṛta Bhāratī",
        level:       "Gītā Language",
        desc_en:     "Grammar and vocabulary specific to the language of the Bhagavad Gītā",
        desc_te:     "భగవద్గీత భాష యొక్క వ్యాకరణం మరియు పదజాలం",
        desc_sa:     "भगवद्गीतायाः भाषायाः व्याकरणं शब्दकोशश्च",
      },
      /* ── Śṛṅgerī Surasarasvatī Sabhā ── */
      {
        name:        "Prathamā (प्रथमा)",
        institution: "Śṛṅgerī Surasarasvatī Sabhā",
        level:       "Level 1",
        desc_en:     "First traditional śāstra examination — grammar, poetry, and sacred texts",
        desc_te:     "మొదటి సాంప్రదాయ శాస్త్ర పరీక్ష — వ్యాకరణం, కావ్యం మరియు పవిత్ర గ్రంథాలు",
        desc_sa:     "प्रथमः पारम्परिकः शास्त्रपरीक्षः — व्याकरणं, काव्यं, पवित्रग्रन्थाश्च",
      },
      {
        name:        "Dvitīyā (द्वितीया)",
        institution: "Śṛṅgerī Surasarasvatī Sabhā",
        level:       "Level 2",
        desc_en:     "Second traditional śāstra examination — deeper study of grammar and philosophy",
        desc_te:     "రెండవ శాస్త్ర పరీక్ష — వ్యాకరణం మరియు తత్త్వశాస్త్రం లోతైన అధ్యయనం",
        desc_sa:     "द्वितीयः शास्त्रपरीक्षः — व्याकरणस्य दर्शनस्य च गहनमध्ययनम्",
      },
    ],

    /* Texts studied / key works */
    texts: [
      {
        en: "Śrīmadbhagavadgītā (मूलम्)",
        te: "శ్రీమద్భగవద్గీత (మూలం)",
        sa: "श्रीमद्भगवद्गीता (मूलम्)",
      },
      {
        en: "Subhāṣita collections",
        te: "సుభాషిత సంకలనాలు",
        sa: "सुभाषितसंग्रहाः",
      },
      {
        en: "Pāṇinīya Aṣṭādhyāyī (selected sūtras)",
        te: "పాణినీయ అష్టాధ్యాయీ (ఎంపిక సూత్రాలు)",
        sa: "पाणिनीयाष्टाध्यायी (चितानि सूत्राणि)",
      },
      {
        en: "Amarakoṣaḥ (selected kāṇḍas)",
        te: "అమరకోషః (ఎంపిక కాండాలు)",
        sa: "अमरकोषः (चितानि काण्डानि)",
      },
      {
        en: "Raghuvaṃśaḥ (selected sargas)",
        te: "రఘువంశః (ఎంపిక సర్గాలు)",
        sa: "रघुवंशः (चिताः सर्गाः)",
      },
      {
        en: "Hitopadeśaḥ",
        te: "హితోపదేశః",
        sa: "हितोपदेशः",
      },
      {
        en: "ŚrīmanMahābhāratam (selected adhyāyas)",
        te: "శ్రీమన్మహాభారతం (ఎంపిక అధ్యాయాలు)",
        sa: "श्रीमन्महाभारतम् (चिताः अध्यायाः)",
      },
    ],

    teaching_en: "",  // add teaching experience here if applicable, or leave "" to hide
    teaching_te: "",
  },

  /* ── SANSKRIT QUOTES (Subhāṣitāni) ───────────────────────────── */
  /*
   * Add your favourite Sanskrit quotes here.
   * Each quote shows in 3 scripts on the card front,
   * and the meaning + source on the card back (hover/tap to flip).
   *
   * Each quote:
   *   devanagari  string  — Devanagari script
   *   telugu      string  — Telugu script
   *   iast        string  — IAST romanisation
   *   meaning_en  string  — English meaning
   *   meaning_te  string  — Telugu meaning (optional)
   *   source      string  — text name, chapter/verse
   */
  quotes: [
    {
      devanagari: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      telugu:     "కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన।\nమా కర్మఫలహేతుర్భూర్మా తే సంగోఽస్త్వకర్మణి॥",
      iast:       "Karmaṇyevādhikāraste mā phaleṣu kadācana,\nmā karmaphalaheturbhūrmā te saṅgo'stvakarmaṇi.",
      meaning_en: "Your right is to perform your duty only — never to its fruits. Let not the fruits of action be your motive, nor let attachment to inaction be yours.",
      meaning_te: "నీకు కర్మ చేయడంలో మాత్రమే అధికారం ఉంది, దాని ఫలాలపై కాదు. ఫలితాల పట్ల ఆసక్తి పెట్టుకోకు, నిష్క్రియత పట్ల అనురక్తి ఉంచుకోకు.",
      meaning_sa: "कर्म कर्तुमेव ते अधिकारः, न तु तत्फलम्। फलाशया कर्म मा कुरु, अकर्मणि च अनुरागः मा भवतु।",
      source:     "Bhagavad Gītā 2.47",
    },
    {
      devanagari: "विद्या ददाति विनयं विनयाद् याति पात्रताम्।\nपात्रत्वाद् धनमाप्नोति धनाद् धर्मं ततः सुखम्॥",
      telugu:     "విద్యా దదాతి వినయం వినయాద్ యాతి పాత్రతామ్।\nపాత్రత్వాద్ ధనమాప్నోతి ధనాద్ ధర్మం తతః సుఖమ్॥",
      iast:       "Vidyā dadāti vinayaṃ vinayād yāti pātratām,\npātratavād dhanamāpnoti dhanād dharmaṃ tataḥ sukham.",
      meaning_en: "Knowledge gives humility; from humility comes worthiness; from worthiness one attains wealth; from wealth, righteousness; and from righteousness, happiness.",
      meaning_te: "విద్య వినయాన్ని ఇస్తుంది; వినయం నుండి యోగ్యత వస్తుంది; యోగ్యత నుండి సంపద; సంపద నుండి ధర్మం; ధర్మం నుండి సుఖం.",
      meaning_sa: "विद्या विनयं ददाति, विनयात् पात्रता जायते, पात्रतया धनम् आगच्छति, धनात् धर्मः, धर्मात् च सुखम् अवाप्यते।",
      source:     "Hitopadeśa",
    },
    {
      devanagari: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥",
      telugu:     "ఉద్యమేన హి సిధ్యన్తి కార్యాణి న మనోరథైః।\nన హి సుప్తస్య సింహస్య ప్రవిశన్తి ముఖే మృగాః॥",
      iast:       "Udyamena hi sidhyanti kāryāṇi na manorathaiḥ,\nna hi suptasya siṃhasya praviśanti mukhe mṛgāḥ.",
      meaning_en: "Goals are achieved through sustained effort, not mere wishes. Deer do not walk into the mouth of a sleeping lion.",
      meaning_te: "లక్ష్యాలు ప్రయత్నంతో సాధించబడతాయి, కేవలం కోరికలతో కాదు. నిద్రిస్తున్న సింహం నోటిలోకి జింకలు నడిచి రావు.",
      meaning_sa: "कार्याणि उद्यमेन एव सिध्यन्ति, केवलैः मनोरथैः न। यथा सुप्तस्य सिंहस्य मुखे मृगाः स्वयमेव न आयान्ति।",
      source:     "Hitopadeśa",
    },
    {
      devanagari: "अयं निजः परो वेति गणना लघुचेतसाम्।\nउदारचरितानां तु वसुधैव कुटुम्बकम्॥",
      telugu:     "అయం నిజః పరో వేతి గణనా లఘుచేతసామ్।\nఉదారచరితానాం తు వసుధైవ కుటుంబకమ్॥",
      iast:       "Ayaṃ nijaḥ paro veti gaṇanā laghucetasām,\nudāracaritānāṃ tu vasudhaiva kuṭumbakam.",
      meaning_en: "'This is mine, that is another's' — only the small-minded think thus. For the noble-hearted, the whole world is one family.",
      meaning_te: "'ఇది నాది, అది పరాయిది' అని అనుకోవడం సంకుచిత మనసుల లక్షణం. ఉదార స్వభావుల కు మొత్తం ప్రపంచమే కుటుంబం.",
      meaning_sa: "अयं स्वः, असौ परः — इति विभेदचिन्तनं क्षुद्रचित्तानाम् एव। उदारचरितानां तु सर्वा वसुधा एकं कुटुम्बम्।",
      source:     "Mahopaniṣad 6.71 / Hitopadeśa",
    },
    {
      devanagari: "सा विद्या या विमुक्तये।",
      telugu:     "సా విద్యా యా విముక్తయే।",
      iast:       "Sā vidyā yā vimuktaye.",
      meaning_en: "That alone is true knowledge which leads to liberation — all else is merely a craft.",
      meaning_te: "విముక్తికి దారితీసేదే నిజమైన విద్య — తక్కినదంతా కేవలం ఒక నైపుణ్యం మాత్రమే.",
      meaning_sa: "या विद्या मोक्षाय उपयोगिनी, सा एव सत्या विद्या। इतरत् सर्वं केवलं शिल्पमात्रम्।",
      source:     "Viṣṇupurāṇa 1.19.41",
    },
    {
      devanagari: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
      telugu:     "యోగస్థః కురు కర్మాణి సంగం త్యక్త్వా ధనంజయ।\nసిద్ధ్యసిద్ధ్యోః సమో భూత్వా సమత్వం యోగ ఉచ్యతే॥",
      iast:       "Yogasthaḥ kuru karmāṇi saṅgaṃ tyaktvā dhanañjaya,\nsiddhyasiddhyoḥ samo bhūtvā samatvaṃ yoga ucyate.",
      meaning_en: "Steadfast in yoga, perform your actions abandoning attachment, O Arjuna. Remaining equal in success and failure — that equanimity is called yoga.",
      meaning_te: "యోగంలో స్థిరంగా ఉంటూ, ఆసక్తి వదిలి కర్మలు చెయ్యి. విజయ-అపజయాలలో సమభావంతో ఉండటమే యోగం అని అంటారు.",
      meaning_sa: "हे धनञ्जय, योगे स्थित्वा, आसक्तिं त्यक्त्वा कर्म कुरु। सिद्धौ असिद्धौ च समभावः एव योगः उच्यते।",
      source:     "Bhagavad Gītā 2.48",
    },
    {
      devanagari: "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी।",
      telugu:     "జననీ జన్మభూమిశ్చ స్వర్గాదపి గరీయసీ।",
      iast:       "Jananī janmabhūmiśca svargādapi garīyasī.",
      meaning_en: "Mother and the land of one's birth are greater even than heaven.",
      meaning_te: "తల్లి మరియు జన్మభూమి స్వర్గం కంటే గొప్పవి.",
      meaning_sa: "जनयित्री माता च जन्मभूमिः च — एतौ द्वौ स्वर्गादपि श्रेष्ठौ।",
      source:     "Vālmīki Rāmāyaṇa, Ayodhyākāṇḍa 31.27",
    },
    {
      devanagari: "परोपकाराय फलन्ति वृक्षाः परोपकाराय वहन्ति नद्यः।\nपरोपकाराय दुहन्ति गावः परोपकारार्थमिदं शरीरम्॥",
      telugu:     "పరోపకారాయ ఫలన్తి వృక్షాః పరోపకారాయ వహన్తి నద్యః।\nపరోపకారాయ దుహన్తి గావః పరోపకారార్థమిదం శరీరమ్॥",
      iast:       "Paropakārāya phalanti vṛkṣāḥ paropakārāya vahanti nadyaḥ,\nparopakārāya duhanti gāvaḥ paropakārārtham idaṃ śarīram.",
      meaning_en: "Trees bear fruit for others; rivers flow for others; cows give milk for others — this very body exists for the service of others.",
      meaning_te: "వృక్షాలు ఇతరుల కోసం ఫలాలు ఇస్తాయి; నదులు ఇతరుల కోసం ప్రవహిస్తాయి; ఆవులు ఇతరుల కోసం పాలు ఇస్తాయి — ఈ శరీరమే ఇతరుల సేవకు అర్పితమైనది.",
      meaning_sa: "वृक्षाः परार्थाय फलन्ति, नद्यः परार्थाय प्रवहन्ति, गावः परार्थाय दुहन्ति। एतदेव दर्शयति यत् अस्माकं देहोऽपि परोपकारार्थमेव।",
      source:     "Pañcatantra / Subhāṣitaratnabhāṇḍāgāra",
    },
    {
      devanagari: "नास्ति विद्यासमो बन्धुर्नास्ति विद्यासमः सुहृत्।\nनास्ति विद्यासमं वित्तं नास्ति विद्यासमः सुखम्॥",
      telugu:     "నాస్తి విద్యాసమో బంధుర్నాస్తి విద్యాసమః సుహృత్।\nనాస్తి విద్యాసమం విత్తం నాస్తి విద్యాసమః సుఖమ్॥",
      iast:       "Nāsti vidyāsamo bandhurnāsti vidyāsamaḥ suhṛt,\nnāsti vidyāsamaṃ vittaṃ nāsti vidyāsamaḥ sukham.",
      meaning_en: "There is no relative like knowledge, no friend like knowledge, no wealth like knowledge, and no happiness equal to knowledge.",
      meaning_te: "విద్యతో సమానమైన బంధువు లేదు, విద్యతో సమానమైన మిత్రుడు లేదు, విద్యతో సమానమైన సంపద లేదు, విద్యతో సమానమైన సుఖం లేదు.",
      meaning_sa: "विद्यायाः सदृशः बन्धुः नास्ति, सुहृत् नास्ति, वित्तं नास्ति, सुखञ्च नास्ति। विद्या सर्वेभ्यः उत्तमा।",
      source:     "Cāṇakya Nīti 7.12",
    },
    {
      devanagari: "धर्मो रक्षति रक्षितः।",
      telugu:     "ధర్మో రక్షతి రక్షితః।",
      iast:       "Dharmo rakṣati rakṣitaḥ.",
      meaning_en: "Dharma protects those who protect it.",
      meaning_te: "ధర్మాన్ని రక్షించేవారిని ధర్మం రక్షిస్తుంది.",
      meaning_sa: "यः धर्मं रक्षति, तं धर्मः रक्षति। अतः धर्मपालने एव स्वरक्षणम्।",
      source:     "Manusmṛti 8.15 / Mahābhārata, Vana Parva",
    },
    {
      devanagari: "असतो मा सद्गमय।\nतमसो मा ज्योतिर्गमय।\nमृत्योर्मा अमृतं गमय॥",
      telugu:     "అసతో మా సద్గమయ।\nతమసో మా జ్యోతిర్గమయ।\nమృత్యోర్మా అమృతం గమయ॥",
      iast:       "Asato mā sadgamaya,\ntamaso mā jyotirgamaya,\nmṛtyor mā amṛtaṃ gamaya.",
      meaning_en: "Lead me from the unreal to the real; from darkness to light; from death to immortality.",
      meaning_te: "అసత్యం నుండి సత్యం వైపు; అంధకారం నుండి వెలుగు వైపు; మృత్యువు నుండి అమృతత్వం వైపు నన్ను నడిపించు.",
      meaning_sa: "असतः सत्यं प्रति, तमसः ज्योतिः प्रति, मृत्योः अमृतत्वं प्रति मां नय — इति उपनिषदः त्रिविधा प्रार्थना।",
      source:     "Bṛhadāraṇyaka Upaniṣad 1.3.28",
    },
    {
      devanagari: "सत्यमेव जयते नानृतम्।",
      telugu:     "సత్యమేవ జయతే నానృతమ్।",
      iast:       "Satyameva jayate nānṛtam.",
      meaning_en: "Truth alone triumphs — not falsehood.",
      meaning_te: "సత్యమే జయిస్తుంది — అసత్యం కాదు.",
      meaning_sa: "अन्ततः सत्यस्य एव जयः भवति, असत्यस्य न। सत्यमेव परमं बलम्।",
      source:     "Muṇḍakopaniṣad 3.1.6",
    },
    {
      devanagari: "अहिंसा परमो धर्मः।",
      telugu:     "అహింసా పరమో ధర్మః।",
      iast:       "Ahiṃsā paramo dharmaḥ.",
      meaning_en: "Non-violence is the highest dharma.",
      meaning_te: "అహింస అత్యుత్తమ ధర్మం.",
      meaning_sa: "सर्वेषां धर्माणां मध्ये अहिंसा उत्तमा। प्राणिमात्रेषु पीडाविरहणमेव परमधर्मः।",
      source:     "Mahābhārata, Ādi Parva 11.13",
    },
    {
      devanagari: "योगः कर्मसु कौशलम्।",
      telugu:     "యోగః కర్మసు కౌశలమ్।",
      iast:       "Yogaḥ karmasu kauśalam.",
      meaning_en: "Yoga is excellence in action.",
      meaning_te: "కర్మలలో నైపుణ్యమే యోగం.",
      meaning_sa: "कर्मसु कुशलता, दक्षता, फलासक्तिरहितं च कर्म — एतदेव योगः।",
      source:     "Bhagavad Gītā 2.50",
    },
    {
      devanagari: "तत् त्वम् असि।",
      telugu:     "తత్ త్వమ్ అసి।",
      iast:       "Tat tvam asi.",
      meaning_en: "Thou art That — the great Vedāntic equation identifying the individual self with universal Brahman.",
      meaning_te: "తత్ — అది; త్వమ్ — నీవు; అసి — ఉన్నావు. జీవాత్మయే పరమాత్మ అనే వేదాంత మహావాక్యం.",
      meaning_sa: "तत् इत्युक्तं परब्रह्म, त्वम् इत्युक्तः जीवात्मा — तयोः अभेदः एव वेदान्तस्य परममहावाक्यम्।",
      source:     "Chāndogya Upaniṣad 6.8.7",
    },
    {
      devanagari: "सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु। मा कश्चित् दुःखभाग् भवेत्॥",
      telugu:     "సర్వే భవంతు సుఖినః। సర్వే సంతు నిరామయాః।\nసర్వే భద్రాణి పశ్యంతు। మా కశ్చిత్ దుఃఖభాగ్ భవేత్॥",
      iast:       "Sarve bhavantu sukhinaḥ, sarve santu nirāmayāḥ,\nsarve bhadrāṇi paśyantu, mā kaścit duḥkhabhāg bhavet.",
      meaning_en: "May all be happy; may all be free from illness; may all see what is auspicious; may none suffer.",
      meaning_te: "అందరూ సుఖంగా ఉండుగాక; అందరూ నిరోగంగా ఉండుగాక; అందరూ శుభాన్ని చూచుగాక; ఎవరికీ దుఃఖం కలుగుగాక.",
      meaning_sa: "सर्वे जनाः सुखिनः भवन्तु, रोगरहिताः भवन्तु, शुभं पश्यन्तु, कोऽपि दुःखं मा अनुभवतु — इति विश्वकल्याणकामना।",
      source:     "Bṛhadāraṇyaka Upaniṣad (traditional benediction)",
    },
    {
      devanagari: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
      telugu:     "న జాయతే మ్రియతే వా కదాచిన్\nనాయం భూత్వా భవితా వా న భూయః।\nఅజో నిత్యః శాశ్వతోఽయం పురాణో\nన హన్యతే హన్యమానే శరీరే॥",
      iast:       "Na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ,\najo nityaḥ śāśvato'yaṃ purāṇo na hanyate hanyamāne śarīre.",
      meaning_en: "The soul is never born nor dies; it was not, is not, and will not come into being. Unborn, eternal, ever-existing, primeval — it does not perish when the body is slain.",
      meaning_te: "ఆత్మ ఎన్నటికీ జన్మించదు, మరణించదు; అది జన్మరహితం, నిత్యం, శాశ్వతం, పురాతనం — శరీరం నాశనమైనా ఆత్మ నశించదు.",
      meaning_sa: "आत्मा न जायते न म्रियते च कदापि। सः अजः, नित्यः, शाश्वतः, पुरातनः। शरीरस्य नाशेऽपि आत्मनः नाशः न जायते।",
      source:     "Bhagavad Gītā 2.20",
    },
    {
      devanagari: "एकं सद् विप्रा बहुधा वदन्ति।",
      telugu:     "ఏకం సద్ విప్రా బహుధా వదన్తి।",
      iast:       "Ekaṃ sad viprā bahudhā vadanti.",
      meaning_en: "Truth is one; the wise call it by many names.",
      meaning_te: "సత్యం ఒక్కటే; విద్వాంసులు దాన్ని వేర్వేరు పేర్లతో పిలుస్తారు.",
      meaning_sa: "परमसत्यं एकमेव। तमेव विद्वांसः इन्द्रः, मित्रः, वरुणः इत्यादिभिः नानानामभिः अभिदधति।",
      source:     "Ṛgveda 1.164.46",
    },
    {
      devanagari: "श्रद्धावान् लभते ज्ञानम्।",
      telugu:     "శ్రద్ధావాన్ లభతే జ్ఞానమ్।",
      iast:       "Śraddhāvān labhate jñānam.",
      meaning_en: "The faithful and sincere seeker attains knowledge.",
      meaning_te: "శ్రద్ధ కలిగినవాడే జ్ఞానాన్ని పొందుతాడు.",
      meaning_sa: "यस्य चित्ते श्रद्धा अस्ति, सः एव ज्ञानम् अवाप्नोति। श्रद्धाविहीनः ज्ञानं न लभते।",
      source:     "Bhagavad Gītā 4.39",
    },
    {
      devanagari: "लोकाः समस्ताः सुखिनो भवन्तु।",
      telugu:     "లోకాః సమస్తాః సుఖినో భవంతు।",
      iast:       "Lokāḥ samastāḥ sukhino bhavantu.",
      meaning_en: "May all the worlds be happy.",
      meaning_te: "సమస్త లోకాలు సుఖంగా ఉండుగాక.",
      meaning_sa: "समस्तेषु लोकेषु सर्वे प्राणिनः सुखिनः भवन्तु — इति वैदिकी विश्वकल्याणप्रार्थना।",
      source:     "Traditional Vedic benediction",
    },
    {
      devanagari: "क्षमा बलमशक्तानां शस्त्रं शक्तिमतां क्षमा।\nक्षमा वशीकृतिर्लोके क्षमया किं न साध्यते॥",
      telugu:     "క్షమా బలమశక్తానాం శస్త్రం శక్తిమతాం క్షమా।\nక్షమా వశీకృతిర్లోకే క్షమయా కిం న సాధ్యతే॥",
      iast:       "Kṣamā balam aśaktānāṃ śastraṃ śaktimatāṃ kṣamā,\nkṣamā vaśīkṛtirloke kṣamayā kiṃ na sādhyate.",
      meaning_en: "Forgiveness is the strength of the powerless; forgiveness is the weapon of the powerful. Forgiveness governs the world — what cannot be achieved through forgiveness?",
      meaning_te: "క్షమ అశక్తుల బలం; క్షమ బలవంతుల ఆయుధం. క్షమ ప్రపంచాన్ని వశపరచుకునే మార్గం — క్షమతో సాధించలేనిది ఏముంది?",
      meaning_sa: "अशक्तानां क्षमा बलम्, शक्तिमतां क्षमा शस्त्रम्। क्षमया लोकः वशीक्रियते। क्षमया किं किम् अप्रापणीयम् अस्ति?",
      source:     "Mahābhārata, Udyoga Parva 33.31",
    },
    {
      devanagari: "सन्तोषः परमं सुखम्।",
      telugu:     "సంతోషః పరమం సుఖమ్।",
      iast:       "Santoṣaḥ paramaṃ sukham.",
      meaning_en: "Contentment is the highest happiness.",
      meaning_te: "తృప్తి అత్యుత్తమ సుఖం.",
      meaning_sa: "सन्तोषः — यत् लब्धं तेन तृप्तिः — एतदेव परमं सुखम्। अतृप्तिः दुःखस्य मूलकारणम्।",
      source:     "Mahābhārata, Śānti Parva",
    },
    {
      devanagari: "स्वाध्यायान्मा प्रमदः।",
      telugu:     "స్వాధ్యాయాన్మా ప్రమదః।",
      iast:       "Svādhyāyān mā pramadaḥ.",
      meaning_en: "Never be negligent in self-study.",
      meaning_te: "స్వాధ్యాయంలో ఎన్నడూ అశ్రద్ధ చేయకు.",
      meaning_sa: "स्वाध्याये — शास्त्राणां स्वयं पठने पाठने च — कदापि प्रमादः मा भवतु। तैत्तिरीयोपनिषदि गुरोः एषः आदेशः।",
      source:     "Taittirīya Upaniṣad 1.11.1",
    },
    {
      devanagari: "सत्यं वद। धर्मं चर।",
      telugu:     "సత్యం వద। ధర్మం చర।",
      iast:       "Satyaṃ vada. Dharmaṃ cara.",
      meaning_en: "Speak truth. Follow dharma — the two-fold counsel at the heart of the Vedic graduate's departure into the world.",
      meaning_te: "సత్యం పలుకు. ధర్మం ఆచరించు — వేద విద్యార్థి గృహస్థాశ్రమంలో ప్రవేశించేటప్పుడు గురువు ఇచ్చే ద్విముఖ ఆదేశం.",
      meaning_sa: "सत्यं वद, धर्मं च आचर — इति वेदाध्ययनसमाप्तौ गुरुः शिष्यं गृहस्थाश्रमं प्रति प्रेषयन् ददाति द्विविधमुपदेशम्।",
      source:     "Taittirīya Upaniṣad 1.11.1",
    },
    {
      devanagari: "चरैवेति चरैवेति।",
      telugu:     "చరైవేతి చరైవేతి।",
      iast:       "Caraiveti caraiveti.",
      meaning_en: "Keep moving, keep moving — the Vedic exhortation never to stagnate; forward motion is the nature of life itself.",
      meaning_te: "నడుచుచుండుము, నడుచుచుండుము — ఆగిపోవద్దని వేద ప్రోత్సాహం; ముందుకు సాగడమే జీవితం యొక్క స్వభావం.",
      meaning_sa: "चर, चर — इति वेदः पुनः पुनः प्रेरयति। स्थगनं मृत्युसमम्; निरन्तरगतिशीलता एव जीवनस्य स्वभावः।",
      source:     "Aitareya Brāhmaṇa 33.3 (Ṛgveda)",
    },
    // ── Batch 2 (quotes 26–50) ─────────────────────────────────────
    {
      devanagari: "योगश्चित्तवृत्तिनिरोधः।",
      telugu:     "యోగశ్చిత్తవృత్తినిరోధః।",
      iast:       "Yogaś citta-vṛtti-nirodhaḥ.",
      meaning_en: "Yoga is the cessation of the fluctuations of the mind.",
      meaning_te: "మనసులోని చంచలవృత్తులను నిరోధించడమే యోగం.",
      meaning_sa: "चित्तस्य वृत्तयः — मनसि उत्पद्यमानाः संकल्पविकल्पाः — तासां निरोधः, उपशमः एव योगः।",
      source:     "Patañjali Yoga Sūtras 1.2",
    },
    {
      devanagari: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
      telugu:     "ఉద్ధరేదాత్మనాత్మానం నాత్మానమవసాదయేత్।\nఆత్మైవ హ్యాత్మనో బంధురాత్మైవ రిపురాత్మనః॥",
      iast:       "Uddhared ātmanātmānaṃ nātmānam avasādayet,\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ.",
      meaning_en: "Lift yourself by yourself; do not let yourself down. The self alone is its own friend, and the self alone is its own enemy.",
      meaning_te: "నిన్ను నీవే ఉద్ధరించుకో; నిన్ను నీవే అధోగతికి తీసుకుపోకు. ఆత్మయే తనకు మిత్రుడు, ఆత్మయే తనకు శత్రువు.",
      meaning_sa: "आत्मना एव स्वयं उन्नतिं कुर्यात्, स्वयमेव अधोगतिं न करोतु। आत्मा एव बन्धुः, आत्मा एव शत्रुः — मनोवृत्त्यनुसारम्।",
      source:     "Bhagavad Gītā 6.5",
    },
    {
      devanagari: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
      telugu:     "యద్యదాచరతి శ్రేష్ఠస్తత్తదేవేతరో జనః।\nస యత్ప్రమాణం కురుతే లోకస్తదనువర్తతే॥",
      iast:       "Yad yad ācarati śreṣṭhas tat tad evetaro janaḥ,\nsa yat pramāṇaṃ kurute lokas tad anuvartate.",
      meaning_en: "Whatever a great person does, others follow. Whatever standard they set, the world adopts.",
      meaning_te: "శ్రేష్ఠుడు ఏమి ఆచరిస్తాడో, ఇతరులు అదే అనుసరిస్తారు. అతను ఏ ప్రమాణం నెలకొల్పినా, లోకం దాన్నే పాటిస్తుంది.",
      meaning_sa: "श्रेष्ठः यथा आचरति, अन्ये जनाः तमनुसरन्ति। सः यत् प्रमाणं स्थापयति, लोकः तदनुसारं वर्तते। अतः नेतृत्वे आचरणं प्रधानम्।",
      source:     "Bhagavad Gītā 3.21",
    },
    {
      devanagari: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।",
      telugu:     "ఉత్తిష్ఠత జాగ్రత ప్రాప్య వరాన్నిబోధత।",
      iast:       "Uttiṣṭhata jāgrata prāpya varān nibodhata.",
      meaning_en: "Arise, awake, and learn by approaching the excellent ones — do not stop until the goal is reached.",
      meaning_te: "లేవండి, మేల్కొనండి, శ్రేష్ఠులను సమీపించి జ్ఞానం పొందండి — లక్ష్యం చేరే వరకు ఆగకండి.",
      meaning_sa: "उत्तिष्ठत — प्रमादात् निवर्तत; जाग्रत — सावधानाः भवत; वरान् — श्रेष्ठान् गुरून् — प्राप्य ज्ञानं बोधत।",
      source:     "Kaṭhopaniṣad 1.3.14",
    },
    {
      devanagari: "परोपकारः पुण्याय पापाय परपीडनम्।",
      telugu:     "పరోపకారః పుణ్యాయ పాపాయ పరపీడనమ్।",
      iast:       "Paropakāraḥ puṇyāya pāpāya parapīḍanam.",
      meaning_en: "Service to others leads to merit; causing harm to others leads to sin.",
      meaning_te: "పరోపకారం పుణ్యానికి దారి తీస్తుంది; ఇతరులను పీడించడం పాపానికి దారి తీస్తుంది.",
      meaning_sa: "अन्येषां उपकारः — एव पुण्यस्य मूलम्। अन्येषां पीडनम् — एव पापस्य मूलम्। धर्मस्य सारः एषः।",
      source:     "Bhartṛhari, Nītiśataka",
    },
    {
      devanagari: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।",
      telugu:     "ఈశావాస్యమిదం సర్వం యత్కించ జగత్యాం జగత్।",
      iast:       "Īśāvāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat.",
      meaning_en: "All this — whatever exists in this ever-changing universe — is pervaded by the Lord.",
      meaning_te: "ఈ చరాచర జగత్తులో ఉన్నదంతా ఈశ్వరుడే నిండి ఉన్నాడు.",
      meaning_sa: "अस्मिन् चराचरे जगति यत् किञ्चित् विद्यते, तत् सर्वं परमेश्वरेण व्याप्तम्। किञ्चिदपि ईश्वरविहीनं नास्ति।",
      source:     "Īśāvāsyopaniṣad 1",
    },
    {
      devanagari: "यस्यामतं तस्य मतं मतं यस्य न वेद सः।",
      telugu:     "యస్యామతం తస్య మతం మతం యస్య న వేద సః।",
      iast:       "Yasyāmataṃ tasya mataṃ mataṃ yasya na veda saḥ.",
      meaning_en: "He who thinks he does not know Brahman — he truly knows. He who thinks he knows — does not know.",
      meaning_te: "'నాకు తెలియదు' అని అనుకునేవాడికే బ్రహ్మజ్ఞానం ఉంది; 'నాకు తెలుసు' అని అనుకునేవాడికి తెలియదు.",
      meaning_sa: "यः विनम्रतया मन्यते 'मया ब्रह्म न ज्ञातम्' — तस्य ज्ञानम् अस्ति। यः अभिमानेन मन्यते 'मया ज्ञातम्' — सः वस्तुतः न जानाति।",
      source:     "Kenopaniṣad 2.3",
    },
    {
      devanagari: "पुस्तकस्था तु या विद्या परहस्तगतं धनम्।\nकार्यकाले समुत्पन्ने न सा विद्या न तद्धनम्॥",
      telugu:     "పుస్తకస్థా తు యా విద్యా పరహస్తగతం ధనమ్।\nకార్యకాలే సముత్పన్నే న సా విద్యా న తద్ధనమ్॥",
      iast:       "Pustakasthā tu yā vidyā parahastagatam dhanam,\nkāryakāle samutpanne na sā vidyā na tad dhanam.",
      meaning_en: "Knowledge confined to books, and wealth in another's hands — when the moment of need arrives, neither is of any use.",
      meaning_te: "పుస్తకంలో మాత్రమే నిక్షిప్తమైన విద్య, ఇతరుల చేతిలో ఉన్న సంపద — అవసరమైన సమయంలో రెండూ పనికి రావు.",
      meaning_sa: "या विद्या पुस्तके मात्रे सीमिता, यत् धनं परस्य हस्ते — कार्यकाले एकापि नोपयुज्यते। विद्या स्वहृदयस्था भवेत्।",
      source:     "Cāṇakya Nīti",
    },
    {
      devanagari: "नास्ति सत्यात् परो धर्मः।",
      telugu:     "నాస్తి సత్యాత్ పరో ధర్మః।",
      iast:       "Nāsti satyāt paro dharmaḥ.",
      meaning_en: "There is no dharma higher than truth.",
      meaning_te: "సత్యం కంటే గొప్ప ధర్మం మరొకటి లేదు.",
      meaning_sa: "सर्वेषु धर्मेषु सत्यमेव उत्कृष्टतमम्। सत्याचरणम् एव परमो धर्मः।",
      source:     "Mahābhārata, Vana Parva 207.80",
    },
    {
      devanagari: "सत्यं ब्रूयात् प्रियं ब्रूयान्न ब्रूयात् सत्यमप्रियम्।\nप्रियं च नानृतं ब्रूयादेष धर्मः सनातनः॥",
      telugu:     "సత్యం బ్రూయాత్ ప్రియం బ్రూయాన్న బ్రూయాత్ సత్యమప్రియమ్।\nప్రియం చ నానృతం బ్రూయాదేష ధర్మః సనాతనః॥",
      iast:       "Satyaṃ brūyāt priyaṃ brūyān na brūyāt satyam apriyam,\npriyaṃ ca nānṛtaṃ brūyād eṣa dharmaḥ sanātanaḥ.",
      meaning_en: "Speak truth; speak what is pleasing; do not speak unpleasant truths harshly; do not speak pleasant falsehoods — this is the eternal dharma.",
      meaning_te: "సత్యం చెప్పు; ప్రియంగా చెప్పు; అప్రియమైన సత్యం చెప్పకు; ప్రియమైన అసత్యం చెప్పకు — ఇదే సనాతన ధర్మం.",
      meaning_sa: "सत्यं वद, किन्तु प्रियरूपेण। अप्रियं सत्यम् उग्रतया मा वद। प्रियं असत्यम् अपि मा वद — एषः सनातनधर्मः।",
      source:     "Manusmṛti 4.138",
    },
    {
      devanagari: "विद्वत्त्वं च नृपत्वं च नैव तुल्यं कदाचन।\nस्वदेशे पूज्यते राजा विद्वान् सर्वत्र पूज्यते॥",
      telugu:     "విద్వత్త్వం చ నృపత్వం చ నైవ తుల్యం కదాచన।\nస్వదేశే పూజ్యతే రాజా విద్వాన్ సర్వత్ర పూజ్యతే॥",
      iast:       "Vidvattvaṃ ca nṛpatvaṃ ca naiva tulyaṃ kadācana,\nsvadeśe pūjyate rājā vidvān sarvatra pūjyate.",
      meaning_en: "Scholarship and kingship are never equal — a king is honoured only in his own land, but a scholar is honoured everywhere.",
      meaning_te: "విద్వత్తు మరియు రాజత్వం ఎన్నటికీ సమానం కాదు — రాజు తన దేశంలోనే గౌరవింపబడతాడు; విద్వాంసుడు సర్వత్ర గౌరవింపబడతాడు.",
      meaning_sa: "राजा स्वराज्ये एव पूजां लभते, विद्वान् तु सर्वत्र। अतः राजत्वात् विद्या श्रेष्ठतरी।",
      source:     "Subhāṣitaratnabhāṇḍāgāra",
    },
    {
      devanagari: "संपत्सु महतां चित्तं भवत्युत्पलकोमलम्।\nआपत्सु च महाशैलशिलासंघातकर्कशम्॥",
      telugu:     "సంపత్సు మహతాం చిత్తం భవత్యుత్పలకోమలమ్।\nఆపత్సు చ మహాశైలశిలాసంఘాతకర్కశమ్॥",
      iast:       "Sampatsu mahatāṃ cittaṃ bhavaty utpalakomalam,\nāpatsu ca mahāśailaśilāsaṃghātakarkaśam.",
      meaning_en: "In prosperity, the hearts of the great are as tender as a lotus; in adversity, as firm as the rock of a great mountain.",
      meaning_te: "సంపదలో మహాత్ముల హృదయం కమలంలా మెత్తగా ఉంటుంది; ఆపదలో మహాపర్వత శిలలా దృఢంగా ఉంటుంది.",
      meaning_sa: "महापुरुषाणां चित्तं सौभाग्यकाले कुसुमवत् कोमलम्, विपत्काले च अचलशिलावत् दृढम् — एषः तेषां स्वभावः।",
      source:     "Bhartṛhari, Nītiśataka",
    },
    {
      devanagari: "अनागतविधाता च प्रत्युत्पन्नमतिस्तथा।\nद्वावेतौ सुखमेधेते यद्भविष्यो विनश्यति॥",
      telugu:     "అనాగతవిధాతా చ ప్రత్యుత్పన్నమతిస్తథా।\nద్వావేతౌ సుఖమేధేతే యద్భవిష్యో వినశ్యతి॥",
      iast:       "Anāgatavidhātā ca pratyutpannamatistathā,\ndvāv etau sukham edhete yadbhaviṣyo vinaśyati.",
      meaning_en: "Two kinds of people flourish — those who plan ahead and those who think on their feet. The one who says 'whatever will be, will be' perishes.",
      meaning_te: "భవిష్యత్తు కోసం ప్రణాళిక వేసేవాడు, తక్షణం చురుకుగా ఆలోచించేవాడు — ఈ ఇద్దరూ సుఖపడతారు. 'ఏమి జరగాలో జరుగుతుంది' అని అనేవాడు నాశనమవుతాడు.",
      meaning_sa: "भविष्यं विचिन्त्य कार्यं कुर्वन् तथा तत्काले चतुरः — एतौ द्वौ सुखं प्राप्नुतः। 'यद्भविष्यति' इत्युदासीनः विनश्यति।",
      source:     "Pañcatantra",
    },
    {
      devanagari: "पापान्निवारयति योजयते हिताय\nगुह्यं निगूहति गुणान् प्रकटीकरोति।\nआपद्गतं च न जहाति ददाति काले\nसन्मित्रलक्षणमिदं प्रवदन्ति सन्तः॥",
      telugu:     "పాపాన్నివారయతి యోజయతే హితాయ\nగుహ్యం నిగూహతి గుణాన్ ప్రకటీకరోతి।\nఆపద్గతం చ న జహాతి దదాతి కాలే\nసన్మిత్రలక్షణమిదం ప్రవదంతి సంతః॥",
      iast:       "Pāpān nivārayati yojayate hitāya guhyaṃ nigūhati guṇān prakaṭīkaroti,\nāpadgataṃ ca na jahāti dadāti kāle sanmitralakṣaṇam idaṃ pravadanti santaḥ.",
      meaning_en: "Restrains one from sin, leads to what is beneficial, guards secrets, brings out one's virtues, does not abandon in adversity, and gives at the right time — the wise declare these to be the marks of a true friend.",
      meaning_te: "పాపం నుండి నిరోధిస్తాడు, మంచివైపు నడిపిస్తాడు, రహస్యం కాపాడతాడు, గుణాలు వెల్లడిస్తాడు, ఆపదలో వదలడు, సమయానికి సహాయం చేస్తాడు — ఇవే నిజమైన మిత్రుని లక్షణాలు అని జ్ఞానులు చెప్తారు.",
      meaning_sa: "यः मित्रं पापात् निवारयति, हिते नियोजयति, रहस्यं रक्षति, गुणान् प्रकाशयति, आपदि न परित्यजति — सः एव सन्मित्रम्।",
      source:     "Subhāṣitaratnabhāṇḍāgāra",
    },
    {
      devanagari: "गते शोको न कर्तव्यो भविष्यं नैव चिन्तयेत्।\nवर्तमानेन कालेन वर्तयन्ति विचक्षणाः॥",
      telugu:     "గతే శోకో న కర్తవ్యో భవిష్యం నైవ చింతయేత్।\nవర్తమానేన కాలేన వర్తయంతి విచక్షణాః॥",
      iast:       "Gate śoko na kartavyo bhaviṣyaṃ naiva cintayet,\nvartamānena kālena vartayanti vicakṣaṇāḥ.",
      meaning_en: "Do not grieve over the past; do not worry about the future — the wise live fully in the present.",
      meaning_te: "గడచిన దానికి దుఃఖపడకు; భవిష్యత్తు గురించి చింతించకు — వివేకులు వర్తమానకాలంలో జీవిస్తారు.",
      meaning_sa: "गतकालः परिवर्तितुं न शक्यते, भविष्यत् अनिश्चितम् — अतः विचक्षणाः वर्तमाने एव पूर्णतया जीवन्ति।",
      source:     "Subhāṣitaratnabhāṇḍāgāra",
    },
    {
      devanagari: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः।",
      telugu:     "మన ఏవ మనుష్యాణాం కారణం బంధమోక్షయోః।",
      iast:       "Mana eva manuṣyāṇāṃ kāraṇaṃ bandhamokṣayoḥ.",
      meaning_en: "The mind alone is the cause of both bondage and liberation for human beings.",
      meaning_te: "మనసే మనుష్యులకు బంధానికీ మోక్షానికీ మూల కారణం.",
      meaning_sa: "मनः शुद्धं चेत् मोक्षः, मनः अशुद्धं चेत् बन्धः। अतः मनसः निग्रहः एव साधनानां सारः।",
      source:     "Amṛtabindu Upaniṣad 2",
    },
    {
      devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः।\nगुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः॥",
      telugu:     "గురుర్బ్రహ్మా గురుర్విష్ణుర్గురుర్దేవో మహేశ్వరః।\nగురుః సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీగురవే నమః॥",
      iast:       "Gurur brahmā gurur viṣṇur gurur devo maheśvaraḥ,\ngururḥ sākṣāt parabrahmā tasmai śrī gurave namaḥ.",
      meaning_en: "The guru is Brahmā, the guru is Viṣṇu, the guru is Maheśvara — the guru is verily the supreme Brahman itself; salutations to that revered teacher.",
      meaning_te: "గురువే బ్రహ్మ, గురువే విష్ణువు, గురువే మహేశ్వరుడు — గురువే సాక్షాత్ పరబ్రహ్మ; ఆ శ్రీగురువుకు నమస్కారం.",
      meaning_sa: "गुरुः सृष्टिकर्ता, स्थितिकर्ता, संहारकर्ता च — त्रिदेवस्वरूपः। सः साक्षात् परब्रह्मस्वरूपः। तादृशाय गुरवे नमस्कारः।",
      source:     "Guru Stotram (traditional)",
    },
    {
      devanagari: "न कश्चित् कस्यचिन्मित्रं न कश्चित् कस्यचिद्रिपुः।\nव्यवहारेण जायन्ते मित्राणि रिपवस्तथा॥",
      telugu:     "న కశ్చిత్ కస్యచిన్మిత్రం న కశ్చిత్ కస్యచిద్రిపుః।\nవ్యవహారేణ జాయంతే మిత్రాణి రిపవస్తథా॥",
      iast:       "Na kaścit kasyacin mitraṃ na kaścit kasyacid ripuḥ,\nvyavahāreṇa jāyante mitrāṇi ripavaś tathā.",
      meaning_en: "No one is inherently anyone's friend, and no one is inherently anyone's enemy — it is through conduct that friendships and enmities arise.",
      meaning_te: "పుట్టుకతో ఎవరికీ మిత్రుడు లేడు, శత్రువు లేడు — వ్యవహారం వల్లే మైత్రీ శత్రుత్వాలు ఏర్పడతాయి.",
      meaning_sa: "जन्मतः न कोऽपि मित्रम्, न कोऽपि शत्रुः। परस्परव्यवहारेण, आचरणेन च मैत्री शत्रुता च जन्यते।",
      source:     "Mahābhārata, Udyoga Parva",
    },
    {
      devanagari: "मातृदेवो भव। पितृदेवो भव।\nआचार्यदेवो भव। अतिथिदेवो भव॥",
      telugu:     "మాతృదేవో భవ। పితృదేవో భవ।\nఆచార్యదేవో భవ। అతిథిదేవో భవ॥",
      iast:       "Mātṛdevo bhava. Pitṛdevo bhava.\nĀcāryadevo bhava. Atithidevo bhava.",
      meaning_en: "Regard your mother as god. Regard your father as god. Regard your teacher as god. Regard your guest as god.",
      meaning_te: "తల్లిని దేవుడిగా గౌరవించు. తండ్రిని దేవుడిగా గౌరవించు. గురువును దేవుడిగా గౌరవించు. అతిథిని దేవుడిగా గౌరవించు.",
      meaning_sa: "माता, पिता, आचार्यः, अतिथिः च — एते सर्वे देवतुल्याः। एतेषां सेवा एव प्रत्यक्षदेवतापूजनम्।",
      source:     "Taittirīya Upaniṣad 1.11.2",
    },
    {
      devanagari: "दुर्लभं त्रयमेवैतत् देवानुग्रहकारणम्।\nमनुष्यत्वं मुमुक्षुत्वं महापुरुषसंश्रयः॥",
      telugu:     "దుర్లభం త్రయమేవైతత్ దేవానుగ్రహకారణమ్।\nమనుష్యత్వం ముముక్షుత్వం మహాపురుషసంశ్రయః॥",
      iast:       "Durlabhaṃ trayam evai tat devānugrahakāraṇam,\nmanuṣyatvaṃ mumukṣutvaṃ mahāpuruṣasaṃśrayaḥ.",
      meaning_en: "Three things are rare and come only by divine grace — human birth, the desire for liberation, and the shelter of a great teacher.",
      meaning_te: "ఇవి మూడూ దైవానుగ్రహంతోనే లభిస్తాయి — మానవ జన్మ, మోక్షేచ్ఛ, మహాపురుష సాంగత్యం.",
      meaning_sa: "मनुष्यजन्म, मोक्षेच्छा, महात्मनः सङ्गः — एतत् त्रितयं दुर्लभम्, ईश्वरकृपया एव लभ्यते।",
      source:     "Vivekacūḍāmaṇi 3 (Ādi Śaṅkarācārya)",
    },
    {
      devanagari: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      telugu:     "సర్వధర్మాన్పరిత్యజ్య మామేకం శరణం వ్రజ।\nఅహం త్వాం సర్వపాపేభ్యో మోక్షయిష్యామి మా శుచః॥",
      iast:       "Sarvadharmān parityajya mām ekaṃ śaraṇaṃ vraja,\nahaṃ tvāṃ sarvapāpebhyo mokṣayiṣyāmi mā śucaḥ.",
      meaning_en: "Relinquishing all dharmas, take refuge in me alone — I will liberate you from all sins; do not grieve.",
      meaning_te: "సర్వ ధర్మాలను వదలి నన్నే శరణు పొందు — నేను నిన్ను సర్వపాపాల నుండి విముక్తి చేస్తాను; దుఃఖపడకు.",
      meaning_sa: "सर्वान् धर्मान् परित्यज्य केवलं मां शरण्यं गच्छ। अहं त्वाम् सर्वपापेभ्यः मोक्षयिष्यामि। शोकः मा भवतु।",
      source:     "Bhagavad Gītā 18.66",
    },
    {
      devanagari: "आ नो भद्राः क्रतवो यन्तु विश्वतः।",
      telugu:     "ఆ నో భద్రాః క్రతవో యంతు విశ్వతః।",
      iast:       "Ā no bhadrāḥ kratavo yantu viśvataḥ.",
      meaning_en: "Let noble thoughts come to us from every direction.",
      meaning_te: "అన్ని దిక్కుల నుండి మాకు శుభవిచారాలు వచ్చుగాక.",
      meaning_sa: "सर्वेभ्यः दिग्भ्यः, सर्वेभ्यः जनेभ्यः, सर्वेभ्यः कालेभ्यः च शुभाः विचाराः अस्मान् प्रति आयान्तु।",
      source:     "Ṛgveda 1.89.1",
    },
    {
      devanagari: "कोऽयं कालः? क्व च कर्तव्यम्?\nकः प्रियः? को विरोधी च?\nक एष देशः? किं च बलम्? इति\nशक्तः संविचार्य कुर्वीत॥",
      telugu:     "కోఽయం కాలః? క్వ చ కర్తవ్యమ్?\nకః ప్రియః? కో విరోధీ చ?\nక ఏష దేశః? కిం చ బలమ్? ఇతి\nశక్తః సంవిచార్య కుర్వీత॥",
      iast:       "Ko'yaṃ kālaḥ? kva ca kartavyam? kaḥ priyaḥ? ko virodhī ca?\nka eṣa deśaḥ? kiṃ ca balam? iti śaktaḥ saṃvicārya kurvīta.",
      meaning_en: "What is the right time? What is to be done? Who is an ally? Who is an adversary? What is the situation? What are one's resources? — the wise person considers all these before acting.",
      meaning_te: "ఏ సమయం? ఏమి చేయాలి? మిత్రుడు ఎవరు? విరోధి ఎవరు? స్థలం ఎలా ఉంది? బలం ఎంత? — వివేకి ఇవన్నీ ఆలోచించి తర్వాత కార్యం చేస్తాడు.",
      meaning_sa: "कालः, कर्तव्यम्, मित्रम्, शत्रुः, देशः, स्वबलं च — एतत् षट् विचिन्त्य कार्यं कुर्यात्। अविचारितं कार्यं विफलं भवति।",
      source:     "Cāṇakya Nīti",
    },
    {
      devanagari: "अजरामरवत् प्राज्ञो विद्यामर्थं च साधयेत्।\nगृहीत इव केशेषु मृत्युना धर्ममाचरेत्॥",
      telugu:     "అజరామరవత్ ప్రాజ్ఞో విద్యామర్థం చ సాధయేత్।\nగృహీత ఇవ కేశేషు మృత్యునా ధర్మమాచరేత్॥",
      iast:       "Ajarāmaravat prājño vidyām arthaṃ ca sādhayet,\ngṛhīta iva keśeṣu mṛtyunā dharmam ācaret.",
      meaning_en: "The wise should pursue knowledge and wealth as if they were immortal; but practise dharma as if death has them by the hair.",
      meaning_te: "జ్ఞాని విద్యను సంపదను అమరుడిలా సాధించాలి; కానీ ధర్మాన్ని మాత్రం మృత్యువు తన వెంట్రుకలు పట్టుకున్నట్లుగా ఆచరించాలి.",
      meaning_sa: "विद्यां धनं च अजरामरवत् उत्साहेन साधयेत्। धर्मं तु मृत्युः अत्र एव तिष्ठतीति मत्वा तत्क्षणे एव आचरेत्।",
      source:     "Subhāṣitaratnabhāṇḍāgāra",
    },
    {
      devanagari: "क्षणे क्षणे यन्नवतामुपैति\nतदेव रूपं रमणीयतायाः।",
      telugu:     "క్షణే క్షణే యన్నవతాముపైతి\nతదేవ రూపం రమణీయతాయాః।",
      iast:       "Kṣaṇe kṣaṇe yan navatām upaiti\ntad eva rūpaṃ ramaṇīyatāyāḥ.",
      meaning_en: "That which renews itself moment by moment — that alone is the true nature of beauty.",
      meaning_te: "క్షణక్షణం కొత్తదనాన్ని పొందేదే సౌందర్యానికి నిజమైన రూపం.",
      meaning_sa: "यत् प्रतिक्षणं नूतनत्वं प्राप्नोति, तदेव रमणीयम्। स्थिरं जडं च रमणीयत्वं न धारयति।",
      source:     "Abhijñānaśākuntala 1.2 (Kālidāsa)",
    },
  ],

  /* ── SOURCE-TEXT REFERENCES (Glossary Modal) ─────────────────── */
  references: [
    {
      icon: "🕉️",
      title: "Bhagavad Gītā",
      title_sa_script: "श्रीमद्भगवद्गीता",
      period: "~500–200 BCE · 700 verses · 18 chapters",
      tags: ["Itihāsa", "Yoga Śāstra", "Anuṣṭubh metre"],
      author_en: "Vyāsa (embedded in Mahābhārata, Bhīṣma Parva)",
      author_te: "వ్యాసుడు (మహాభారత భీష్మపర్వంలో అంతర్భాగం)",
      author_sa: "व्यासः (महाभारतस्य भीष्मपर्वणि अन्तर्भूतम्)",
      desc_en: "A 700-verse dialogue between Arjuna and Kṛṣṇa on the battlefield of Kurukṣetra. It synthesises karma, jñāna, and bhakti yoga, presenting the path of equanimous action and self-knowledge. Its teachings remain among the most studied in world philosophy.",
      desc_te: "కురుక్షేత్ర రణభూమిలో అర్జున-కృష్ణుల మధ్య జరిగిన ౭౦౦ శ్లోకాల సంవాదం. కర్మ, జ్ఞాన, భక్తియోగాలను సమన్వయించి సమభావ కర్మాచరణం మరియు ఆత్మజ్ఞానం యొక్క మార్గాన్ని బోధిస్తుంది. ప్రపంచ దర్శనంలో అత్యంత అధ్యయనం చేయబడిన రచనలలో ఒకటి.",
      desc_sa: "कुरुक्षेत्ररणाङ्गणे अर्जुन-कृष्णयोः ७०० श्लोकात्मकः संवादः। कर्म-ज्ञान-भक्तियोगान् समन्वय्य समत्वकर्मणः आत्मज्ञानस्य च मार्गं प्रतिपादयति। विश्वदर्शने अतीव बहुलमधीतमिदं शास्त्रम्।",
    },
    {
      icon: "🏹",
      title: "Vālmīki Rāmāyaṇa",
      title_sa_script: "वाल्मीकि रामायणम्",
      period: "~500–200 BCE · 24,000 verses · 7 kāṇḍas",
      tags: ["Itihāsa", "Ādi Kāvya", "Anuṣṭubh metre"],
      author_en: "Maharṣi Vālmīki — Ādi Kavi (the first poet)",
      author_te: "మహర్షి వాల్మీకి — ఆదికవి (ప్రథమ కవి)",
      author_sa: "महर्षिः वाल्मीकिः — आदिकविः",
      desc_en: "The Ādi Kāvya — the first poem in Sanskrit literature. Chronicles the life of Rāma from exile through rescue of Sītā. Beyond its narrative, it is a treatise on dharma, filial duty, and statecraft. The verse <em>jananī janmabhūmiśca svargādapi garīyasī</em> originates here.",
      desc_te: "సంస్కృత సాహిత్యంలో ప్రథమ కావ్యం — ఆదికావ్యం. వనవాసం నుండి సీతాదేవి రక్షణ వరకు రాముని జీవితాన్ని వర్ణిస్తుంది. ధర్మం, పితృభక్తి, రాజనీతిపై శాస్త్రంగా ఉంది. <em>జననీ జన్మభూమిశ్చ స్వర్గాదపి గరీయసీ</em> అనే శ్లోకం ఇక్కడే జన్మించింది.",
      desc_sa: "संस्कृतसाहित्ये प्रथमं काव्यम् — आदिकाव्यम्। वनगमनात् सीतायाः उद्धारपर्यन्तं रामस्य जीवनं वर्णयति। धर्मे पितृभक्तौ राजनीतौ च महच्छास्त्रम्। <em>जननी जन्मभूमिश्च स्वर्गादपि गरीयसी</em> इत्यस्य श्लोकस्य एतदेव जन्मस्थानम्।",
    },
    {
      icon: "⚔️",
      title: "Mahābhārata",
      title_sa_script: "महाभारतम्",
      period: "~400 BCE – 400 CE · ~100,000 verses · 18 parvas",
      tags: ["Itihāsa", "Dharmaśāstra", "Encyclopaedic"],
      author_en: "Vyāsa (Kṛṣṇa Dvaipāyana)",
      author_te: "వ్యాసుడు (కృష్ణ ద్వైపాయనుడు)",
      author_sa: "व्यासः (कृष्णद्वैपायनः)",
      desc_en: "The longest epic ever composed. Narrates the Kurukṣetra War while embedding vast philosophical, legal, and devotional teachings. The Bhagavad Gītā, Vidura Nīti, and <em>dharmo rakṣati rakṣitaḥ</em> are all woven within its fabric.",
      desc_te: "ఇప్పటివరకు రచించిన అతి పొడవైన మహాకావ్యం. కురుక్షేత్ర యుద్ధాన్ని వర్ణిస్తూ తాత్విక, ధార్మిక, భక్తిప్రధాన బోధనలను అంతర్గతంగా కలిగి ఉంది. భగవద్గీత, విదుర నీతి మరియు <em>ధర్మో రక్షతి రక్షితః</em> — ఇవన్నీ దీని అంతర్భాగాలే.",
      desc_sa: "अद्यावधि रचितानां काव्यानां मध्ये दीर्घतमम्। कुरुक्षेत्रयुद्धं वर्णयन् दार्शनिक-धार्मिक-भक्तिपूर्णान् उपदेशान् प्रतिपादयति। भगवद्गीता, विदुरनीतिः, <em>धर्मो रक्षति रक्षितः</em> च — सर्वमेतत् अस्यैव अंशाः।",
    },
    {
      icon: "🦊",
      title: "Hitopadeśa",
      title_sa_script: "हितोपदेशः",
      period: "~800–1200 CE · prose & verse · 4 books",
      tags: ["Nīti Śāstra", "Kathā Sāhitya"],
      author_en: "Nārāyaṇa Paṇḍita",
      author_te: "నారాయణ పండితుడు",
      author_sa: "नारायणपण्डितः",
      desc_en: "Beneficial Advice — a refined collection of animal fables teaching practical wisdom about friendship, war, and peace. Its verses on education (<em>vidyā dadāti vinayam</em>), effort, and conduct are beloved subhāṣitas in everyday Sanskrit discourse.",
      desc_te: "హితమైన ఉపదేశం — మిత్రత్వం, యుద్ధం, శాంతిపై ఆచరణాత్మక జ్ఞానాన్ని బోధించే జంతుకథల సంకలనం. <em>విద్యా దదాతి వినయం</em>, ప్రయత్నం, ప్రవర్తనపై శ్లోకాలు నిత్య సంస్కృత వ్యవహారంలో ప్రియమైన సుభాషితాలు.",
      desc_sa: "हितोपदेशः — मैत्री-युद्ध-शान्तिविषयेषु व्यावहारिकज्ञानप्रदाः पशुकथाः। <em>विद्या ददाति विनयम्</em> इत्यादयः उद्यम-सदाचारविषयकाः श्लोकाः नित्यसंस्कृतव्यवहारे लोकप्रियाः सुभाषितानि।",
    },
    {
      icon: "🐘",
      title: "Pañcatantra",
      title_sa_script: "पञ्चतन्त्रम्",
      period: "~300 BCE – 300 CE · 5 books · prose & verse",
      tags: ["Nīti Śāstra", "Fable literature"],
      author_en: "Viṣṇuśarman (attributed)",
      author_te: "విష్ణుశర్మ (ఆపాదించబడిన రచయిత)",
      author_sa: "विष्णुशर्मन् (आरोपितकर्ता)",
      desc_en: "Five interconnected books of animal fables compiled to educate princes in worldly wisdom. Translated into nearly every world language — one of the most widely translated books after the Bible. The <em>paropakārāya</em> verse on selfless service is a celebrated subhāṣita.",
      desc_te: "రాజకుమారులకు ప్రాపంచిక జ్ఞానం నేర్పడానికి సంకలించిన అయిదు అనుసంధానిత జంతుకథల సంపుటి. బైబిల్ తర్వాత దాదాపు ప్రతి భాషలోకి అనువదించబడిన గ్రంథాలలో ఒకటి. <em>పరోపకారాయ</em> శ్లోకం నిస్వార్థ సేవపై ప్రసిద్ధ సుభాషితం.",
      desc_sa: "राजपुत्राणां व्यावहारिकज्ञानशिक्षणाय संकलिताः पञ्च तन्त्राः पशुकथाः। बाइबिलानन्तरं प्रायः सर्वासु भाषासु अनूदितेषु ग्रन्थेषु एकः। <em>परोपकाराय</em> श्लोकः परहितसेवायाः विषये प्रसिद्धः सुभाषितः।",
    },
    {
      icon: "🏛️",
      title: "Cāṇakya Nīti",
      title_sa_script: "चाणक्यनीतिशास्त्रम्",
      period: "~4th century BCE · aphorisms on statecraft & life",
      tags: ["Nīti Śāstra", "Arthaśāstra"],
      author_en: "Kauṭilya / Viṣṇugupta (Cāṇakya)",
      author_te: "కౌటిల్యుడు / విష్ణుగుప్తుడు (చాణక్యుడు)",
      author_sa: "कौटिल्यः / विष्णुगुप्तः (चाणक्यः)",
      desc_en: "Prime minister of Candragupta Maurya and author of the Arthaśāstra. His maxim <em>nāsti vidyāsamo bandhuḥ</em> (there is no kinsman like knowledge) distils the ancient Indian reverence for education as the supreme wealth, transcending material fortune.",
      desc_te: "చంద్రగుప్త మౌర్యుని ప్రధానమంత్రి మరియు అర్థశాస్త్ర రచయిత. <em>నాస్తి విద్యాసమో బంధుః</em> — విద్యే అత్యుత్తమ సంపద — అనే సూక్తి విద్యపై భారతీయ జ్ఞానపరంపరయొక్క గాఢ గౌరవాన్ని వ్యక్తపరుస్తుంది.",
      desc_sa: "चन्द्रगुप्तमौर्यस्य प्रधानमन्त्री अर्थशास्त्रकर्ता च। <em>नास्ति विद्यासमो बन्धुः</em> — विद्यैव परमं वित्तम् — इति सूक्तिः विद्याविषये भारतीयज्ञानपरम्परायाः गभीरं सम्मानं प्रकटयति।",
    },
    {
      icon: "⚖️",
      title: "Manusmṛti",
      title_sa_script: "मनुस्मृतिः",
      period: "~200 BCE – 200 CE · 2,685 verses · 12 chapters",
      tags: ["Dharmaśāstra", "Smṛti literature"],
      author_en: "Manu (traditional attribution)",
      author_te: "మను (సాంప్రదాయిక ఆపాదన)",
      author_sa: "मनुः (पारम्परिकः)",
      desc_en: "One of the earliest dharmaśāstra texts. Contains profound aphorisms on righteousness — notably <em>dharmo rakṣati rakṣitaḥ</em>, a principle also echoed in the Mahābhārata, affirming that dharma and its protectors sustain each other in reciprocal covenant.",
      desc_te: "ప్రారంభ ధర్మశాస్త్ర గ్రంథాలలో ఒకటి. ధర్మంపై గాఢమైన సూక్తులను కలిగి ఉంది — ముఖ్యంగా <em>ధర్మో రక్షతి రక్షితః</em>, ఇది మహాభారతంలో కూడా ప్రతిధ్వనిస్తుంది. ధర్మం మరియు దాని రక్షకులు పరస్పరం ఒకరికొకరు నిలబెట్టుకుంటారని నిరూపిస్తుంది.",
      desc_sa: "प्राचीनतमेषु धर्मशास्त्रग्रन्थेषु एकः। धर्मविषये गभीराणि सूक्तानि विद्यन्ते — विशेषतः <em>धर्मो रक्षति रक्षितः</em>, यत् महाभारतेऽपि प्रतिध्वनति। धर्मः तस्य रक्षकाश्च परस्परं पोषयन्तीति दर्शयति।",
    },
    {
      icon: "🌀",
      title: "Viṣṇupurāṇa",
      title_sa_script: "विष्णुपुराणम्",
      period: "~1st–4th century CE · 6 aṃśas · ~23,000 verses",
      tags: ["Purāṇa", "Vaiṣṇava"],
      author_en: "Parāśara Maharṣi (traditional attribution)",
      author_te: "పరాశర మహర్షి (సాంప్రదాయిక ఆపాదన)",
      author_sa: "पराशरमहर्षिः (पारम्परिकः)",
      desc_en: "Among the eighteen Mahāpurāṇas, regarded as the most authoritative Vaiṣṇava text. The verse <em>sā vidyā yā vimuktaye</em> — only that which liberates deserves to be called true knowledge — appears in its first section and remains one of the most cited Sanskrit definitions of education.",
      desc_te: "పద్దెనిమిది మహాపురాణాలలో ఒకటి, వైష్ణవ సంప్రదాయంలో అత్యంత ప్రామాణికమైనది. <em>సా విద్యా యా విముక్తయే</em> — విముక్తికి దారితీసేదే నిజమైన విద్య — అనే శ్లోకం మొదటి అంశంలో ఉంది. విద్యకు ఇచ్చిన అత్యంత ఉదహరించబడిన సంస్కృత నిర్వచనాలలో ఒకటి.",
      desc_sa: "अष्टादशमहापुराणेषु एकम्, वैष्णवसम्प्रदाये सर्वाधिकप्रामाणिकम्। <em>सा विद्या या विमुक्तये</em> — यत् विमोक्षाय तदेव विद्या — इति श्लोकः प्रथमांशे विद्यते। विद्यायाः संस्कृते अतिबहुलमुद्धृतानां लक्षणानामेकमिदम्।",
    },
    {
      icon: "🧘",
      title: "Mahopaniṣad",
      title_sa_script: "महोपनिषद्",
      period: "Associated with Sāmaveda · Vedānta tradition",
      tags: ["Upaniṣad", "Vedānta", "Sāmaveda"],
      author_en: "Vedic tradition (Upaniṣadic corpus)",
      author_te: "వేదపరంపర (ఉపనిషత్ సంహిత)",
      author_sa: "वेदपरम्परा (उपनिषत्कोशः)",
      desc_en: "A minor Upaniṣad teaching liberation through non-attachment. The earliest textual source of <em>vasudhaiva kuṭumbakam</em> (the whole world is one family) — a vision of universal kinship that became India's philosophical gift to global civilisation.",
      desc_te: "అనాసక్తి ద్వారా విముక్తిని బోధించే ఒక చిన్న ఉపనిషత్తు. <em>వసుధైవ కుటుంబకం</em> (మొత్తం ప్రపంచమే ఒక కుటుంబం) అనే విశ్వకుటుంబ దర్శనానికి ప్రారంభ ఆధారం — భారతదేశం ప్రపంచ నాగరికతకు అందించిన తాత్విక బహుమతి.",
      desc_sa: "वैराग्येण मुक्तिं प्रतिपादयन् एकः लघूपनिषद्। <em>वसुधैव कुटुम्बकम्</em> — विश्वकुटुम्बदर्शनस्य प्राचीनतमो ग्रन्थः — इति भारतीयसंस्कृतेः विश्वसभ्यतायै दार्शनिकं दानम्।",
    },
  ],

};
