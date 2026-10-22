import { describe, expect, it } from "vitest";
import {
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

  it("describes exactly four selected projects", () => {
    expect(projects).toHaveLength(4);
    expect(projects.map((project) => project.id)).toEqual([
      "99co",
      "attendance",
      "ecommerce",
      "kenzou",
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

  it("lists all five roles and three skill groups", () => {
    expect(experience).toHaveLength(5);
    expect(skillGroups).toHaveLength(3);
    expect(services).toHaveLength(3);
    expect(bioParagraphs).toHaveLength(3);
  });

  it("uses the real contact address", () => {
    expect(contact.email).toBe("erickwinz1008@gmail.com");
    expect(contact.location).toContain("Surabaya");
  });
});
