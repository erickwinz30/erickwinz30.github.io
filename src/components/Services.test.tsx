import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Services } from "./Services";

describe("Services", () => {
  it("renders the three service columns leading with Applied AI", () => {
    render(<Services />);
    expect(screen.getByText("What I do")).toBeInTheDocument();
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.map((h) => h.textContent)).toEqual([
      "Applied AI & Conversational Systems",
      "Automation & Integrations",
      "Full-Stack Delivery",
    ]);
  });
});
