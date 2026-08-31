const SITE_DATA = {

  meta: {
    title: "Adi Sharma | Backend & AI-ML Engineer",
    description: "Portfolio of Adi Sharma — Backend & AI-ML Engineer building scalable systems and intelligent software.",
    favicon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
  },

  nav: [
    { label: "About", href: "about.html", page: "about" },
    { label: "Experience", href: "experience.html", page: "experience" },
    { label: "Projects", href: "projects.html", page: "projects" },
    { label: "Patents", href: "patents.html", page: "patents" },
    { label: "Awards", href: "awards.html", page: "awards" },
    { label: "Gallery", href: "gallery.html", page: "gallery" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],

  hero: {
    greeting: "Hi, I'm",
    name: "Adi Sharma",
    tagline: "I build digital products that scale.",
    roles: ["Backend Engineer", "AI & LLM Engineer", "System Architect"],
    cta: { text: "View My Work", link: "projects.html" },
    ctaSecondary: { text: "Get In Touch", link: "contact.html" },
    headshot: "assets/images/headshot.jpg"
  },

  about: {
    title: "About Me",
    subtitle: "Backend engineer by craft. AI & LLM engineer by curiosity.",
    summary: [
      "I'm a Backend & AI-ML Engineer at Dell Technologies building high-performance distributed systems and LLM-powered intelligent software. I specialize in designing scalable microservices, real-time data pipelines, and AI-driven solutions that serve hundreds of thousands of devices.",
      "From building an LLM assistant on Llama 3.3 70B with 37 typed tools to architecting real-time command systems managing 100K+ endpoints, I thrive at the intersection of backend engineering and applied AI. I have 4 IPR filings at Dell Technologies and have been recognized with multiple innovation and excellence awards."
    ],
    resumeLink: "Adi_Sharma_CV_2026.pdf",
    skills: [
      { category: "Languages", items: ["Python", "JavaScript/TypeScript", "Go", "C#", "SQL", "Bash"], icon: "code" },
      { category: "AI & LLM Engineering", items: ["LLM tool calling", "Prompt engineering", "RAG", "pgvector", "Sentence-BERT", "LangChain", "LangGraph", "OCR", "PII masking"], icon: "brain" },
      { category: "Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "MLflow"], icon: "brain" },
      { category: "Backend & Data", items: ["FastAPI", "Node.js", "Express", "React", "ASP.NET Core", "REST APIs", "OAuth2", "PostgreSQL", "SQLite", "MongoDB", "Redis", "RabbitMQ", "Elasticsearch"], icon: "server" },
      { category: "Engineering Practices", items: ["Git", "GitLab CI/CD", "GitHub Actions", "Docker", "Kubernetes", "Testing", "Observability", "Canary releases", "Linux", "Azure"], icon: "cloud" }
    ],
    leadership: [
      { role: "Google DSC Lead", org: "SMIT-SMU", period: "2022-2023" },
      { role: "General Secretary", org: "CS Student Council, SMIT", period: "2023" },
      { role: "ML Mentor", org: "AI Club, SMIT", period: "2021-2022" },
      { role: "Core Member & Event Organizer", org: "GDG Bangalore", period: "2024-Present" },
      { role: "Head of IT", org: "TEDxSMIT", period: "2022-2023" },
      { role: "Head of IT", org: "IAESTE SMU", period: "2022-2023" },
      { role: "Tech Team Lead", org: "Smart India Hackathon", period: "2022" },
      { role: "NSS Volunteer", org: "SMIT (Sikkim flood relief)", period: "2020-2023" }
    ]
  },

  experience: [
    {
      role: "Software Development Engineer 2",
      company: "Dell Technologies",
      location: "Bengaluru, India",
      period: "Jan 2026 – Present",
      current: true,
      highlights: [
        "Developed the ITAssets Ops Copilot, an LLM assistant on Llama 3.3 70B that lets IT staff query employee, device and incident records in plain English through 37 typed tools, replacing manual lookups across five consoles.",
        "Wrapped deterministic checks around every model decision — JSON schema validation, live database schema verification, permission enforcement at execution, and every write requires user confirmation with audit logging.",
        "Built the employee profile service in Node.js/TypeScript merging 7 upstream sources (Workday, AD, ServiceNow, Intune, SCCM, Graph, org API) in parallel, serving 100K+ employees with a rule engine of 20+ contextual checks.",
        "Designed 4-tier RBAC with Azure AD JWT auth, duplicate/double-approval safeguards, isolated email notifications, and full audit logging on every permission change.",
        "Built a config-driven SQL engine letting partner teams expose new reporting endpoints via database config instead of code, with input sanitization and parameterized queries to prevent SQL injection."
      ],
      tags: ["TypeScript", "Node.js", "PostgreSQL", "pgvector", "LLM", "RAG", "Kubernetes"]
    },
    {
      role: "Software Development Engineer 1",
      company: "Dell Technologies",
      location: "Bengaluru, India",
      period: "Aug 2024 – Dec 2025",
      highlights: [
        "Built the real-time command plane for the Software Removal platform on SignalR and WebSockets with RabbitMQ as a durable second channel, managing 100,000+ Windows devices across 3 global regions at 99.7% success rate.",
        "Paired it with a lightweight .NET agent cutting install size from 350 MB to 30 MB and installation time from 10 min to 30 seconds.",
        "Built the software title normalization engine matching 16,000 vendor titles across 8 GB of inventory using fuzzy matching and TF-IDF at 75% accuracy, raising throughput from 2,400 to 16,000 records/hour.",
        "Architected the FastAPI microservice for Dell Communique turning natural language briefs into structured email templates via an LLM gateway, lifting parse success from ~85 to 98% and cutting TTFT from 4s to 200ms with streaming.",
        "Productionized Go analytics services parallelizing 3 PostgreSQL aggregations from ~25s to 6s, and built a survival model flagging users likely to disengage.",
        "Built an RL scheduler learning device activity patterns to place inventory scans in idle windows, reaching 95% idle execution and lowering CPU impact from 28% to 6%."
      ],
      tags: ["C#", "SignalR", "Go", "Python", "FastAPI", "RabbitMQ", "ML"]
    },
    {
      role: "Software Engineer Intern (Winter)",
      company: "Dell Technologies",
      location: "Bengaluru, India",
      period: "Jan 2024 – May 2024",
      highlights: [
        "Developed a semantic search engine over Elasticsearch using Sentence-BERT embeddings in a hybrid keyword/dense retrieval setup, fine-tuned on 12,000 queries, raising user satisfaction from 58 to 84%.",
        "Built a hybrid recommendation system pairing matrix factorization with content-based filtering over TF-IDF, improving CTR from 23 to 41% with MLflow tracking A/B experiments.",
        "Architected the training request workflow engine in Node.js, GraphQL and PostgreSQL as a state machine, and rebuilt CI/CD pipeline taking build success from 58 to 94% and build time from 45 min to 12 min."
      ],
      tags: ["Elasticsearch", "Sentence-BERT", "GraphQL", "Node.js", "CI/CD"]
    },
    {
      role: "Software Engineer Intern (Summer)",
      company: "Dell Technologies",
      location: "Bengaluru, India",
      period: "May 2023 – Jul 2023",
      highlights: [
        "Engineered the User360 dashboard on FastAPI and React for TMX Data Platform, bringing API latency from 3.2s to 0.4s through query plan analysis, Redis caching at 76% hit rate and connection pooling.",
        "Optimized retrieval over 500,000 records from 45s to 1.8s using table partitioning, cursor-based pagination and materialized views, scaling throughput from 50 to 340 RPS.",
        "Architected the vendor budget ingestion pipeline in Express with Redis and a background worker, acknowledging multi-MB Excel uploads in under 500ms with row-level validation and cascading upserts across 4 relational tables."
      ],
      tags: ["FastAPI", "React", "Redis", "PostgreSQL", "Express"]
    },
    {
      role: "Research Intern",
      company: "BITS Pilani",
      location: "Pilani, India",
      period: "Jun 2022 – Aug 2022",
      highlights: [
        "Developed an AI-based coordination system for a heterogeneous robot fleet of rovers and drones, formulating resource management as a joint forecasting and assignment problem under hard energy constraints.",
        "Designed an LSTM power-load forecasting model over telemetry time series reaching 90%+ accuracy with MAE under 5W.",
        "Implemented the Hungarian algorithm for optimal task assignment with dynamic charging optimization, reaching 92% mission completion and 72% charging port utilization, validated in ROS and Gazebo."
      ],
      tags: ["Python", "TensorFlow", "LSTM", "ROS", "Gazebo"]
    }
  ],

  projects: [
    {
      title: "ITAssets Ops Copilot",
      description: "LLM assistant on Llama 3.3 70B enabling IT staff to query employee, device and incident records in plain English through 37 typed tools. Features deterministic guardrails, RAG over IT policy docs with pgvector, 4-tier RBAC, and config-driven SQL engine.",
      tags: ["TypeScript", "Node.js", "LLM", "RAG", "pgvector"],
      icon: "brain",
      links: {}
    },
    {
      title: "Documentation Q&A Assistant",
      description: "RAG-powered Q&A assistant over 600 pages of product and API documentation. Ingestion pipeline with OCR fallback indexing 4,800 chunks in pgvector. Four-step LangGraph flow (retrieve, draft, verify, answer) with React frontend. Achieved Recall@5 of 0.89 and cut unsupported claims from 14% to 4%.",
      tags: ["Python", "LangChain", "LangGraph", "pgvector", "FastAPI"],
      icon: "search",
      links: {}
    },
    {
      title: "Software Removal Platform",
      description: "Real-time command and control plane on SignalR and WebSockets with RabbitMQ durable delivery, managing 100,000+ Windows devices across 3 global regions at 99.7% success rate. Lightweight .NET agent reduced install size from 350 MB to 30 MB.",
      tags: ["C#", ".NET", "SignalR", "RabbitMQ"],
      icon: "monitor",
      links: {}
    },
    {
      title: "Dell Communique",
      description: "High-throughput communication platform with a FastAPI microservice turning natural language briefs into structured email templates via LLM gateway. Go analytics services parallelized 3 PostgreSQL aggregations from 25s to 6s. Survival model for user disengagement prediction.",
      tags: ["Go", "FastAPI", "PostgreSQL", "ML"],
      icon: "mail",
      links: {}
    },
    {
      title: "DDoS Detection in SDN",
      description: "Intrusion detection system for software-defined networks with real-time feature extraction over OpenFlow statistics deriving 23 flow-level features at 89ms detection latency. Random Forest achieved 98.9% accuracy after grid search over 180 hyperparameter configurations. Throughput scaled from 15 to 560 flows/sec.",
      tags: ["Python", "Scikit-learn", "OpenFlow", "Mininet"],
      icon: "shield",
      links: { github: "https://github.com/iadisharma" }
    },
    {
      title: "Image Captioning System",
      description: "End-to-end captioning pipeline pairing ResNet50/VGG16 vision encoders with LSTM decoders for visually impaired users. Achieved BLEU-1 of 0.61 with ResNet50 + Bi-LSTM. Deployed as Flask app with text-to-speech returning spoken captions in real-time.",
      tags: ["TensorFlow", "ResNet50", "Bi-LSTM", "Flask"],
      icon: "image",
      links: { github: "https://github.com/iadisharma" }
    },
    {
      title: "COVID-19 Learning Platform",
      description: "Full-stack e-learning platform serving 800+ students during the pandemic. Features quiz engine, progress tracking, and teacher dashboards. Built with Flask, MySQL, and Bootstrap.",
      tags: ["Flask", "MySQL", "Bootstrap", "Education"],
      icon: "book",
      links: { github: "https://github.com/iadisharma" }
    },
    {
      title: "Autonomous GPS Drone",
      description: "Autonomous drone system with GPS waypoint navigation and obstacle avoidance. Built on ArduPilot with custom firmware. Won 2nd Position at IETE National Robotics Competition.",
      tags: ["ArduPilot", "C++", "GPS", "Robotics"],
      icon: "drone",
      links: {}
    }
  ],

  patents: [
    {
      title: "On-Device Privacy-Preserving Prompt Refinement Using Cluster-Conditioned Local Agents",
      authority: "Dell Technologies",
      status: "IPR Filed",
      filedBy: "Dell Technologies",
      year: "2026",
      description: "On-device small language model prompt compiler using a typed intermediate representation and a 17-operation edit DSL, with federated learning based on differentially private, noised rule-outcome histograms and two companion filings.",
      keyInnovations: [
        "On-device SLM prompt compiler with typed intermediate representation",
        "17-operation edit DSL for prompt refinement",
        "Federated learning with differentially private histograms",
        "Privacy-preserving architecture — no raw prompts leave the device"
      ]
    },
    {
      title: "PSF-Based Display Pre-Compensation with Integrated Wavefront Sensing and Vision-Aware Biometric Authentication",
      authority: "Dell Technologies",
      status: "IPR Filed",
      filedBy: "Dell Technologies",
      year: "2026",
      description: "Display pre-compensation system integrating point spread function (PSF) modeling, wavefront sensing, and vision-aware biometric authentication.",
      keyInnovations: [
        "Point spread function (PSF) based display correction",
        "Integrated wavefront sensing pipeline",
        "Vision-aware biometric authentication",
        "Adaptive display pre-compensation"
      ]
    },
    {
      title: "Behavioral Graph Query Disambiguation",
      authority: "Dell Technologies",
      status: "IPR Filed",
      filedBy: "Dell Technologies",
      year: "2026",
      description: "Graph-based approach for resolving ambiguity in user queries using behavioral context and interaction signals.",
      keyInnovations: [
        "Graph-based query disambiguation framework",
        "Behavioral context integration for intent resolution",
        "Interaction signal modeling for ambiguity reduction",
        "Context-aware query interpretation"
      ]
    },
    {
      title: "Agentic AI System for Software Removal Governance",
      authority: "Dell Technologies",
      status: "IPR Filed",
      filedBy: "Dell Technologies",
      year: "2025",
      description: "Agentic AI framework for software removal governance combining XGBoost-based risk prediction, K-Means persona classification, and Isolation Forest anomaly detection for automated software lifecycle management across enterprise environments.",
      keyInnovations: [
        "Agentic AI decision engine with autonomous software management",
        "XGBoost-based risk prediction for removal decisions",
        "K-Means persona classification for role-specific governance",
        "Isolation Forest anomaly detection for compliance monitoring",
        "Explainable AI module providing transparent decision audit trails"
      ]
    }
  ],

  awards: [
    { title: "Dell Innovation Award", year: "2025", issuer: "Dell Technologies", description: "For the real-time SignalR agent behind the Software Governance System managing over 100,000 devices.", icon: "trophy" },
    { title: "Dell Extraordinary Award (x2)", year: "2025", issuer: "Dell Technologies", description: "Awarded twice — for the Software Inventory Agent deployed globally across 100,000 devices, reducing unauthorized software titles from 4,100 to 1,800.", icon: "star" },
    { title: "Dell Bravo Award", year: "2026 & 2025", issuer: "Dell Technologies", description: "For the ITAssets Ops Copilot agentic platform, and for ML personalization features delivered on tight timelines for Dell Communique.", icon: "zap" },
    { title: "Dean's List", year: "2023", issuer: "Sikkim Manipal University", description: "Awarded for academic merit during B.Tech in Computer Science and Engineering.", icon: "award" },
    { title: "Birla Education Trust Scholarship", year: "2020", issuer: "Birla Education Trust", description: "Academic excellence scholarship of Rs. 25,000 for outstanding performance.", icon: "award" },
    { title: "Google DSC Lead", year: "2022-2023", issuer: "Google Developers", description: "Selected as 1 of 560 Google Developer Student Club Leads across India. Led Sikkim's sole GDSC, organizing workshops for 500+ students.", icon: "users" },
    { title: "Dell Hack-2-Hire Winner", year: "2022", issuer: "Dell Technologies", description: "Built a computer vision and language generation model converting images into spoken descriptions as assistive technology for visually impaired users.", icon: "award" },
    { title: "IETE Innovation Challenge — 2nd Position", year: "2019", issuer: "IETE", description: "Built an autonomous FPV rover for ranging and surveillance at the Institution of Electronics and Telecommunication Engineers challenge.", icon: "medal" }
  ],

  gallery: {
    title: "Life Beyond Code",
    subtitle: "Moments from hackathons, conferences, and adventures.",
    images: [
      { src: "assets/images/gallery/placeholder-1.jpg", caption: "Add your photo here", alt: "Gallery photo 1" },
      { src: "assets/images/gallery/placeholder-2.jpg", caption: "Add your photo here", alt: "Gallery photo 2" },
      { src: "assets/images/gallery/placeholder-3.jpg", caption: "Add your photo here", alt: "Gallery photo 3" },
      { src: "assets/images/gallery/placeholder-4.jpg", caption: "Add your photo here", alt: "Gallery photo 4" },
      { src: "assets/images/gallery/placeholder-5.jpg", caption: "Add your photo here", alt: "Gallery photo 5" },
      { src: "assets/images/gallery/placeholder-6.jpg", caption: "Add your photo here", alt: "Gallery photo 6" }
    ]
  },

  contact: {
    title: "Let's Connect",
    subtitle: "Have a project idea, research collaboration, or just want to say hello? I'd love to hear from you.",
    formAction: "https://formspree.io/f/YOUR_FORM_ID",
    phone: "+91 6377273712",
    email: "reachadisharma6@gmail.com",
    website: "https://iadisharma.github.io",
    social: {
      linkedin: "https://linkedin.com/in/iadisharma",
      github: "https://github.com/iadisharma",
      website: "https://iadisharma.github.io",
      email: "mailto:reachadisharma6@gmail.com"
    }
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Adi Sharma. Built with purpose.`,
    tagline: "Backend & AI-ML Engineer"
  }
};
