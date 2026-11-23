import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("exposes one accessible name and the applied AI positioning statement", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: "Erick Winata" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Applied AI Engineer \| AI Automation & Production Systems/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /I build conversational AI, multi-tenant RAG, and lead automation systems backed by Go services and React dashboards\./i,
      ),
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
      "/assets/Erick_Winata_Applied_AI_Engineer_CV_24-11-2026.pdf",
    );
  });
});
