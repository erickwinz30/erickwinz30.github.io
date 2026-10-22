import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Reveal } from "./Reveal";
import { CursorDot } from "./CursorDot";

describe("shared UI primitives", () => {
  it("renders reveal content", () => {
    render(<Reveal>Revealed content</Reveal>);
    expect(screen.getByText("Revealed content")).toBeInTheDocument();
  });

  it("enables the custom cursor only while mounted", () => {
    const { unmount } = render(<CursorDot />);
    expect(document.body).toHaveClass("custom-cursor");
    unmount();
    expect(document.body).not.toHaveClass("custom-cursor");
  });
});
