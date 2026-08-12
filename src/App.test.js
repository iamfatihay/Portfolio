import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";

/*
 * A smoke test rather than a suite: it renders the whole page and checks the
 * things a visitor and a crawler both depend on — one h1, a working nav, and
 * every section actually arriving from its lazy chunk. Most of this page is
 * presentation, and a test that asserted on wording or layout would break on
 * every copy edit without ever catching a real fault.
 */
describe("App", () => {
    it("renders the hero immediately, outside any lazy boundary", async () => {
        render(<App />);

        // No await: the hero ships in the main bundle, so it is on screen on
        // the very first render rather than after a chunk resolves
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toHaveTextContent("Fatih Ay");

        // Let the lazy sections settle before the test tears the tree down
        await screen.findByRole("heading", { level: 2, name: "Award" });
    });

    it("links the primary navigation to every section", async () => {
        render(<App />);

        const nav = screen.getByRole("navigation", { name: /primary/i });
        const targets = within(nav)
            .getAllByRole("link")
            .map((link) => link.getAttribute("href"))
            .filter((href) => href?.startsWith("#"));

        expect(targets).toEqual(
            expect.arrayContaining([
                "#home",
                "#about",
                "#portfolio",
                "#achievements",
                "#skills",
                "#contact",
            ])
        );

        // Contact is the last lazy section, so once its heading is on screen
        // every anchor the nav points at should exist
        await screen.findByRole("heading", { name: /let's work together/i });

        for (const href of new Set(targets)) {
            expect(document.querySelector(href)).not.toBeNull();
        }
    });

    it("draws icons as inline SVG, with no icon-font markup left behind", async () => {
        render(<App />);
        // Level 2 so this picks the Award section, not the About card that
        // carries the same word as an h3
        await screen.findByRole("heading", { level: 2, name: "Award" });

        expect(document.querySelector("i[class*='bx']")).toBeNull();
        expect(document.querySelector("i[class*='uil']")).toBeNull();
        expect(document.querySelectorAll("svg").length).toBeGreaterThan(0);
    });
});
