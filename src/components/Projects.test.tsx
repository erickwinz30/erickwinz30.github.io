import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders all four projects", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: "Selected work." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /99\.co/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Attendance App" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Simple Ecommerce" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Kenzou Car Wash" })).toBeInTheDocument();
  });

  it("opens the flagship technical breakdown for keyboard users", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const toggle = screen.getByRole("button", { name: /read the breakdown/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/tenant-scoped retrieval/i)).toBeInTheDocument();
  });

  it("only marks linked cards as viewable", () => {
    const { container } = render(<Projects />);
    const viewTargets = container.querySelectorAll('[data-cursor="view"]');
    expect(viewTargets).toHaveLength(2);
  });
});
