/*
 * Every string a visitor can read, in one place. Components take their copy
 * from here rather than holding it inline, so a second language is a second
 * file rather than a second set of components.
 *
 * Entries are functions where a value is interpolated — that keeps word order
 * a property of the language rather than of the component doing the joining.
 */
const en = {
    locale: "en",
    htmlLang: "en",

    common: {
        skipLink: "Skip to main content",
        loading: "Loading portfolio...",
        loadingFooter: "Loading footer...",
        errorTitle: "Something went wrong.",
        errorBody: "Please refresh the page or try again later.",
        errorButton: "Refresh Page",
        backToTop: "Fatih Ay — back to top",
        scrollUp: "Back to top",
        /* Written in the language it switches to, so it is legible to someone
           who cannot read the current one */
        languageSwitch: "Sprache: Deutsch",
    },

    nav: {
        label: "Primary navigation",
        open: "Open navigation",
        close: "Close navigation",
        home: "Home",
        about: "About",
        work: "Work",
        award: "Award",
        skills: "Skills",
        contact: "Contact",
    },

    hero: {
        eyebrow: "Stuttgart, Germany · Lead Web Developer",
        greeting: "Hi, I'm",
        name: "Fatih Ay",
        subtitle: "Full Stack Developer",
        description:
            "I build reliable marketplaces, AI-powered products and conversion-focused websites—from architecture to production.",
        primaryCta: "View selected work",
        secondaryCta: "Contact me",
        portraitAlt: "Fatih Ay, Lead Web Developer based in Stuttgart",
        scrollDown: "Scroll Down",
        scrollAria: "Scroll to the about section",
        profileLink: (network) => `Fatih Ay on ${network}`,
    },

    about: {
        title: "About Me",
        subtitle: "The person behind the products",
        imageAlt: "Fatih Ay, Full Stack Developer",
        paragraphs: [
            "I'm a full stack developer who enjoys owning the whole path from an ambiguous idea to a dependable production release. At Hyfindr, I work across frontend, backend, search, infrastructure and delivery for B2B and AI products.",
            "Outside software, teaching Wing Tsun has shaped how I lead: stay calm, adapt quickly and make complex things easier for others to understand.",
        ],
        cv: "Download CV",
        info: [
            { title: "Focus", subtitle: "Production products" },
            { title: "Scope", subtitle: "End-to-end delivery" },
            { title: "Award", subtitle: "Hackathon · 1st" },
        ],
    },

    work: {
        title: "Selected Work",
        subtitle: "Production impact first, experiments second",
        earlier: "Earlier Projects",
        showArchive: "More Projects",
        hideArchive: "Hide Projects",
        stack: (project) => `${project} stack`,
        view: (project) => `View ${project}`,
        demo: (project) => `${project} live demo`,
        source: (project) => `${project} source code`,
        statuses: {
            live: "Live",
            building: "In development",
            internal: "Internal",
            award: "1st place",
        },
        projects: {
            "hyfindr-map": {
                role: "Lead Full-Stack Engineer · design to deployment",
                period: "Sep 2026 · Just launched",
                description:
                    "An interactive world map of hydrogen suppliers inside the Hyfindr marketplace. I led it from the first design to production, owning UX & UI, frontend, backend and deployment.",
                highlights: [
                    "Hydrogen suppliers worldwide, pinned in one place",
                    "Filters for components, equipment, systems, services and materials",
                    "Company profiles with products and direct supplier contact",
                    "Reachable from the main navigation and a new homepage banner",
                ],
                proof: "Shipped on schedule and live in production.",
                tags: ["UX & UI Design", "Frontend", "Backend", "Deployment"],
                actions: ["Explore on hyfindr.com"],
            },
            hyfindr: {
                role: "Lead Web Developer",
                period: "Oct 2023 – Present",
                description:
                    "A production B2B hydrogen marketplace serving a global industry. I lead full stack delivery across commerce, search, performance and release workflows.",
                proof: "In production and trading today.",
                tags: ["Symfony", "Sylius", "PHP", "Elasticsearch", "Docker"],
                actions: ["Visit site", "LinkedIn"],
            },
            "hidden-champions": {
                role: "Design & development",
                period: "2026",
                description:
                    "A conversion-focused German site for secure AI agents in the Mittelstand, built around interactive process comparisons and clear service storytelling.",
                proof: "Live, and shipped end to end by me.",
                tags: ["JavaScript", "CSS", "Interaction Design", "SEO"],
                actions: ["Visit site"],
            },
            volo: {
                role: "Podcast recording & editing app",
                period: "2026 · In build",
                description:
                    "Two people in two places record a conversation and publish a finished episode from one app. Recording runs on the server with a track per speaker, so a dropped connection never costs the take.",
                proof: "Full flow recorded, edited and published on a real device.",
                tags: ["React Native", "Expo", "FastAPI", "PostgreSQL", "100ms"],
                actions: ["Request a product tour"],
            },
            prototype: {
                role: "AI prototype · internal tool",
                period: "2024",
                description:
                    "An internal AI product joining a React interface and a Python AI/API layer to Hyfindr's main PHP application.",
                proof: "Login-restricted · walkthrough available on request.",
                tags: ["React", "Python", "AI/ML", "REST API"],
                actions: ["Request a walkthrough"],
            },
            hackathon: {
                role: "Liebherr Mining challenge · BadenCampus",
                period: "May 2025 · Freiburg",
                description:
                    "An AI-powered platform built for a real Liebherr Mining challenge in 48 hours, judged first place against competing teams.",
                proof: "Judged first place — photos and the story below.",
                tags: ["Vite + React", "AI/ML", "48 hours"],
                actions: ["See the result", "Read the post"],
            },
        },
    },

    award: {
        title: "Award",
        subtitle: "One result worth highlighting",
        eyebrow: "Black Forest Hackathon · May 2025",
        headline: "1st Place",
        headlineSub: "out of every team in the room",
        description:
            "Our team designed and built an AI-powered solution for a Liebherr Mining challenge in 48 hours—and won first place.",
        stats: [
            { value: "48h", label: "Non-stop build" },
            { value: "3,000 €", label: "Prize awarded" },
            { value: "Liebherr", label: "Mining challenge" },
        ],
        photosLabel: "Award photos",
        showPhoto: (position, total, title) =>
            `Show photo ${position} of ${total}: ${title}`,
        slides: [
            {
                alt: "Hackathon winners holding the prize check",
                title: "1st Place Winner",
                caption: "Prize check for 3,000 € — Team Hyfindr",
            },
            {
                alt: "Team collaboration during the hackathon",
                title: "Intense Collaboration",
                caption: "48 hours of dedicated teamwork and innovation",
            },
            {
                alt: "Winning team celebration",
                title: "Victory Celebration",
                caption: "Celebrating success with the winning team",
            },
            {
                alt: "Black Forest Hackathon venue and participants",
                title: "Event Venue",
                caption: "Black Forest Hackathon — Liebherr Mining Challenge",
            },
        ],
    },

    skills: {
        title: "Technical Focus",
        subtitle: "The tools I use to ship",
        listLabel: (group) => `${group} technologies`,
        groups: {
            backend: {
                title: "Backend & commerce",
                description:
                    "Business logic, APIs and data-heavy commerce platforms.",
            },
            frontend: {
                title: "Frontend",
                description:
                    "Responsive interfaces that stay clear and maintainable.",
            },
            design: {
                title: "UI & design",
                description:
                    "Design handoff through to component libraries that scale.",
            },
            data: {
                title: "Data & search",
                description:
                    "Reliable persistence, caching, discovery and integration.",
            },
            infrastructure: {
                title: "Infrastructure & delivery",
                description:
                    "Where the work runs, and how it gets to production.",
            },
            quality: {
                title: "Collaboration & quality",
                description:
                    "Keeping a team aligned and the work tested, fast and findable.",
            },
        },
    },

    experience: {
        title: "Experience",
        subtitle: "A focused path into production",
        items: [
            {
                period: "Oct 2023 — Present",
                title: "Lead Web Developer",
                organisation: "Hyfindr GmbH · Stuttgart",
                description:
                    "Leading full stack delivery for a production B2B marketplace and AI initiatives across Symfony, Sylius, React, search and infrastructure.",
            },
            {
                period: "2022 — 2023",
                title: "Full Stack Developer Program",
                organisation: "Clarusway · Stuttgart",
                description:
                    "Intensive software development training spanning modern frontend, Python/Django backends, databases and team delivery.",
            },
        ],
    },

    contact: {
        title: "Let's Work Together",
        subtitle: "Tell me what you're building",
        directTitle: "Direct contact",
        formTitle: "Send a project brief",
        emailTitle: "Email",
        emailCta: "Write an email",
        whatsappTitle: "WhatsApp",
        whatsappCta: "Start a chat",
        whatsappText: "Hi Fatih, I'd like to talk about a project.",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        projectLabel: "Project",
        projectPlaceholder: "A short outline of your project",
        submit: "Send message",
        submitting: "Sending…",
        successToast: "Thanks—your message has been sent.",
        errorToast:
            "The message could not be sent. Please email me directly instead.",
        unavailableToast:
            "The form is temporarily unavailable. Please use email or WhatsApp.",
    },

    footer: {
        sponsor: "Sponsor",
        coffee: "Buy me a coffee",
        builtWith: "Built with React",
    },
};

export default en;
