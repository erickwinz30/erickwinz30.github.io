import { describe, expect, it } from "vitest";
import {
  bioIntro,
  bioParagraphs,
  contact,
  experience,
  navLinks,
  productionFacts,
  projects,
  services,
  skillGroups,
} from "./content";

describe("portfolio content", () => {
  it("exposes the four navigation links in order", () => {
    expect(navLinks.map((link) => link.label)).toEqual([
      "Work",
      "Experience",
      "Skills",
      "About",
    ]);
  });

  it("keeps all eight selected projects including GagasKit", () => {
    expect(projects).toHaveLength(8);
    expect(projects.map((project) => project.id)).toEqual([
      "99co",
      "attendance",
      "ecommerce",
      "hr-onboarding",
      "kenzou",
      "calculus",
      "warehouse",
      "gagaskit",
    ]);
    const gagaskit = projects[7];
    expect(gagaskit.index).toBe("08");
    expect(gagaskit.image).toBe("/assets/img/portfolio/gagaskit/docuflow.webp");
    expect(gagaskit.imageWidth).toBe(1440);
    expect(gagaskit.imageHeight).toBe(900);
    expect(gagaskit.walkthroughHref).toBe(
      "/assets/img/portfolio/gagaskit/docuflow.mp4",
    );
  });

  it("gives the flagship project a supported five-point breakdown and no dead link", () => {
    const flagship = projects[0];
    expect(flagship.href).toBeUndefined();
    expect(flagship.breakdown).toHaveLength(5);
    expect(flagship.breakdown?.join(" ")).toContain("tenant-scoped retrieval");
  });

  it("uses production facts instead of vanity role counts", () => {
    expect(productionFacts.map((fact) => fact.value)).toEqual([
      "24/7",
      "5x",
      "7",
      "3x",
    ]);
    expect(productionFacts.map((fact) => fact.label)).toContain(
      "stage automated follow-up funnel",
    );
  });

  it("lists all five roles and the four AI-first skill groups", () => {
    expect(experience).toHaveLength(5);
    expect(skillGroups.map((group) => group.title)).toEqual([
      "Applied AI",
      "Automation & Integrations",
      "Backend & Data",
      "Frontend & Tooling",
    ]);
    expect(skillGroups[0].skills).toEqual([
      "OpenAI API",
      "RAG",
      "pgvector",
      "Conversational AI",
      "Retell AI",
    ]);
    expect(skillGroups[1].skills).toContain("CRM integrations");
    expect(skillGroups[2].skills).toContain("MongoDB (basic)");
    expect(skillGroups.flatMap((group) => group.skills)).toHaveLength(27);
    expect(services).toHaveLength(3);
    expect(services.map((service) => service.title)).toEqual([
      "Applied AI & Conversational Systems",
      "Automation & Integrations",
      "Full-Stack Delivery",
    ]);
    expect(projects[0].description).toContain(
      "Migrating n8n workflows cut processing time from 1–2 minutes to seconds.",
    );
    expect(projects[0].description).toContain(
      "The WhatsApp chatbot and voice caller helped deliver 5× higher lead connectivity and 3× higher customer interest rates.",
    );
    expect(bioIntro.before).toContain(
      "Applied AI Engineer | AI Automation & Production Systems",
    );
    expect(bioIntro.link.href).toBe("https://dinamika.ac.id/");
    expect(bioParagraphs).toHaveLength(2);
    expect(bioParagraphs[1]).toContain("n8n CRM, WhatsApp");
  });

  it("keeps the CV highlights and role details aligned with the optimized CV", () => {
    const experienceText = experience
      .map((item) => item.details.join(" "))
      .join(" ");

    expect(experienceText).toContain("1–2 minutes");
    expect(experienceText).toContain("5x");
    expect(experienceText).toContain("Calculus");
    expect(
      experience.find((item) => item.company === "Kenzou Drive Thru Car Wash")
        ?.location,
    ).toBe("Surabaya");
  });

  it("uses the real contact address, phone, and WhatsApp number", () => {
    expect(contact.email).toBe("erickwinz1008@gmail.com");
    expect(contact.phone).toBe("+62 818-5700-17");
    expect(contact.whatsapp).toBe("62818570017");
    expect(contact.location).toContain("Surabaya");
    expect(contact.cv).toBe(
      "/assets/Erick_Winata_Applied_AI_Engineer_CV_24-11-2026.pdf",
    );
  });
});
