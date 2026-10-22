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
    title: "99.co — Real-Estate AI Platform",
    description:
      "Multi-tenant WhatsApp and voice AI pipeline for lead qualification, site-visit scheduling and CRM follow-up.",
    stack: ["Go", "PostgreSQL", "pgvector", "Redis", "React", "OpenAI"],
    panel: "99",
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
      "QR attendance with real-time tracking and role-based access for employees, HR and scanners.",
    stack: ["React", "Go", "PostgreSQL"],
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
      "Mobile storefront with cart, Midtrans checkout and an admin dashboard.",
    stack: ["Ionic", "Vue", "Firebase"],
    image: "/assets/img/portfolio/ionic-ecommerce/iPhone-13-PRO-home.png",
    imageWidth: 858,
    imageHeight: 1744,
    href: "https://github.com/erickwinz30/computers-ecommerce-ionic",
    demoHref: "https://computers-ecommerce.web.app",
  },
  {
    id: "kenzou",
    index: "04",
    title: "Kenzou Car Wash",
    description:
      "Laravel management app with XP, badges, vouchers and leaderboards built for customer retention.",
    stack: ["Laravel", "Blade", "MySQL"],
    image: "/assets/img/portfolio/kenzou-app-screenshot/customers-homepage.png",
    imageWidth: 400,
    imageHeight: 897,
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Apr 2026 – Oct 2026",
    role: "AI Engineer - Graduate Trainee",
    company: "99.co",
    location: "South Jakarta",
    details: [
      "Architected and built a multi-tenant AI automation platform in Go and React, migrating legacy n8n workflows into a high-reliability modular monolith.",
      "Engineered a hybrid Conversational AI pipeline integrating WhatsApp (Gupshup) and Voice AI (Retell AI) with OpenAI LLMs for multi-stage lead qualification.",
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
    location: "Self-Employed",
    details: [
      "Designed and engineered a comprehensive car wash management application for administrators and members using the Laravel framework.",
      "Implemented gamification features, including XP, Badges, and Vouchers, to significantly enhance user engagement and customer loyalty.",
      "Validated system functionality through Black-box testing and User Acceptance Testing (UAT) to ensure high-quality software delivery.",
    ],
  },
  {
    period: "Feb 2023 – Jul 2023",
    role: "Back-End Developer (MSIB Participant)",
    company: "Dicoding Indonesia",
    location: "Remote",
    details: [
      "Mastered professional development workflows including RESTful API architecture, Node.js, and Git.",
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
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Asynq",
      "MySQL",
      "SQLite",
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
    title: "Frontend & Delivery",
    skills: [
      "React",
      "TypeScript",
      "Vue",
      "Tailwind CSS",
      "Laravel",
      "Docker",
      "Git",
    ],
  },
];

export const productionFacts: Fact[] = [
  { value: "24/7", label: "WhatsApp + voice qualification" },
  { value: "7", label: "stage automated follow-up funnel" },
  { value: "5", label: "external integrations" },
  { value: "3", label: "core languages" },
];

export const bioParagraphs: string[] = [
  "I'm a Full-Stack & AI Automation Engineer and an Information Systems graduate from Dinamika University. I like the part of the job where a messy process becomes a system that behaves predictably.",
  "Most of my work sits between backend architecture and applied AI: Go services, multi-tenant RAG, WhatsApp and voice pipelines, and the React dashboards that make them usable. I've also shipped Laravel and Vue products end to end.",
  "I work across the full SDLC, use AI-assisted engineering to move faster, and keep architecture, data integrity and edge cases under human review. Based in East Surabaya, open to full-time roles and freelance work.",
];

export const contact: Contact = {
  email: "erickwinz1008@gmail.com",
  whatsapp: "62818570017",
  location: "East Surabaya, Indonesia",
  availability: "Open to full-time roles and freelance work",
  linkedin: "https://linkedin.com/in/erick-winata-b59581235/",
  github: "https://github.com/erickwinz30",
  cv: "/assets/CV_ATS_ErickWinata_English_17-10-2026.pdf",
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
