import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { CopyProvider, LOCALES, detectLocale } from "./i18n";

/*
 * Seven sections arrive from their own lazy chunks, and on a loaded machine
 * resolving all of them can outrun findBy's 1s default — which showed up as an
 * occasional failure rather than a real one. The wait is generous; a section
 * that never arrives still fails the test.
 */
const LAZY_TIMEOUT = { timeout: 5000 };

const renderApp = (locale = "en") =>
    render(
        <CopyProvider locale={locale}>
            <App />
        </CopyProvider>
    );

/*
 * A smoke test rather than a suite: it renders the whole page and checks the
 * things a visitor and a crawler both depend on — one h1, a working nav, and
 * every section actually arriving from its lazy chunk. Most of this page is
 * presentation, and a test that asserted on wording or layout would break on
 * every copy edit without ever catching a real fault.
 */
describe("App", () => {
    it("renders the hero immediately, outside any lazy boundary", async () => {
        renderApp();

        // No await: the hero ships in the main bundle, so it is on screen on
        // the very first render rather than after a chunk resolves
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toHaveTextContent("Fatih Ay");

        // Let the lazy sections settle before the test tears the tree down
        await screen.findByRole("heading", { level: 2, name: "Award" }, LAZY_TIMEOUT);
    });

    it("links the primary navigation to every section", async () => {
        renderApp();

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
        await screen.findByRole(
            "heading",
            { name: /let's work together/i },
            LAZY_TIMEOUT
        );

        for (const href of new Set(targets)) {
            expect(document.querySelector(href)).not.toBeNull();
        }
    });

    it("draws icons as inline SVG, with no icon-font markup left behind", async () => {
        renderApp();
        // Level 2 so this picks the Award section, not the About card that
        // carries the same word as an h3
        await screen.findByRole("heading", { level: 2, name: "Award" }, LAZY_TIMEOUT);

        expect(document.querySelector("i[class*='bx']")).toBeNull();
        expect(document.querySelector("i[class*='uil']")).toBeNull();
        expect(document.querySelectorAll("svg").length).toBeGreaterThan(0);
    });
});

/*
 * The German page is a separate document, so the things worth testing are the
 * two joints where it could quietly fall back to English: the URL that decides
 * the language, and the dictionaries that have to agree on their shape.
 */
describe("German", () => {
    it("reads the language out of the path", () => {
        expect(detectLocale("/")).toBe("en");
        expect(detectLocale("/de")).toBe("de");
        expect(detectLocale("/de/")).toBe("de");
        // A path that merely starts with the same letters is not German
        expect(detectLocale("/design")).toBe("en");
    });

    it("renders the whole page in German", async () => {
        renderApp("de");

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
            "Hallo, ich bin"
        );
        await screen.findByRole(
            "heading",
            { level: 2, name: "Auszeichnung" },
            LAZY_TIMEOUT
        );
        await screen.findByRole(
            "heading",
            { level: 2, name: /Lassen Sie uns zusammenarbeiten/ },
            LAZY_TIMEOUT
        );
    });

    it("offers the other language as a real link", () => {
        renderApp("de");
        const toEnglish = screen.getByRole("link", { name: /English/ });
        expect(toEnglish).toHaveAttribute("href", "/");
        expect(toEnglish).toHaveAttribute("hreflang", "en");
    });

    /*
     * A key present in one dictionary and missing in the other is a blank on
     * the page rather than an error, so compare their shapes directly.
     */
    it("keeps both dictionaries the same shape", () => {
        const shape = (value, path = "") =>
            value && typeof value === "object"
                ? Object.entries(value).flatMap(([key, child]) =>
                      shape(child, `${path}.${key}`)
                  )
                : [`${path}:${typeof value}`];

        expect(shape(LOCALES.de)).toEqual(shape(LOCALES.en));
    });
});
