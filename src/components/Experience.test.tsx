import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders all five roles in reverse-chronological order", () => {
    render(<Experience />);
    expect(screen.getByRole("heading", { name: "Where I've worked." })).toBeInTheDocument();
    const companies = screen
      .getAllByTestId("experience-company")
      .map((node) => node.textContent);
    expect(companies).toEqual([
      "99.co",
      "PT. Prakarsa Alam Segar (Wings Food)",
      "Kenzou Drive Thru Car Wash",
      "Dicoding Indonesia",
      "Bfit Indonesia",
    ]);
  });

  it("keeps the original role details from the previous portfolio", () => {
    render(<Experience />);

    expect(
      screen.getByText(
        "Architected and built a multi-tenant AI automation platform in Go and React, migrating legacy n8n workflows into a high-reliability modular monolith.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Implemented the Safety Stock method to optimize stock tracking.",
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("experience-detail")).toHaveLength(16);
  });
});
