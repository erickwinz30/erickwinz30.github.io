import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders all eight selected projects", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: "Selected work." })).toBeInTheDocument();
    expect(screen.getByText(/Eight systems, built end to end\./i)).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(8);
    expect(screen.getByRole("heading", { name: /99\.co/ })).toBeInTheDocument();
    const logo = screen.getByRole("img", { name: "99.co logo" });
    expect(logo).toHaveAttribute(
      "src",
      "/assets/img/portfolio/99co/99co-logo.png",
    );
    expect(logo).toHaveAttribute("width", "738");
    expect(logo).toHaveAttribute("height", "294");
    expect(logo).toHaveClass("w-3/5", "max-w-72", "h-auto");
    const panel = logo.parentElement;
    expect(panel).toHaveClass("bg-white");
    expect(screen.queryByText("99")).not.toBeInTheDocument();
    expect(screen.queryByText("99.co logo")).not.toBeInTheDocument();
    expect(screen.getByText("AI Platform")).toHaveClass("text-[#07183a]");
    expect(screen.getByText("Go + React")).toHaveClass("text-[#07183a]");
    expect(screen.getByText("01")).toHaveClass("text-[#07183a]");
    expect(screen.getByText("HR")).toBeInTheDocument();
    expect(screen.getByText("Internal system")).toHaveClass("text-muted-foreground");
    expect(screen.getByText("04")).toHaveClass("text-primary");
    expect(
      screen.getByText(
        /Migrating n8n workflows cut processing time from 1–2 minutes to seconds\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /The WhatsApp chatbot and voice caller helped deliver 5× higher lead connectivity and 3× higher customer interest rates\./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Attendance App" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Simple Ecommerce" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Internal HR & Employee Onboarding System",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Kenzou Drive Thru Car Wash" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Calculus - Calorie Tracking App" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Warehouse Inventory" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "GagasKit" })).toBeInTheDocument();
    expect(
      screen.getByText(
        "GagasKit turns a product idea into a versioned, human-approved starter scaffold. This demo uses deterministic offline agents.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/computer hardware products/i)).toBeInTheDocument();
    expect(screen.getAllByText("Asynq")).toHaveLength(2);
    expect(screen.getByText("Retell AI")).toBeInTheDocument();
    expect(screen.getByText("Gupshup")).toBeInTheDocument();
    expect(screen.getByText("Golang")).toBeInTheDocument();
    const kenzouWalkthroughLink = screen.getByRole("link", {
      name: /watch walkthrough for kenzou drive thru car wash/i,
    });
    expect(kenzouWalkthroughLink).toHaveAttribute(
      "href",
      "/assets/img/portfolio/kenzou-app-screenshot/kenzou-walkthrough.mp4",
    );
    expect(kenzouWalkthroughLink).toHaveAttribute("target", "_blank");
    expect(kenzouWalkthroughLink).toHaveAttribute("rel", "noopener noreferrer");
    const walkthroughLink = screen.getByRole("link", {
      name: /watch walkthrough for gagaskit/i,
    });
    expect(walkthroughLink).toHaveAttribute(
      "href",
      "/assets/img/portfolio/gagaskit/docuflow.mp4",
    );
    expect(walkthroughLink).toHaveAttribute("target", "_blank");
    expect(walkthroughLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("opens the flagship technical breakdown for keyboard users", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const toggle = screen.getByRole("button", { name: /read the breakdown/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/tenant-scoped retrieval/i)).toBeInTheDocument();
  });

  it("keeps card actions explicit and only marks external actions", () => {
    const { container } = render(<Projects />);
    const cards = container.querySelectorAll("article");

    expect(cards[0].querySelectorAll('[data-cursor="view"]')).toHaveLength(0);
    expect(cards[1].querySelectorAll('[data-cursor="view"]')).toHaveLength(1);
    expect(cards[2].querySelectorAll('[data-cursor="view"]')).toHaveLength(2);
    expect(cards[3].querySelectorAll('[data-cursor="view"]')).toHaveLength(0);
    expect(cards[4].querySelectorAll('[data-cursor="view"]')).toHaveLength(1);
    expect(cards[5].querySelectorAll('[data-cursor="view"]')).toHaveLength(1);
    expect(cards[6].querySelectorAll('[data-cursor="view"]')).toHaveLength(0);
    expect(cards[7].querySelectorAll('[data-cursor="view"]')).toHaveLength(1);
  });
});
