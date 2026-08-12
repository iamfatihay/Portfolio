/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

/*
 * Emits the German document after CRA has built the English one.
 *
 * The app picks its language from the URL at runtime, which is enough for what
 * a visitor sees — but not for search. A crawler reads the <head> of the HTML
 * it is served, before any JavaScript runs, and so does every link preview in
 * Slack, LinkedIn and WhatsApp. If both languages shared one document, both
 * would advertise an English title and an English description, and Google
 * would have one URL to rank rather than two.
 *
 * So the German page is a real file at /de/index.html: same bundle, same
 * assets, its own head. Netlify serves it for /de and /de/ without a redirect
 * rule, because it exists on disk.
 */

const ORIGIN = "https://portfolio-fay-react.netlify.app";
const BUILD = path.join(__dirname, "..", "build");

/*
 * Head copy per language. The body copy lives in src/i18n — this is the half
 * that has to exist before React does, so it cannot come from there.
 *
 * The German wording is not a translation of the English line. It leads with
 * the terms someone hiring in Germany actually types ("Full-Stack-Entwickler",
 * "Webentwickler Stuttgart"), because the description is one of the few places
 * where the vocabulary of the search and the vocabulary of the page can be
 * made to meet.
 */
const LOCALES = {
    en: {
        lang: "en",
        ogLocale: "en_US",
        url: `${ORIGIN}/`,
        title: "Fatih Ay | Lead Web Developer in Stuttgart",
        description:
            "Lead Web Developer building production marketplaces, AI products and responsive websites with Symfony, Sylius, React and Python in Stuttgart, Germany.",
        ogTitle: "Fatih Ay | Lead Web Developer",
        ogDescription:
            "Production marketplaces, AI products and responsive websites—from architecture to release.",
        siteName: "Fatih Ay Portfolio",
        pageName: "Fatih Ay | Lead Web Developer in Stuttgart",
        siteDescription:
            "Selected production work, AI products and web projects by Fatih Ay.",
        imageAlt: "Fatih Ay, Lead Web Developer",
        noscript: "You need JavaScript enabled to view this portfolio.",
        appName: "Fatih Ay — Lead Web Developer Portfolio",
        appShortName: "Fatih Ay",
    },
    de: {
        lang: "de",
        ogLocale: "de_DE",
        url: `${ORIGIN}/de/`,
        title: "Fatih Ay | Full-Stack-Entwickler in Stuttgart",
        description:
            "Full-Stack-Entwickler in Stuttgart: B2B-Marktplätze, KI-Produkte und performante Websites mit Symfony, Sylius, React und Python — von der Architektur bis in den Produktivbetrieb.",
        ogTitle: "Fatih Ay | Full-Stack-Entwickler in Stuttgart",
        ogDescription:
            "B2B-Marktplätze, KI-Produkte und performante Websites — von der Architektur bis in den Produktivbetrieb.",
        siteName: "Fatih Ay Portfolio",
        pageName: "Fatih Ay | Full-Stack-Entwickler in Stuttgart",
        siteDescription:
            "Ausgewählte Projekte aus dem Produktivbetrieb, KI-Produkte und Web-Projekte von Fatih Ay, Webentwickler in Stuttgart.",
        imageAlt: "Fatih Ay, Full-Stack-Entwickler",
        noscript:
            "Für dieses Portfolio muss JavaScript aktiviert sein.",
        appName: "Fatih Ay — Portfolio als Full-Stack-Entwickler",
        appShortName: "Fatih Ay",
        manifest: "/de/manifest.json",
    },
};

/* Every page carries the full set, including a self-reference — that is what
   the spec asks for, and a one-way pair is the usual reason a pair is ignored */
const ALTERNATES = [
    `<link rel="alternate" hrefLANGATTR="en" href="${LOCALES.en.url}" />`,
    `<link rel="alternate" hrefLANGATTR="de" href="${LOCALES.de.url}" />`,
    `<link rel="alternate" hrefLANGATTR="x-default" href="${LOCALES.en.url}" />`,
]
    .join("\n  ")
    .replace(/hrefLANGATTR/g, "hreflang");

const replaceTag = (html, pattern, replacement) => {
    if (!pattern.test(html)) {
        throw new Error(`build-locales: nothing matched ${pattern}`);
    }
    return html.replace(pattern, replacement);
};

/*
 * The person is one person in both languages, so the Person node is left
 * untouched and both documents point at the same @id. Only the page and site
 * nodes are per-language: they describe this document, and this document has a
 * language and an address.
 */
