import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
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

  it("disables the custom cursor when pointer capability changes", () => {
    const originalMatchMedia = window.matchMedia;
    let pointerListener: (() => void) | undefined;
    let finePointer = true;

    const pointerMedia = {
      get matches() {
        return finePointer;
      },
      media: "(pointer: fine)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(
        (_type: string, listener: EventListenerOrEventListenerObject) => {
          pointerListener = listener as () => void;
        },
      ),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };

    window.matchMedia = vi.fn((query: string) =>
      query.includes("pointer: fine")
        ? pointerMedia
        : { ...pointerMedia, matches: false },
    ) as unknown as typeof window.matchMedia;

    try {
      render(<CursorDot />);
      expect(document.body).toHaveClass("custom-cursor");

      finePointer = false;
      act(() => pointerListener?.());

      expect(document.body).not.toHaveClass("custom-cursor");
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });
});
