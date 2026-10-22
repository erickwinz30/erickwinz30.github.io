import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders all six original skill groups and their tools", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: "What I work with." })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Programming Languages" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Front-end Development" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Back-end & Architecture" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "AI & Workflow Automation" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Database Management" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Tools & Methods" }),
    ).toBeInTheDocument();
    expect(screen.getByText("PHP")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("UML (draw.io/Lucidchart)")).toBeInTheDocument();
  });
});
