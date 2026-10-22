import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Services } from "./Services";

describe("Services", () => {
  it("renders the three service columns", () => {
    render(<Services />);
    expect(screen.getByText("What I do")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Backend & AI Automation" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Full-Stack Delivery" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Systems & Integrations" }),
    ).toBeInTheDocument();
  });
});
