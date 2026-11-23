import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Facts } from "./Facts";
import { Principle } from "./Principle";
import { Bio } from "./Bio";

describe("Facts", () => {
  it("renders four production facts without count-up animation", () => {
    render(<Facts />);
    expect(screen.getByText("24/7")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("5x")).toBeInTheDocument();
    expect(screen.getByText("3x")).toBeInTheDocument();
    expect(screen.getAllByText(/stage automated follow-up funnel/i)).toHaveLength(1);
  });
});

describe("Principle", () => {
  it("renders the working principle as a quote", () => {
    render(<Principle />);
    expect(
      screen.getByText(/Reliability is a feature/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Working principle")).toBeInTheDocument();
  });
});

describe("Bio", () => {
  it("renders the about copy, portrait, and CV download", () => {
    render(<Bio />);
    expect(screen.getByRole("heading", { name: "About Erick." })).toBeInTheDocument();
    expect(screen.getByAltText("Erick Winata")).toBeInTheDocument();
    expect(
      screen.getByText(/Applied AI Engineer \| AI Automation & Production Systems/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/migrated production n8n CRM, WhatsApp, and API automation workflows into a Go backend and React dashboard/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Information Systems graduate/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Dinamika University (STIKOM Surabaya)" }),
    ).toHaveAttribute("href", "https://dinamika.ac.id/");
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/assets/Erick_Winata_Applied_AI_Engineer_CV_24-11-2026.pdf",
    );
  });
});
