import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("exposes one accessible name and the positioning statement", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: "Erick Winata" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I turn messy operations into reliable software/i),
    ).toBeInTheDocument();
  });

  it("links to selected work and the current CV", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: "See selected work" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/assets/CV_ATS_ErickWinata_English_25-10-2026.pdf",
    );
  });
});
