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
    roles: ["Backend Engineer", "AI-ML Engineer", "System Architect"],
    cta: { text: "View My Work", link: "projects.html" },
    ctaSecondary: { text: "Get In Touch", link: "contact.html" },
    headshot: "assets/images/headshot.jpg"
  },

  about: {
    title: "About Me",
    subtitle: "Backend engineer by craft. AI-ML engineer by curiosity.",
    summary: [
      "I'm a Backend & AI-ML Engineer at Dell Technologies with a passion for building high-performance distributed systems and intelligent software. I specialize in designing scalable microservices, real-time data pipelines, and ML-driven solutions that serve hundreds of thousands of devices.",
      "From architecting pub/sub systems handling 100K+ endpoints to building ML personalization engines that boosted engagement by 40%, I thrive at the intersection of backend engineering and applied AI. I hold a USPTO patent for an Agentic AI governance system and have been recognized with multiple Dell innovation awards."
    ],
    resumeLink: "docs/AS CV 21 April 2026.pdf",
    skills: [
      { category: "Languages", items: ["Python", "Go", "JavaScript/TypeScript", "C++", "PowerShell", "SQL"], icon: "code" },
      { category: "AI / ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "BERT", "LangChain"], icon: "brain" },
      { category: "Backend", items: ["FastAPI", "Flask", "Node.js", "GraphQL", "ASP.NET Core", "SignalR"], icon: "server" },
      { category: "Data & Infra", items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Elasticsearch", "TimescaleDB"], icon: "database" },
      { category: "Cloud & DevOps", items: ["Azure", "Docker", "Kubernetes", "GitLab CI/CD", "GitHub Actions"], icon: "cloud" },
      { category: "Frontend", items: ["React.js", "HTML/CSS", "Responsive Design"], icon: "layout" }
    ],
    leadership: [
      { role: "Google DSC Lead", org: "SMIT-SMU", period: "2022–2023" },
      { role: "General Secretary", org: "CS Student Council, SMIT", period: "2022–2023" },
      { role: "ML Mentor", org: "AI Club, SMIT", period: "2021–2023" },
      { role: "Core Member", org: "GDG Bangalore", period: "2024–Present" },
      { role: "Head of IT", org: "TEDxSMIT", period: "2022–2023" },
      { role: "Volunteer", org: "NSS, SMIT", period: "2020–2022" }
    ]
  },

  experience: [
    {
      role: "Software Development Engineer 2",
      company: "Dell Technologies",
      location: "Bangalore, India",
      period: "Jan 2026 – Present",
      current: true,
      highlights: [
        "Architected a SignalR-based pub/sub system for real-time bidirectional communication with 100K+ enterprise endpoints.",
        "Built a Native AOT agent achieving 91% binary size reduction and 74% faster cold starts for edge deployment.",
        "Designed a real-time command dispatch pipeline enabling sub-second software operations across distributed endpoints."
      ],
      tags: ["SignalR", "Native AOT", ".NET", "Distributed Systems"]
    },
    {
      role: "Software Development Engineer 1",
      company: "Dell Technologies",
      location: "Bangalore, India",
      period: "Aug 2024 – Dec 2025",
      highlights: [
        "Built an ML-driven personalization engine increasing user engagement by 40% using collaborative filtering and NLP.",
        "Developed Go microservices achieving 79% faster response times with concurrent processing and Redis caching.",
        "Engineered a RabbitMQ-powered async pipeline processing 10,000 templated emails per minute.",
        "Created a software inventory agent deployed to 100K+ devices for real-time asset tracking.",
        "Co-authored a USPTO patent for an Agentic AI-driven software governance system.",
        "Designed an RL-based adaptive task scheduler reducing resource contention by 33%."
      ],
      tags: ["Go", "Python", "RabbitMQ", "ML", "Redis"]
    },
    {
      role: "Software Engineer Intern (Winter)",
      company: "Dell Technologies",
      location: "Bangalore, India",
      period: "Jan 2024 – May 2024",
      highlights: [
        "Implemented semantic search using Elasticsearch and BERT embeddings for intelligent content discovery.",
        "Built a recommendation system achieving 78% CTR improvement using hybrid collaborative-content filtering.",
        "Drove CI/CD pipeline coverage from 58% to 94% and designed a GraphQL API reducing overfetching by 62%.",
        "Contributed to the ATOM architecture — a modular microservices framework for internal platforms."
      ],
      tags: ["Elasticsearch", "BERT", "GraphQL", "CI/CD"]
    },
    {
      role: "Software Engineer Intern (Summer)",
      company: "Dell Technologies",
      location: "Bangalore, India",
      period: "May 2023 – Jul 2023",
      highlights: [
        "Built User360 — a unified dashboard aggregating data from 5+ sources using FastAPI and React.",
        "Achieved 88% API latency reduction and 580% throughput increase through async processing and caching.",
        "Deployed production-ready pipelines with GitLab CI/CD and Docker-based containerization."
      ],
      tags: ["FastAPI", "React", "Docker", "GitLab CI/CD"]
    },
    {
      role: "Research Intern",
      company: "BITS Pilani",
      location: "Remote",
      period: "Jun 2022 – Aug 2022",
      highlights: [
        "Developed a multi-robot coordination system using LSTM networks and the Hungarian algorithm.",
        "Simulated autonomous task allocation across 10+ robots in ROS/Gazebo environments.",
        "Optimized collision-free path planning for warehouse and disaster-response scenarios."
      ],
      tags: ["LSTM", "ROS", "Gazebo", "Robotics"]
    }
  ],

  projects: [
    {
      title: "Software Management Agent",
      description: "Enterprise-grade agent deployed to 100K+ devices for real-time software lifecycle management. Built with SignalR pub/sub, Native AOT compilation (91% size reduction), and real-time bidirectional command dispatch.",
      tags: ["C#", ".NET", "SignalR", "Native AOT"],
      icon: "monitor",
      links: {}
    },
    {
      title: "Dell Communique",
      description: "High-throughput communication platform processing 10,000+ templated emails/min. RabbitMQ async pipeline with Go microservices, Redis caching, and ML-driven personalization achieving 40% engagement lift.",
      tags: ["Go", "RabbitMQ", "Redis", "ML"],
      icon: "mail",
      links: {}
    },
    {
      title: "DDoS Detection in SDN",
      description: "Machine learning-based DDoS attack detection system for Software-Defined Networks achieving 98.88% accuracy. Built with Python, Scikit-learn, and XGBoost with real-time traffic classification.",
      tags: ["Python", "Scikit-learn", "XGBoost", "Networking"],
      icon: "shield",
      links: { github: "https://github.com/iadisharma" }
    },
    {
      title: "Image Captioning System",
      description: "Deep learning pipeline generating natural language descriptions for images using ResNet50 encoder and Bi-LSTM decoder. Achieved BLEU-1 score of 0.61 with attention mechanisms.",
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
      description: "Autonomous drone system with GPS waypoint navigation and obstacle avoidance. Built on ArduPilot with custom firmware. Won 1st Prize at IETE National Robotics Competition.",
      tags: ["ArduPilot", "C++", "GPS", "Robotics"],
      icon: "drone",
      links: {}
    }
  ],

  patents: [
    {
      title: "Agentic AI-Driven Persona-Based Software Removal and Governance System",
      authority: "USPTO (United States Patent and Trademark Office)",
      status: "Filed",
      filedBy: "Dell Technologies",
      claims: 10,
      description: "A novel system integrating agentic AI with persona-based governance for automated software lifecycle management across enterprise environments. Features a 6-layer architecture including contextual analysis, persona-based decision engine, agentic AI action layer, federated learning, and explainable AI modules.",
      keyInnovations: [
        "Agentic AI decision engine with autonomous software management",
        "Persona-based action layer for role-specific governance policies",
        "Federated learning for cross-organizational intelligence without data exposure",
        "Explainable AI module providing transparent decision audit trails",
        "Multi-stakeholder governance with adaptive compliance frameworks"
      ]
    }
  ],

  awards: [
    { title: "Dell Innovation Award", year: "2025", issuer: "Dell Technologies", description: "Recognized for the USPTO patent contribution — Agentic AI-Driven Software Governance System.", icon: "trophy" },
    { title: "Dell Extraordinary Award", year: "2025", issuer: "Dell Technologies", description: "Awarded for exceptional contributions to the Software Inventory Agent serving 100K+ endpoints.", icon: "star" },
    { title: "Dell Bravo Award", year: "2025", issuer: "Dell Technologies", description: "Recognized for outstanding work on ML personalization engine and Go microservices optimization.", icon: "zap" },
    { title: "Google DSC Lead", year: "2022–2023", issuer: "Google Developers", description: "Selected as 1 of 560 Google Developer Student Club Leads across India. Organized workshops and hackathons.", icon: "users" },
    { title: "Dell Hack-2-Hire Winner", year: "2022", issuer: "Dell Technologies", description: "Won the national-level hackathon leading to a full-time offer at Dell Technologies.", icon: "award" },
    { title: "IETE Robotics — 2nd Position", year: "2019", issuer: "IETE", description: "Built an autonomous GPS drone with waypoint navigation. Secured 2nd position nationally.", icon: "medal" }
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
    email: "iadisharmaofficial@gmail.com",
    social: {
      linkedin: "https://linkedin.com/in/iadisharma",
      github: "https://github.com/iadisharma",
      email: "mailto:iadisharmaofficial@gmail.com"
    }
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Adi Sharma. Built with purpose.`,
    tagline: "Backend & AI-ML Engineer"
  }
};
