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

  it("keeps all seven selected projects from the previous portfolio", () => {
    expect(projects).toHaveLength(7);
    expect(projects.map((project) => project.id)).toEqual([
      "99co",
      "attendance",
      "ecommerce",
      "hr-onboarding",
      "kenzou",
      "calculus",
      "warehouse",
    ]);
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
      "7",
      "5",
      "3",
    ]);
    expect(productionFacts.map((fact) => fact.label)).toContain(
      "stage automated follow-up funnel",
    );
  });

  it("lists all five roles and all six original skill groups", () => {
    expect(experience).toHaveLength(5);
    expect(skillGroups).toHaveLength(6);
    expect(skillGroups.flatMap((group) => group.skills)).toHaveLength(31);
    expect(services).toHaveLength(3);
    expect(bioIntro.link.href).toBe("https://dinamika.ac.id/");
    expect(bioParagraphs).toHaveLength(2);
  });

  it("uses the real contact address, phone, and WhatsApp number", () => {
    expect(contact.email).toBe("erickwinz1008@gmail.com");
    expect(contact.phone).toBe("+62 818-5700-17");
    expect(contact.whatsapp).toBe("62818570017");
    expect(contact.location).toContain("Surabaya");
  });
});