function localiseGraph(json, locale) {
    const data = JSON.parse(json);
    const pageId = `${locale.url}#profilepage`;
    const siteId = `${locale.url}#website`;

    data["@graph"] = data["@graph"].map((node) => {
        if (node["@type"] === "WebSite") {
            return {
                ...node,
                "@id": siteId,
                url: locale.url,
                name: `${locale.siteName} — ${locale.pageName}`,
                description: locale.siteDescription,
                inLanguage: locale.lang,
            };
        }
        if (node["@type"] === "ProfilePage") {
            return {
                ...node,
                "@id": pageId,
                url: locale.url,
                name: locale.pageName,
                isPartOf: { "@id": siteId },
                inLanguage: locale.lang,
                dateModified: new Date().toISOString().slice(0, 10),
            };
        }
        return node;
    });

    return JSON.stringify(data, null, 2);
}

function render(html, locale) {
    let out = html;

    out = replaceTag(out, /<html lang="[^"]*">/, `<html lang="${locale.lang}">`);
    out = replaceTag(out, /<title>[^<]*<\/title>/, `<title>${locale.title}</title>`);
    out = replaceTag(
        out,
        /<meta name="description" content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${locale.description}" />`
    );
    out = replaceTag(
        out,
        /<link rel="canonical" href="[^"]*"\s*\/?>/,
        `<link rel="canonical" href="${locale.url}" />\n  ${ALTERNATES}`
    );
    out = replaceTag(
        out,
        /<meta property="og:locale" content="[^"]*"\s*\/?>/,
        `<meta property="og:locale" content="${locale.ogLocale}" />\n  ` +
            Object.values(LOCALES)
                .filter((other) => other.lang !== locale.lang)
                .map(
                    (other) =>
                        `<meta property="og:locale:alternate" content="${other.ogLocale}" />`
                )
                .join("\n  ")
    );
    out = replaceTag(
        out,
        /<meta property="og:url" content="[^"]*"\s*\/?>/,
        `<meta property="og:url" content="${locale.url}" />`
    );
    out = replaceTag(
        out,
        /<meta property="og:title" content="[^"]*"\s*\/?>/,
        `<meta property="og:title" content="${locale.ogTitle}" />`
    );
    out = replaceTag(
        out,
        /<meta property="og:description" content="[^"]*"\s*\/?>/,
        `<meta property="og:description" content="${locale.ogDescription}" />`
    );
    out = replaceTag(
        out,
        /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
        `<meta name="twitter:title" content="${locale.ogTitle}" />`
    );
    out = replaceTag(
        out,
        /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
        `<meta name="twitter:description" content="${locale.ogDescription}" />`
    );
    out = out.replace(
        /content="Fatih Ay, Lead Web Developer"/g,
        `content="${locale.imageAlt}"`
    );

    /*
     * The <noscript> fallback is the one piece of body copy that cannot come
     * from the dictionary: it is shown precisely when the bundle never runs.
     */
    out = replaceTag(
        out,
        /<noscript>[^<]*<\/noscript>/,
        `<noscript>${locale.noscript}</noscript>`
    );

    /*
     * Each language gets its own manifest. Sharing the root one meant a visitor
     * who installed the site from /de/ got an English name and, worse, a
     * start_url of "/" — the installed app opened the English page.
     */
    if (locale.manifest) {
        out = replaceTag(
            out,
            /<link rel="manifest" href="[^"]*"\s*\/?>/,
            `<link rel="manifest" href="${locale.manifest}" />`
        );
    }

    out = replaceTag(
        out,
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
        () =>
            `<script type="application/ld+json">\n${localiseGraph(
                graphSource,
                locale
            )}\n  </script>`
    );

    return out;
}

/*
 * Icon and start URLs are resolved against the manifest's own address, so a
 * manifest served from /de/ has to name them from the root or it would look
 * for /de/icon-192.png.
 */
function writeManifest(locale, dir) {
    const base = JSON.parse(
        fs.readFileSync(path.join(BUILD, "manifest.json"), "utf8")
    );

    const manifest = {
        ...base,
        name: locale.appName,
        short_name: locale.appShortName,
        description: locale.siteDescription,
        start_url: new URL(locale.url).pathname,
        lang: locale.lang,
        icons: base.icons.map((icon) => ({
            ...icon,
            src: icon.src.startsWith("/") ? icon.src : `/${icon.src}`,
        })),
    };

    fs.writeFileSync(
        path.join(dir, "manifest.json"),
        JSON.stringify(manifest, null, 2)
    );
}


const source = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
const graphMatch = source.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
);

if (!graphMatch) {
    throw new Error("build-locales: no JSON-LD block found in build/index.html");
}

const graphSource = graphMatch[1];

fs.writeFileSync(path.join(BUILD, "index.html"), render(source, LOCALES.en));

const deDir = path.join(BUILD, "de");
fs.mkdirSync(deDir, { recursive: true });
fs.writeFileSync(path.join(deDir, "index.html"), render(source, LOCALES.de));
writeManifest(LOCALES.de, deDir);

console.log(
    "build-locales: wrote build/index.html, build/de/index.html and build/de/manifest.json"
);
