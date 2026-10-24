import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders all five roles in reverse-chronological order", () => {
    render(<Experience />);
    expect(screen.getByRole("heading", { name: "Where I've worked." })).toBeInTheDocument();
    const companies = screen
      .getAllByTestId("experience-company")
      .map((node) => node.textContent);
    expect(companies).toEqual([
      "99.co",
      "PT. Prakarsa Alam Segar (Wings Food)",
      "Kenzou Drive Thru Car Wash",
      "Dicoding Indonesia",
      "Bfit Indonesia",
    ]);
  });

  it("keeps the original role details from the previous portfolio", () => {
    render(<Experience />);

    expect(
      screen.getByText(
        /Took over an existing production n8n lead-automation stack, then architected and built its Go\/React replacement — cutting processing latency from 1–2 minutes to seconds and eliminating low-code execution errors\./,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Implemented the Safety Stock method to optimize stock tracking.",
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("experience-detail")).toHaveLength(19);
  });
});
