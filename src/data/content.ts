export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  index: string;
  title: string;
  description: string;
  link: { label: string; href: string };
}

export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  panel?: string;
  panelLabel?: string;
  panelMeta?: string;
  href?: string;
  demoHref?: string;
  breakdown?: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  details: string[];
}

export interface SkillGroup {
  index: string;
  title: string;
  skills: string[];
}

export interface Fact {
  value: string;
  label: string;
}

export interface Contact {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  availability: string;
  linkedin: string;
  github: string;
  cv: string;
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export const services: Service[] = [
  {
    index: "01",
    title: "Backend & AI Automation",
    description:
      "Go services, event queues and multi-tenant RAG pipelines that survive real traffic, real edge cases and real sales teams.",
    link: { label: "See selected work", href: "#work" },
  },
  {
    index: "02",
    title: "Full-Stack Delivery",
    description:
      "From database schema to admin dashboard. React, TypeScript and Laravel shipped end to end, not handed over in pieces.",
    link: { label: "See experience", href: "#experience" },
  },
  {
    index: "03",
    title: "Systems & Integrations",
    description:
      "WhatsApp, voice AI, CRMs and spreadsheets joined into one dependable flow with retries, fallbacks and clear observability.",
    link: { label: "See skills", href: "#skills" },
  },
];

export const projects: Project[] = [
  {
    id: "99co",
    index: "01",
    title: "99.co — Real-Estate AI Call & Chatbot Platform",
    description:
      "An end-to-end conversational AI and lead automation platform built to qualify prospective property buyers and schedule site visits 24/7. Integrates WhatsApp Chatbot and AI Voice Calling to answer project-specific inquiries via multi-tenant RAG, execute deterministic 7-stage scheduled follow-ups, and automate CRM sales outreach.",
    stack: [
      "Go",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Asynq",
      "React",
      "TypeScript",
      "OpenAI",
      "Retell AI",
      "Gupshup",
    ],
    panel: "99",
    panelLabel: "AI Platform",
    panelMeta: "Go + React",
    breakdown: [
      "Migrated production n8n workflows into a Go modular monolith.",
      "Multi-tenant RAG with PostgreSQL/pgvector and tenant-scoped retrieval.",
      "Deterministic 7-stage funnel with Redis/Asynq, night-window gating and webhook fallbacks.",
      "Hybrid WhatsApp + Retell AI voice pipeline powered by OpenAI.",
      "React/TypeScript admin plane for tenant controls and lead retesting.",
    ],
  },
  {
    id: "attendance",
    index: "02",
    title: "Attendance App",
    description:
      "A full-stack web application for employee attendance management using QR code technology. Features include real-time tracking and role-based access control (Employee, HRD, Scanner).",
    stack: ["React", "Golang", "PostgreSQL"],
    image: "/assets/img/portfolio/attendance-app/home.png",
    imageWidth: 1920,
    imageHeight: 968,
    href: "https://github.com/erickwinz30/attendance-app-frontend",
  },
  {
    id: "ecommerce",
    index: "03",
    title: "Simple Ecommerce",
    description:
      "A full-stack mobile e-commerce application for computer hardware products. Features include a shopping cart, Midtrans payment integration, and an admin dashboard.",
    stack: ["Ionic", "Vue", "Firebase"],
    image: "/assets/img/portfolio/ionic-ecommerce/iPhone-13-PRO-home.png",
    imageWidth: 858,
    imageHeight: 1744,
    href: "https://github.com/erickwinz30/computers-ecommerce-ionic",
    demoHref: "https://computers-ecommerce.web.app",
  },
  {
    id: "hr-onboarding",
    index: "04",
    title: "Internal HR & Employee Onboarding System",
    description:
      "An exclusive internal tool for the HR department (Wingsfood Internship Project). Optimized the document collection workflow with a direct file upload interface and Excel-based autofill features.",
    stack: ["Laravel", "ReactJS", "Firebase", "MySQL"],
    panel: "HR",
    panelLabel: "Internal system",
    panelMeta: "Laravel + React",
  },
  {
    id: "kenzou",
    index: "05",
    title: "Kenzou Drive Thru Car Wash",
    description:
      "A full-stack car wash management application for admins and members. Integrated gamification features to increase user engagement.",
    stack: ["Laravel", "Blade", "MySQL"],
    image: "/assets/img/portfolio/kenzou-app-screenshot/customers-homepage.png",
    imageWidth: 400,
    imageHeight: 897,
  },
  {
    id: "calculus",
    index: "06",
    title: "Calculus - Calorie Tracking App",
    description:
      "Dicoding MSIB Capstone Project. Took full responsibility for database schema design, authentication, and back-end logic.",
    stack: ["Laravel", "Blade", "MySQL"],
    image: "/assets/img/portfolio/calculus-screenshot/homepage-view.png",
    imageWidth: 1881,
    imageHeight: 920,
    href: "https://github.com/erickwinz30/Calculus",
  },
  {
    id: "warehouse",
    index: "07",
    title: "Warehouse Inventory",
    description:
      "A comprehensive Warehouse Inventory System to streamline stock tracking. Built with Laravel and refactored the frontend to Vue.js, implementing the Safety Stock method to optimize inventory management.",
    stack: ["Laravel", "Vue.js"],
    image: "/assets/img/portfolio/bfit-gudang-screenshot/home.png",
    imageWidth: 1906,
    imageHeight: 961,
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Apr 2026 – Oct 2026",
    role: "AI Engineer - Graduate Trainee",
    company: "99.co",
    location: "South Jakarta",
    details: [
      "Took over an existing production n8n lead-automation stack, then architected and built its Go/React replacement — cutting processing latency from 1–2 minutes to seconds and eliminating low-code execution errors.",
      "Engineered a hybrid Conversational AI pipeline integrating WhatsApp (Gupshup) and Voice AI (Retell AI) with OpenAI LLMs for multi-stage lead qualification, driving a 5x increase in lead connectivity and a 3x boost in customer interest.",
      "Implemented multi-tenant RAG using PostgreSQL (pgvector) and OpenAI embeddings, ensuring strict tenant-scoped knowledge isolation.",
      "Designed a deterministic Funnel Engine & State Machine with Redis & Asynq managing 7-stage scheduled follow-ups and night-window gating.",
      "Engineered CRM WhatsApp Auto-Message subsystem delivering multi-step WhatsApp template sequences with dual provider support and recovery sweepers.",
      "Shipped a React & TypeScript admin portal for real-time tenant controls, lead retesting, and tele-manager routing.",
    ],
  },
  {
    period: "Jul 2025 – Oct 2025",
    role: "IT Programmer (Internship)",
    company: "PT. Prakarsa Alam Segar (Wings Food)",
    location: "Bekasi",
    details: [
      "Identified and resolved critical bugs in the HR system infrastructure.",
      "Led the digital migration of the recruitment process from Google Drive to a centralized internal system.",
      "Developed a real-time monitoring dashboard using React.js and Firebase to track the status of applicant documents.",
    ],
  },
  {
    period: "Aug 2024 – Jan 2025",
    role: "Full-Stack Developer",
    company: "Kenzou Drive Thru Car Wash",
    location: "Surabaya",
    details: [
      "Applied the Prototyping model and UML modeling to align requirements and system design with business objectives.",
      "Designed and engineered a comprehensive car wash management application for administrators and members using the Laravel framework.",
      "Implemented gamification features, including XP, Badges, and Vouchers, to significantly enhance user engagement and customer loyalty.",
      "Validated system functionality through Black-box testing and User Acceptance Testing (UAT) to ensure high-quality software delivery.",
    ],
  },
  {
    period: "Feb 2023 – Jul 2023",
    role: "Back-End & Full-Stack Developer (MSIB Batch 4)",
    company: "Dicoding Indonesia",
    location: "Remote",
    details: [
      "Selected for the MSIB Batch 4 independent study program, specializing in Full-Stack Web Development.",
      "Mastered professional development workflows including RESTful API architecture, Node.js, and Git.",
      "Built the \"Calculus\" calorie-tracking capstone, owning database schema design and back-end logic.",
    ],
  },
  {
    period: "Feb 2023 – Mar 2023",
    role: "IT Support Technician (Internship)",
    company: "Bfit Indonesia",
    location: "East Surabaya",
    details: [
      "Handled first-level technical support for hardware and software issues.",
      "Rebuilt and refactored the warehouse inventory system from Laravel Blade to Vue.js to make it more dynamic.",
      "Implemented the Safety Stock method to optimize stock tracking.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Backend & Data",
    skills: [
      "Go",
      "PHP",
      "Laravel",
      "Node.js",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Asynq",
      "MySQL",
      "SQLite",
      "Firebase",
      "MongoDB",
    ],
  },
  {
    index: "02",
    title: "AI & Automation",
    skills: [
      "OpenAI API",
      "RAG",
      "Retell AI",
      "WhatsApp Business API",
      "n8n",
    ],
  },
  {
    index: "03",
    title: "Frontend & Tooling",
    skills: [
      "React",
      "TypeScript",
      "Vue",
      "Tailwind CSS",
      "Docker",
      "Git",
    ],
  },
];

export const productionFacts: Fact[] = [
  { value: "24/7", label: "WhatsApp + voice qualification" },
  { value: "5x", label: "lead connectivity lift" },
  { value: "7", label: "stage automated follow-up funnel" },
  { value: "3x", label: "customer interest lift" },
];

export const bioIntro = {
  before:
    "I'm a Full-Stack & AI Automation Engineer and an Information Systems graduate from ",
  link: {
    label: "Dinamika University (STIKOM Surabaya)",
    href: "https://dinamika.ac.id/",
  },
  after:
    ", where I graduated with a 3.74/4.00 GPA. I like the part of the job where a messy process becomes a system that behaves predictably.",
};

export const bioParagraphs: string[] = [
  "Most of my work sits between backend architecture and applied AI: Go services, multi-tenant RAG, WhatsApp and voice pipelines, and the React dashboards that make them usable. I've also shipped Laravel and Vue products end to end.",
  "I work across the full SDLC, use AI-augmented engineering to move faster, and keep architecture, data integrity and edge cases under human review. Based in East Surabaya, open to full-time roles and freelance work.",
];

export const contact: Contact = {
  email: "erickwinz1008@gmail.com",
  phone: "+62 818-5700-17",
  whatsapp: "62818570017",
  location: "East Surabaya, Indonesia",
  availability: "Open to full-time roles and freelance work",
  linkedin: "https://linkedin.com/in/erick-winata-b59581235/",
  github: "https://github.com/erickwinz30",
  cv: "/assets/CV_ATS_ErickWinata_English_25-10-2026.pdf",
};

export const stackMarquee: string[] = [
  "Go",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "React",
  "TypeScript",
  "OpenAI",
  "Docker",
  "n8n",
  "Laravel",
  "Git",
];
