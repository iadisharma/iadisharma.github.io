const SITE_DATA = {

  meta: {
    title: "Adi Sharma | Software Engineer II @ Nike",
    description: "Adi Sharma. Software Engineer II at Nike, working on backend systems, distributed infrastructure and enterprise AI.",
  },

  nav: [
    { label: "About", href: "about.html", page: "about" },
    { label: "Experience", href: "experience.html", page: "experience" },
    { label: "Projects", href: "projects.html", page: "projects" },
    { label: "IPR", href: "patents.html", page: "patents" },
    { label: "Awards", href: "awards.html", page: "awards" },
    { label: "Interviews", href: "interviews.html", page: "interviews" },
    { label: "Gallery", href: "gallery.html", page: "gallery" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],

  hero: {
    greeting: "Hi, I'm",
    name: "Adi Sharma",
    title: {
      current: "Software Engineer II @ Nike",
      past: "Ex-Dell Technologies",
      currentLogo: { src: "assets/images/logos/nike.svg", name: "Nike" },
      pastLogo: { src: "assets/images/logos/dell.svg", name: "Dell Technologies" }
    },
    tagline: "I build high-throughput backend systems and enterprise AI that holds up in production. Order fulfilment across 170+ countries, platforms managing 100,000+ devices.",
    cta: { text: "View My Work", link: "projects.html" },
    ctaSecondary: { text: "Get In Touch", link: "contact.html" },
    // assets/images/adi_sharma.jpg (DevFest 2025), full original height,
    // cropped horizontally only to fit the 4:5 frame. Original kept alongside.
    headshot: "assets/images/adi-sharma-headshot.jpg"
  },

  about: {
    title: "About Me",
    subtitle: "Backend engineer by craft. AI & LLM engineer by curiosity.",
    summary: [
      "I'm a Software Engineer II at Nike, working in the Geographies and Marketplace Experience team at the Nike India Technology Center. I build the high-throughput, low-latency, fault-tolerant Order Management platform that carries global fulfilment from click to doorstep across 170+ countries.",
      "Before Nike I spent two years at Dell Technologies building enterprise backend systems and the AI layers on top of them: an LLM assistant on Llama 3.3 70B with 37 typed tools, a real-time command plane managing 100,000+ Windows devices, and config-driven APIs that let partner teams ship without redeployment.",
      "I hold 4 IPR filings at Dell and have been recognized with multiple innovation and excellence awards. What I care about most is the unglamorous part: correctness under load, graceful failure, and systems that are still understandable a year later."
    ],
    resumeLink: "Adi_Sharma_CV_2026.pdf",
    resumeEnabled: false,   // flip to true to show the Download Résumé button again
    skills: [
      { category: "Languages", items: ["Python", "JavaScript/TypeScript", "Go", "C#", "SQL", "Bash"], icon: "code" },
      { category: "AI & LLM Engineering", items: ["LLM tool calling", "Prompt engineering", "RAG", "pgvector", "Sentence-BERT", "LangChain", "LangGraph", "LLM evaluation", "PII masking"], icon: "brain" },
      { category: "Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "MLflow"], icon: "chart" },
      { category: "Backend & Data", items: ["Node.js", "FastAPI", "Express", "ASP.NET Core", "SignalR", "REST", "GraphQL", "OAuth2", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Elasticsearch"], icon: "server" },
      { category: "Platform & Practices", items: ["Docker", "Kubernetes", "GitLab CI/CD", "GitHub Actions", "Azure", "Observability", "Canary releases", "Testing", "Linux"], icon: "cloud" }
    ],
    leadership: [
      { role: "ITDP Committee Lead", org: "Dell Technologies, Bangalore", period: "2025-2026" },
      { role: "Core Member & Event Organizer", org: "GDG Bangalore", period: "2024-Present" },
      { role: "Google DSC Lead", org: "SMIT-SMU", period: "2022-2023" },
      { role: "General Secretary", org: "CS Student Council, SMIT", period: "2023" },
      { role: "Head of IT", org: "TEDxSMIT", period: "2022-2023" },
      { role: "Head of IT", org: "IAESTE SMU", period: "2022-2023" },
      { role: "ML Mentor", org: "AI Club, SMIT", period: "2021-2022" },
      { role: "Tech Team Lead", org: "Smart India Hackathon", period: "2022" },
      { role: "NSS Volunteer", org: "SMIT (Sikkim flood relief)", period: "2020-2023" }
    ]
  },

  experience: [
    {
      company: "Nike",
      logo: "assets/images/logos/nike.svg",
      location: "Bengaluru, India",
      span: "Oct 2026 - Present",
      current: true,
      roles: [
        {
          title: "Software Engineer II",
          meta: "Full-time · On-site",
          period: "Oct 2026 - Present",
          current: true,
          summary: "Geographies and Marketplace Experience team at the Nike India Technology Center, on a high-throughput, low-latency and fault-tolerant Order Management platform.",
          highlights: [
            "Engineering systems that support global order fulfilment across channels, carrying a seamless experience from click to doorstep in 170+ countries.",
            "Working on the order management domain, where throughput, latency and fault tolerance are the product rather than an afterthought.",
            "Designing service boundaries and low-level components for a platform that has to degrade gracefully rather than fail loudly."
          ],
          tags: ["Microservices", "Distributed Systems", "Low-Level Design", "Order Management"]
        }
      ]
    },
    {
      company: "Dell Technologies",
      logo: "assets/images/logos/dell.svg",
      location: "Bengaluru, India",
      span: "Aug 2024 - Sep 2026 · 2 yrs 2 mos",
      roles: [
        {
          title: "Software Engineer II",
          meta: "Full-time",
          period: "Feb 2026 - Sep 2026",
          summary: "Backend systems for enterprise applications and AI systems that turn natural language into reliable enterprise agentic workflows.",
          highlights: [
            "Built the IT Assets RBAC AI Co-Pilot, a RAG-enabled assistant on Llama 3.3 70B letting IT staff query employee, device and incident records in plain English through 37 permission-checked tools, replacing manual lookups across five consoles.",
            "Wrapped deterministic checks around every model decision: JSON schema validation, live database schema verification, permission enforcement at execution, confirmation-gated writes and automated LLM evaluation.",
            "Built the UserInfo service in Node.js/TypeScript merging 7 upstream sources (Workday, AD, ServiceNow, Intune, SCCM, Graph, org API) in parallel for 100K+ employees, with PostgreSQL-backed RBAC, audit trails and resilience to upstream failures.",
            "Developed configuration-driven APIs for the GOSS B2B order management platform, enabling endpoint changes through database config instead of redeployment, with parameterized queries guarding against injection.",
            "Shipped Dell TrackIT APIs for asset management, device remediation, ServiceNow integration and bulk data operations.",
            "Extended the C#/.NET Windows agent with durable job queues, retry handling, privilege-aware execution and maintenance scheduling that respects system health and user activity."
          ],
          tags: ["TypeScript", "Node.js", "PostgreSQL", "RAG", "LLM Evaluation", ".NET"]
        },
        {
          title: "IT Development Program Committee Lead, Bangalore",
          meta: "Leadership",
          period: "Sep 2025 - Aug 2026",
          summary: "Led Dell's Bangalore ITDP Committee, supporting new graduate hires through their transition into corporate engineering.",
          highlights: [
            "Organized technical workshops, networking sessions and team-building events across the Bangalore cohort.",
            "Fostered professional growth, collaboration and a thriving early-career engineering community."
          ],
          tags: ["Leadership", "Mentorship", "Community"]
        },
        {
          title: "Software Engineer I",
          meta: "Full-time · On-site",
          period: "Aug 2024 - Jan 2026",
          summary: "Enterprise communication services and endpoint-management systems, combining backend engineering with practical GenAI integration.",
          highlights: [
            "Built the real-time command plane for the Software Removal Platform on SignalR and WebSockets with RabbitMQ as a durable second channel, managing 100,000+ Windows devices across 3 global regions at a 99.7% success rate.",
            "Delivered the companion .NET Windows service agent, cutting installer size from 350 MB to 30 MB and installation time from 10 minutes to 30 seconds.",
            "Architected a FastAPI microservice for Dell Communique AI turning natural-language briefs into structured email templates, subject lines and survey questions, lifting parse success from ~85% to 98% and cutting time-to-first-token from 4s to 200ms with streaming.",
            "Developed Go microservices for Dell Communique covering campaign analytics, parallel reporting, employee search, secure file handling and Microsoft 365 integration, parallelizing 3 PostgreSQL aggregations from ~25s to 6s.",
            "Built the software title normalization engine matching 16,000 vendor titles across 8 GB of inventory using fuzzy matching and TF-IDF, raising throughput from 2,400 to 16,000 records/hour.",
            "Built an RL scheduler learning device activity patterns to place inventory scans in idle windows, reaching 95% idle execution and lowering CPU impact from 28% to 6%."
          ],
          tags: ["Go", "Python", "C#", "SignalR", "RabbitMQ", "FastAPI", "Kubernetes"]
        },
        {
          title: "Software Engineer Intern (Winter)",
          meta: "Internship",
          period: "Jan 2024 - May 2024",
          summary: "Search relevance, recommendations and developer tooling for internal enablement platforms.",
          highlights: [
            "Developed a semantic search engine over Elasticsearch using Sentence-BERT embeddings in a hybrid keyword/dense retrieval setup, fine-tuned on 12,000 queries, raising user satisfaction from 58% to 84%.",
            "Built a hybrid recommendation system pairing matrix factorization with content-based filtering over TF-IDF, improving CTR from 23% to 41%, with MLflow tracking A/B experiments.",
            "Architected the training request workflow engine in Node.js, GraphQL and PostgreSQL as a state machine, and rebuilt the CI/CD pipeline taking build success from 58% to 94% and build time from 45 min to 12 min."
          ],
          tags: ["Elasticsearch", "Sentence-BERT", "GraphQL", "Node.js", "CI/CD"]
        },
        {
          title: "Software Engineer Intern (Summer)",
          meta: "Internship",
          period: "May 2023 - Jul 2023",
          summary: "Data platform dashboards and ingestion pipelines for the TMX Data Platform.",
          highlights: [
            "Engineered the User360 dashboard on FastAPI and React, bringing API latency from 3.2s to 0.4s through query plan analysis, Redis caching at a 76% hit rate and connection pooling.",
            "Optimized retrieval over 500,000 records from 45s to 1.8s using table partitioning, cursor-based pagination and materialized views, scaling throughput from 50 to 340 RPS.",
            "Architected the vendor budget ingestion pipeline in Express with Redis and a background worker, acknowledging multi-MB Excel uploads in under 500ms with row-level validation and cascading upserts across 4 relational tables."
          ],
          tags: ["FastAPI", "React", "Redis", "PostgreSQL", "Express"]
        }
      ]
    },
    {
      company: "BITS Pilani",
      logo: "assets/images/logos/bits-pilani.png",
      location: "Pilani, India",
      span: "Jun 2022 - Aug 2022",
      roles: [
        {
          title: "Research Intern",
          meta: "Research",
          period: "Jun 2022 - Aug 2022",
          summary: "AI-based coordination for a heterogeneous robot fleet under hard energy constraints.",
          highlights: [
            "Developed a coordination system for rovers and drones, formulating resource management as a joint forecasting and assignment problem.",
            "Designed an LSTM power-load forecasting model over telemetry time series reaching 90%+ accuracy with MAE under 5W.",
            "Implemented the Hungarian algorithm for optimal task assignment with dynamic charging optimization, reaching 92% mission completion and 72% charging port utilization, validated in ROS and Gazebo."
          ],
          tags: ["Python", "TensorFlow", "LSTM", "ROS", "Gazebo"]
        }
      ]
    }
  ],

  projects: [
    {
      title: "MyGradTrack",
      org: "Personal · Live",
      description: "Agentic platform that finds graduate programs matched to an applicant's profile. A multi-agent ingestion pipeline parses program pages, PDFs and spreadsheets into a normalized schema, then a matching agent ranks the catalogue against each applicant's degree focus, target intake, countries and subjects. Eligibility and deadline agents extract requirements and surface conflicting or missing dates; a drafting agent prepares PI outreach for the user to send. Agents write only to the shared catalogue, so private shortlists, corrections and notes are never touched.",
      tags: ["Python", "FastAPI", "LLM Agents", "PostgreSQL", "Vite"],
      icon: "grad",
      links: { live: "https://mygradtrack.netlify.app/" }
    },
    {
      title: "IT Assets RBAC AI Co-Pilot",
      org: "Dell Technologies",
      description: "RAG-enabled assistant on Llama 3.3 70B letting IT staff query employee, device and incident records in plain English through 37 permission-checked tools. Deterministic guardrails on every model decision, confirmation-gated writes and automated LLM evaluation.",
      tags: ["TypeScript", "Node.js", "LLM", "RAG", "pgvector"],
      icon: "brain",
      links: {}
    },
    {
      title: "Software Removal Platform",
      org: "Dell Technologies",
      description: "Real-time command and control plane on SignalR and WebSockets with RabbitMQ durable delivery, managing 100,000+ Windows devices across 3 global regions at a 99.7% success rate. Companion .NET agent cut install size from 350 MB to 30 MB.",
      tags: ["C#", ".NET", "SignalR", "RabbitMQ"],
      icon: "monitor",
      links: {}
    },
    {
      title: "Dell Communique & Communique AI",
      org: "Dell Technologies",
      description: "Go microservices for campaign analytics, parallel reporting and Microsoft 365 integration, paired with a FastAPI service turning natural-language briefs into structured email templates. Parse success ~85% to 98%, TTFT 4s to 200ms with streaming.",
      tags: ["Go", "Python", "FastAPI", "PostgreSQL"],
      icon: "mail",
      links: {}
    },
    {
      title: "Documentation Q&A Assistant",
      org: "Personal",
      description: "RAG assistant over 600 pages of product and API documentation. Ingestion pipeline with OCR fallback indexing 4,800 chunks in pgvector, four-step LangGraph flow (retrieve, draft, verify, answer). Recall@5 of 0.89, unsupported claims down from 14% to 4%.",
      tags: ["Python", "LangChain", "LangGraph", "pgvector"],
      icon: "search",
      links: {}
    },
    {
      title: "DDoS Detection in SDN",
      org: "Research",
      description: "Intrusion detection for software-defined networks with real-time feature extraction over OpenFlow statistics deriving 23 flow-level features at 89ms detection latency. Random Forest at 98.9% accuracy after grid search over 180 configurations.",
      tags: ["Python", "Scikit-learn", "OpenFlow", "Mininet"],
      icon: "shield",
      links: { github: "https://github.com/iadisharma" }
    },
    {
      title: "Image Captioning System",
      org: "Research",
      description: "End-to-end captioning pipeline pairing ResNet50/VGG16 vision encoders with LSTM decoders for visually impaired users. BLEU-1 of 0.61 with ResNet50 + Bi-LSTM, deployed as a Flask app with text-to-speech returning spoken captions in real time.",
      tags: ["TensorFlow", "ResNet50", "Bi-LSTM", "Flask"],
      icon: "image",
      links: { github: "https://github.com/iadisharma" }
    },
    {
      title: "Autonomous GPS Drone",
      org: "Competition",
      description: "Autonomous drone with GPS waypoint navigation and obstacle avoidance, built on ArduPilot with custom firmware. Secured 2nd position at the IETE National Innovation Challenge.",
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
        "Privacy-preserving architecture, so no raw prompts leave the device"
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
    { title: "Dell Extraordinary Award (x2)", year: "2025", issuer: "Dell Technologies", description: "Awarded twice for the Software Inventory Agent deployed globally across 100,000 devices, reducing unauthorized software titles from 4,100 to 1,800.", icon: "star" },
    { title: "Dell Bravo Award", year: "2026 & 2025", issuer: "Dell Technologies", description: "For the ITAssets Ops Copilot agentic platform, and for ML personalization features delivered on tight timelines for Dell Communique.", icon: "zap" },
    { title: "Dean's List", year: "2023", issuer: "Sikkim Manipal University", description: "Awarded for academic merit during B.Tech in Computer Science and Engineering.", icon: "award" },
    { title: "Birla Education Trust Scholarship", year: "2020", issuer: "Birla Education Trust", description: "Academic excellence scholarship of Rs. 25,000 for outstanding performance.", icon: "award" },
    { title: "Google DSC Lead", year: "2022-2023", issuer: "Google Developers", description: "Selected as 1 of 560 Google Developer Student Club Leads across India. Led Sikkim's sole GDSC, organizing workshops for 500+ students.", icon: "users" },
    { title: "Dell Hack-2-Hire Winner", year: "2022", issuer: "Dell Technologies", description: "Built a computer vision and language generation model converting images into spoken descriptions as assistive technology for visually impaired users.", icon: "award" },
    { title: "IETE Innovation Challenge, 2nd Position", year: "2019", issuer: "IETE", description: "Built an autonomous FPV rover for ranging and surveillance at the Institution of Electronics and Telecommunication Engineers challenge.", icon: "medal" }
  ],

  interviews: {
    title: "Interview Experiences",
    subtitle: "On-campus hiring drives, documented round by round from the first screen through to the offer.",
    entries: [
      {
        company: "Dell Technologies",
        role: "Software Engineer Intern and Software Engineer 1",
        mode: "On-Campus",
        date: "Oct 2022",
        location: "Dell Technologies ISPL, Bengaluru, India",
        outcome: "Selected",
        result: "offer",
        note: "One drive, three outcomes: the summer 2023 internship, the winter 2024 internship, and the full-time Software Engineer I offer that followed.",
        summary: "A hiring drive run as a 48-hour team hackathon rather than a standard interview loop, with an online assessment in front of it and an HR call behind it.",
        rounds: [
          { name: "Online Assessment", detail: "Aptitude, CS fundamentals (OOP, DBMS, OS and networking) and two coding questions at easy to medium level on arrays, strings and basic logic. The MCQs moved fast and leaned on tricky output-based snippets, so solid fundamentals counted for more than speed." },
          { name: "Team Formation and Problem Selection", detail: "Shortlisted candidates were grouped into teams of four to five and given a list of real-world problem statements covering recommendation engines, supply chain tools and smart chatbots. A short Q&A with Dell engineers clarified expectations before each team locked in its statement." },
          { name: "48-Hour Hackathon, Technical Presentation & Interview", detail: "Roughly 48 hours to build a working prototype from scratch. Dell engineers checked in through the build and gave practical architectural feedback that was worth acting on before the final demo. Selection stayed individual despite the team format: the panel questioned each person on the exact modules they wrote, why they chose a particular database or framework, and how the solution would scale." },
          { name: "HR Interview", detail: "A 30-minute conversational call once hackathon results were out. My specific role on the team, how we handled disagreements over the 48 hours, why Dell, and location preference between Bengaluru and Hyderabad." }
        ]
      },
      {
        company: "Keysight Technologies",
        role: "R&D Software Intern",
        mode: "On-Campus",
        date: "May 2023",
        location: "Gurugram, India",
        outcome: "Selected",
        result: "offer",
        note: "Offer letter within a week of the final HR round.",
        summary: "Four-stage drive open to B.Tech (CSE, ECE, IT) and MCA students with CGPA 8+ and no arrears. 90 students cleared the initial screen.",
        rounds: [
          { name: "Shortlisting", detail: "Resume and CGPA screening. 90 students shortlisted." },
          { name: "Aptitude Test", detail: "Three sections: 20 quantitative aptitude, 15 CS fundamentals (DSA, OOP, DBMS, OS, SE), and 15 computer networking questions." },
          { name: "Technical", detail: "Pen-and-paper C++. Pointers and double pointers, OOP (access modifiers, constructors, friend class, scope resolution, this pointer), DSA (array rotation, second largest, linked lists, quicksort with complexity), and networking (OSI layers, classful IP addressing, TCP three-way handshake, BGP, ARP, MTU and fragmentation). Socket programming followed from a networking project on the resume." },
          { name: "HR", detail: "Final behavioural round." }
        ],
        link: "https://www.geeksforgeeks.org/interview-experiences/keysight-technologies-interview-experience-for-rd-software-intern-on-campus/"
      },
      {
        company: "Microsoft",
        role: "Associate Technical Consultant Intern + FTE",
        mode: "On-Campus",
        date: "Aug 2022",
        location: "Microsoft India Global Delivery, Hyderabad, India",
        outcome: "Selected",
        result: "offer",
        note: "8 students were selected from the cohort of 25.",
        summary: "Resume and CGPA screening narrowed the cohort to 25 CS/IT students, every one of them above 8 CGPA.",
        rounds: [
          { name: "Shortlisting", detail: "Resume and CGPA screening by the TPO. 25 students selected, all above 8 CGPA. An ATS-friendly one-page resume mattered." },
          { name: "Technical", detail: "Online with screen share, coded in Notepad. C++ pointer puzzles, OOP (four pillars with real-world examples, inheritance types, runtime vs compile-time polymorphism, destructors), DSA (mergesort pseudocode, array problems, singly and doubly linked lists), and DBMS (ACID, DDL/DML, DELETE vs TRUNCATE, keys, joins, GROUP BY, second-highest salary query)." },
          { name: "Technical + HR", detail: "Resume projects, JavaScript and DBMS, cloud computing (IaaS, PaaS, public and private cloud models), project challenges, and situational questions." }
        ],
        link: "https://www.geeksforgeeks.org/interview-experiences/microsoft-interview-experience-for-associate-consultant-intern-on-campus/"
      }
    ]
  },

  gallery: {
    title: "Life Beyond Code",
    subtitle: "Moments from hackathons, conferences, and the occasional detour.",
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
    subtitle: "Project idea, research collaboration, or just want to say hello? My inbox is open.",
    formAction: "https://formspree.io/f/YOUR_FORM_ID",
    phone: "+91 63XXXXXXX12",
    email: "reachadisharma6@gmail.com",
    location: "Bengaluru, Karnataka, India",
    social: {
      linkedin: "https://linkedin.com/in/iadisharma",
      github: "https://github.com/iadisharma",
      email: "mailto:reachadisharma6@gmail.com"
    }
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Adi Sharma`,
    tagline: "Software Engineer II @ Nike"
  }
};
