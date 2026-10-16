# Portfolio & Resume Descriptions: AI Call & Chatbot Automation Platform

Descriptions for CV and LinkedIn profiles detailing architecture, engineering implementation, and business impact.

---

## 1. CV Bullet Points (ATS & Tech-Focused)

**Role Target:** Backend Engineer / AI Systems Engineer / Full-Stack Engineer

* **Architected and built multi-tenant AI automation platform** in Go and React, leveraging hands-on experience designing initial production n8n workflows to lead the migration into a high-reliability modular monolith.
* **Designed and operated complex n8n automation workflows** integrating CRM webhooks, WhatsApp triggers, and external APIs prior to scaling the system to code.
* **Spearheaded AI-assisted development (Vibe Coding)** using AI coding agents to accelerate delivery, serving as system architect and code reviewer governing database schema, API contracts, and edge cases.
* **Engineered hybrid Conversational AI pipeline** integrating WhatsApp (Gupshup) and Voice AI (Retell AI) with OpenAI LLMs, automating multi-stage lead qualification and call scheduling.
* **Implemented multi-tenant RAG pipeline** using PostgreSQL (`pgvector`) and OpenAI embeddings, isolating tenant knowledge bases via strict tenant-scoped retrieval (`db_project_id`).
* **Designed deterministic Funnel Engine & State Machine** backed by Redis + Asynq, managing 7-stage scheduled follow-ups, night-gate time clamps (WIB), webhook fallbacks, and retry mechanisms.
* **Engineered CRM WhatsApp Auto-Message Engine** in Go (GORM + Asynq/Redis), building a resilient two-step scheduled outreach pipeline (`Chat1` -> delay -> `Chat2`) with dual provider support (Meta Cloud API & Gupshup), template token mapping, and crash recovery sweeper.
* **Developed full-featured Admin Control Plane** using React, TypeScript, and Huma v2 OpenAPI, providing real-time tenant toggles, lead retest environments, and tele-manager routing.
* **Integrated distributed lead distribution & external sync** with Google Sheets API and internal CRM services via secure mesh authentication.

---

## 2. LinkedIn Experience Section

**Role Title:** Software Engineer (Backend / AI Automation)  
**Tech Stack:** Go, PostgreSQL, pgvector, Redis, Asynq, n8n, React, TypeScript, OpenAI API, Retell AI, Gupshup WhatsApp API, Docker.

* Built, operated, and maintained production automation workflows in n8n, then re-engineered the pipeline into a production-grade Go modular monolith to improve reliability, observability, and concurrency.
* Practiced AI-native engineering (vibe coding), directing AI coding agents to implement core modules while personally governing system architecture, data integrity, and strict code reviews.
* Built end-to-end multi-tenant AI chatbot and automated voice calling pipeline handling lead qualification, intent classification, and site-visit scheduling.
* Implemented tenant-scoped vector search (pgvector) to deliver grounded contextual answers per property project with tenant-level data isolation.
* Engineered CRM Auto-Message subsystem delivering multi-step WhatsApp template sequences (`Chat1` & `Chat2`) via Meta Cloud API / Gupshup with automatic stop conditions (`agent_replied`, `already_contacted`, `opportunity_closed`) and background sweeper recovery.
* Developed resilient asynchronous event pipeline with Redis/Asynq for deterministic outreach timers, webhook reconciliations, and retry queues.
* Shipped admin management portal (React + TypeScript) for real-time tenant controls, live testing, and sales team lead distribution.

---

## 3. LinkedIn Featured Project Section

**Title:** Multi-Tenant Real-Estate AI Chatbot & Voice Automation Platform  

**Description:**
Platform otomasi lead real-estate end-to-end yang menggabungkan WhatsApp AI Chatbot & Voice AI Calling untuk kualifikasi calon pembeli properti secara real-time.

**What I built:**
* **Backend:** Go (Chi + Huma OpenAPI), PostgreSQL + `pgvector`, Redis + Asynq task queue.
* **AI & Voice:** OpenAI (RAG multi-tenant) + Retell AI (voice bot) + Gupshup WhatsApp API.
* **Frontend:** React + TypeScript + Tailwind (Admin Control Panel).

1. **AI-Native Engineering (Vibe Coding with Rigor):** Dikembangkan end-to-end menggunakan AI coding agents, di mana saya bertindak sebagai system architect & reviewer yang mengarahkan logic, validasi kode, dan integritas data.
2. **From Low-Code to Code:** Rebuild sistem dari n8n ke Go untuk keandalan, observabilitas, dan kontrol konkurensi.
3. **Deterministic Funnel Engine:** Otomasi alur follow-up 7-tahap dengan penjadwalan presisi, night-gate handling, dan fallback webhook.
4. **CRM WhatsApp Auto-Message:** Integrasi pipeline pesan otomatis 2-tahap (Chat 1 -> Chat 2) dengan support multi-provider (Meta WhatsApp Cloud API & Gupshup HSM), dynamic variable binding, dan auto-cancel saat agen sales merespons.
5. **Multi-tenant RAG:** Pemisahan context data antar-developer properti menggunakan tenant-scoped pgvector retrieval.
6. **Resilience:** Idempotent webhooks, automatic retries, background sweepers, dan fail-safe distribution ke CRM / Google Sheets.

