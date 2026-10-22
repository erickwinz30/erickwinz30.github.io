import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Marquee } from "./Marquee";

describe("Marquee", () => {
  it("duplicates the stack for a seamless loop", () => {
    render(<Marquee />);
    expect(screen.getAllByText("Go")).toHaveLength(2);
    expect(screen.getAllByText("pgvector")).toHaveLength(2);
  });
});
