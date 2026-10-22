import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the desktop navigation and contact call to action", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getAllByRole("link", { name: "Let's talk" })[0]).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("opens and closes the mobile menu with the keyboard", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "Menu" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog", { name: "Menu" })).not.toBeInTheDocument();
  });

  it("moves focus into the menu and traps it there", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    await user.click(menuButton);

    const dialog = screen.getByRole("dialog", { name: "Menu" });
    const links = within(dialog).getAllByRole("link");
    const closeButton = screen.getByRole("button", { name: "Close menu" });

    expect(links[0]).toHaveFocus();

    links[links.length - 1].focus();
    await user.tab();
    expect(closeButton).toHaveFocus();

    await user.tab({ shift: true });
    expect(links[links.length - 1]).toHaveFocus();
  });
});
