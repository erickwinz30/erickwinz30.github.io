import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders the three skill groups and their tools", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: "What I work with." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Backend & Data" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI & Automation" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Frontend & Delivery" })).toBeInTheDocument();
    expect(screen.getByText("pgvector")).toBeInTheDocument();
  });
});