---

## 4. LinkedIn Post (Building in Public / Showcase)

```text
Excited to share what I've been engineering recently: a multi-tenant AI Lead Automation & Voice Chatbot platform built from the ground up in Go and React! 🚀

Problem:
Managing inbound real-estate leads with low-code workflows created bottlenecks in reliability, pacing, and multi-tenant isolation.

Solution:
Migrated the core engine to a resilient Go backend:
• Multi-tenant RAG powered by PostgreSQL (pgvector) + OpenAI for contextual WhatsApp conversations.
• Voice AI integration using Retell AI for automated qualification calls.
• Deterministic Funnel State Machine with Redis & Asynq for precise follow-up timing and night-window gating.
• CRM WhatsApp Auto-Message: pipeline pesan otomatis 2-tahap (Meta Direct & Gupshup) dengan state machine dan background sweep recovery.
• Modern React/TypeScript admin SPA for tenant management and live lead retesting.
• AI-native workflow: proyek ini dikembangkan dengan bantuan AI coding agents (vibe coding) dengan supervisi manusia pada arsitektur, testing, dan schema integrity.

Takeaway: Proyek ini dikembangkan dengan bantuan AI coding agents (vibe coding) dengan fokus pada arsitektur sistem, verifikasi edge cases, dan integrasi antar-service.

#Golang #n8n #VibeCoding #AIEngineering #ArtificialIntelligence #VoiceAI #SoftwareEngineering #WorkflowAutomation #PostgreSQL #SystemDesign #React
```

---

## 5. ATS Skill Keywords

`Go (Golang)` • `n8n (Workflow Automation)` • `PostgreSQL` • `pgvector` • `RAG (Retrieval-Augmented Generation)` • `Redis` • `Asynq` • `GORM` • `Meta WhatsApp Cloud API` • `Retell AI` • `OpenAI API` • `WhatsApp Business API` • `AI-Assisted Engineering (Vibe Coding)` • `Agentic Workflows` • `Distributed Systems` • `State Machines` • `React.js` • `TypeScript` • `Docker`

---

## 6. Versi HR Non-Teknis (Bahasa Mudah & Fokus Bisnis)

> **Kapan dipakai:** Screening tahap 1 dengan HR / Talent Acquisition non-teknis, ringkasan CV, atau perkenalan diri saat interview awal.

### Poin CV (Format Simpel & Berorientasi Solusi)
* **Keahlian Otomasi n8n & Migrasi ke Backend:** Berpengalaman mendesain alur kerja otomasi kompleks di n8n (webhook, API CRM, WhatsApp), serta memimpin migrasi menyeluruh ke sistem backend mandiri (Go) saat kebutuhan skala dan stabilitas meningkat.
* **Otomasi Lead & Chatbot AI:** Mengembangkan platform berbasis WhatsApp dan AI Voice Calling untuk menjawab pertanyaan calon pembeli properti kapan saja dan melakukan follow-up otomatis sesuai jadwal kerja.
* **Efisiensi Pengerjaan Berbasis AI (Vibe Coding):** Memanfaatkan AI tools secara intensif untuk mempercepat penulisan kode, dengan fokus mandiri pada perancangan logika bisnis, alur sistem, pengujian, dan integrasi data.
* **Otomasi Pesan CRM:** Mengembangkan fitur pengiriman pesan WhatsApp otomatis berjadwal di dalam CRM agar tim sales tidak terlambat merespons leads baru.
* **Integrasi Agen Telepon AI:** Menghubungkan chatbot dengan AI Voice Caller untuk melakukan panggilan konfirmasi otomatis dan penjadwalan survey lokasi properti secara real-time.
* **Portal Kontrol Admin:** Menyediakan dashboard bagi tim operasional untuk memantau status lead, mengaktifkan proyek properti baru, dan mengatur distribusi leads ke tim sales.

### Elevator Pitch untuk HR (30 Detik)
*"Saya memimpin migrasi dan pengembangan platform otomasi AI yang sebelumnya berjalan di n8n ke sistem backend mandiri yang jauh lebih stabil. Sistem ini menghubungkan WhatsApp Chatbot dan AI Voice Calling langsung ke CRM properti agar setiap calon pembeli direspons cepat, dijawab pertanyaannya sesuai proyek properti terkait, dan dijadwalkan survey lokasi secara otomatis. Seluruh arsitektur, skema data, dan integrasinya saya rancang sendiri, dengan penulisan kode yang diakselerasi menggunakan AI coding tools (vibe coding)."*
