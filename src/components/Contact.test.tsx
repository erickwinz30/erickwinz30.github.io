import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

describe("Contact", () => {
  it("renders the coral contact section with the real email", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: "Let's talk about the problem." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "erickwinz1008@gmail.com" }),
    ).toHaveAttribute("href", "mailto:erickwinz1008@gmail.com");
    expect(screen.getByText(/East Surabaya, Indonesia/)).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders identity, social links, and copyright", () => {
    render(<Footer />);
    expect(screen.getByText("ERICK WINATA")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/erick-winata-b59581235/",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/erickwinz30",
    );
    expect(screen.getByText("© 2026")).toBeInTheDocument();
  });
});
