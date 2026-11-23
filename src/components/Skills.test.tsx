import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders the four AI-first skill groups and their tools", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: "What I work with." })).toBeInTheDocument();
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.map((h) => h.textContent)).toEqual([
      "Applied AI",
      "Automation & Integrations",
      "Backend & Data",
      "Frontend & Tooling",
    ]);
    expect(screen.getByText("pgvector")).toBeInTheDocument();
    expect(screen.getByText("Conversational AI")).toBeInTheDocument();
    expect(screen.getByText("CRM integrations")).toBeInTheDocument();
    expect(screen.getByText("MongoDB (basic)")).toBeInTheDocument();
    expect(screen.queryByText("UML (draw.io/Lucidchart)")).not.toBeInTheDocument();
  });
});
