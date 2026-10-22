import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the full portfolio in one page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Erick Winata" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Selected work." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Where I've worked." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "What I work with." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "About Erick." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Let's talk about the problem." }),
    ).toBeInTheDocument();
  });

  it("provides a skip link to the main content", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#main",
    );
  });
});
