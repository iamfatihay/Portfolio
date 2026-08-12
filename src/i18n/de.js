/*
 * The German copy behind /de/. It mirrors src/i18n/en.js key for key — a
 * missing key is a missing sentence on the page, so the shape is the contract.
 *
 * Translated rather than transliterated: the German page addresses employers
 * and clients in Germany, so it uses the terms they search for and read
 * ("Full Stack Entwickler", "B2B-Marktplatz") instead of a word-for-word
 * rendering of the English. Product names, technologies and the job titles
 * that the German market itself uses in English stay as they are.
 */
const de = {
    locale: "de",
    htmlLang: "de",

    common: {
        skipLink: "Zum Hauptinhalt springen",
        loading: "Portfolio wird geladen …",
        loadingFooter: "Fußzeile wird geladen …",
        errorTitle: "Etwas ist schiefgelaufen.",
        errorBody:
            "Bitte laden Sie die Seite neu oder versuchen Sie es später erneut.",
        errorButton: "Seite neu laden",
        backToTop: "Fatih Ay — zurück nach oben",
        scrollUp: "Zurück nach oben",
        languageSwitch: "Language: English",
    },

    nav: {
        label: "Hauptnavigation",
        open: "Navigation öffnen",
        close: "Navigation schließen",
        home: "Start",
        about: "Über mich",
        work: "Projekte",
        award: "Auszeichnung",
        skills: "Skills",
        contact: "Kontakt",
    },

    hero: {
        eyebrow: "Stuttgart, Deutschland · Lead Web Developer",
        greeting: "Hallo, ich bin",
        name: "Fatih Ay",
        subtitle: "Full Stack Entwickler",
        description:
            "Ich entwickle belastbare Marktplätze, KI-gestützte Produkte und conversion-starke Websites — von der Architektur bis in den Produktivbetrieb.",
        primaryCta: "Projekte ansehen",
        secondaryCta: "Kontakt aufnehmen",
        portraitAlt: "Fatih Ay, Lead Web Developer aus Stuttgart",
        scrollDown: "Nach unten",
        scrollAria: "Zum Abschnitt „Über mich“ scrollen",
        profileLink: (network) => `Fatih Ay auf ${network}`,
    },

    about: {
        title: "Über mich",
        subtitle: "Der Mensch hinter den Produkten",
        imageAlt: "Fatih Ay, Full Stack Entwickler",
        paragraphs: [
            "Ich bin Full Stack Entwickler und übernehme gern den gesamten Weg: von der noch unklaren Idee bis zum verlässlichen Release im Produktivbetrieb. Bei Hyfindr arbeite ich an Frontend, Backend, Suche, Infrastruktur und Deployment für B2B- und KI-Produkte.",
            "Neben der Softwareentwicklung prägt mich der Wing-Tsun-Unterricht: ruhig bleiben, schnell umdenken und Komplexes für andere verständlich machen.",
        ],
        cv: "Lebenslauf herunterladen",
        info: [
            { title: "Fokus", subtitle: "Produkte im Einsatz" },
            { title: "Umfang", subtitle: "End-to-end-Umsetzung" },
            { title: "Auszeichnung", subtitle: "Hackathon · 1. Platz" },
        ],
    },

    work: {
        title: "Ausgewählte Projekte",
        subtitle: "Zuerst der Produktivbetrieb, dann die Experimente",
        earlier: "Frühere Projekte",
        showArchive: "Weitere Projekte",
        hideArchive: "Projekte ausblenden",
        stack: (project) => `Technologien von ${project}`,
        view: (project) => `${project} ansehen`,
        demo: (project) => `${project} live ansehen`,
        source: (project) => `Quellcode von ${project}`,
        statuses: {
            live: "Live",
            building: "In Entwicklung",
            internal: "Intern",
            award: "1. Platz",
        },
        projects: {
            hyfindr: {
                role: "Lead Web Developer",
                period: "Okt. 2023 – heute",
                description:
                    "Ein produktiver B2B-Marktplatz für die Wasserstoffwirtschaft mit weltweiter Nutzung. Ich verantworte die Full-Stack-Umsetzung von Commerce, Suche, Performance und Release-Prozessen.",
                proof: "Im Produktivbetrieb, mit laufendem Handel.",
                tags: ["Symfony", "Sylius", "PHP", "Elasticsearch", "Docker"],
                actions: ["Website ansehen", "LinkedIn"],
            },
            "hidden-champions": {
                role: "Design & Entwicklung",
                period: "2026",
                description:
                    "Eine conversion-orientierte deutsche Website für sichere KI-Agenten im Mittelstand — mit interaktiven Prozessvergleichen und klar erzählten Leistungen.",
                proof: "Live, und von mir end-to-end umgesetzt.",
                tags: ["JavaScript", "CSS", "Interaction Design", "SEO"],
                actions: ["Website ansehen"],
            },
            volo: {
                role: "App für Podcast-Aufnahme und -Schnitt",
                period: "2026 · In Entwicklung",
                description:
                    "Zwei Personen an zwei Orten nehmen ein Gespräch auf und veröffentlichen die fertige Folge aus einer App. Die Aufnahme läuft serverseitig mit einer Spur pro Person — eine abbrechende Verbindung kostet damit nie die Aufnahme.",
                proof: "Kompletter Ablauf auf einem echten Gerät aufgenommen, geschnitten und veröffentlicht.",
                tags: ["React Native", "Expo", "FastAPI", "PostgreSQL", "100ms"],
                actions: ["Produkt-Demo anfragen"],
            },
            prototype: {
                role: "KI-Prototyp · internes Werkzeug",
                period: "2024",
                description:
                    "Ein internes KI-Produkt, das ein React-Interface und eine Python-KI/API-Schicht an die zentrale PHP-Anwendung von Hyfindr anbindet.",
                proof: "Zugang nur mit Login · Vorführung auf Anfrage.",
                tags: ["React", "Python", "KI/ML", "REST API"],
                actions: ["Vorführung anfragen"],
            },
            hackathon: {
                role: "Liebherr-Mining-Challenge · BadenCampus",
                period: "Mai 2025 · Freiburg",
                description:
                    "Eine KI-gestützte Plattform, in 48 Stunden für eine reale Liebherr-Mining-Challenge gebaut und von der Jury auf den ersten Platz gewählt.",
                proof: "Von der Jury auf Platz 1 gewählt — Fotos und Story unten.",
                tags: ["Vite + React", "KI/ML", "48 Stunden"],
                actions: ["Ergebnis ansehen", "Beitrag lesen"],
            },
        },
    },

    award: {
        title: "Auszeichnung",
        subtitle: "Ein Ergebnis, das hervorsticht",
        eyebrow: "Black Forest Hackathon · Mai 2025",
        headline: "1. Platz",
        headlineSub: "vor allen anderen Teams im Raum",
        description:
            "Unser Team hat in 48 Stunden eine KI-gestützte Lösung für eine Liebherr-Mining-Challenge entworfen und gebaut — und damit den ersten Platz gewonnen.",
        stats: [
            { value: "48 Std.", label: "Durchgehend gebaut" },
            { value: "3.000 €", label: "Preisgeld" },
            { value: "Liebherr", label: "Mining-Challenge" },
        ],
        photosLabel: "Fotos zur Auszeichnung",
        showPhoto: (position, total, title) =>
            `Foto ${position} von ${total} anzeigen: ${title}`,
        slides: [
            {
                alt: "Die Gewinner des Hackathons mit dem Preisscheck",
                title: "Gewinner des 1. Platzes",
                caption: "Preisscheck über 3.000 € — Team Hyfindr",
            },
            {
                alt: "Teamarbeit während des Hackathons",
                title: "Konzentrierte Zusammenarbeit",
                caption: "48 Stunden Teamarbeit und Innovation",
            },
            {
                alt: "Das Siegerteam feiert",
                title: "Der Sieg wird gefeiert",
                caption: "Gemeinsamer Erfolg mit dem Siegerteam",
            },
            {
                alt: "Veranstaltungsort und Teilnehmende des Black Forest Hackathon",
                title: "Veranstaltungsort",
                caption: "Black Forest Hackathon — Liebherr-Mining-Challenge",
            },
        ],
    },

    skills: {
        title: "Technischer Schwerpunkt",
        subtitle: "Womit ich arbeite",
        listLabel: (group) => `Technologien: ${group}`,
        groups: {
            backend: {
                title: "Backend & Commerce",
                description:
                    "Geschäftslogik, APIs und datenintensive Commerce-Plattformen.",
            },
            frontend: {
                title: "Frontend",
                description:
                    "Responsive Oberflächen, die übersichtlich und wartbar bleiben.",
            },
            design: {
                title: "UI & Design",
                description:
                    "Von der Design-Übergabe bis zu Komponentenbibliotheken, die mitwachsen.",
            },
            data: {
                title: "Daten & Suche",
                description:
                    "Verlässliche Persistenz, Caching, Auffindbarkeit und Integration.",
            },
            infrastructure: {
                title: "Infrastruktur & Deployment",
                description:
                    "Wo die Anwendung läuft — und wie sie in den Produktivbetrieb kommt.",
            },
            quality: {
                title: "Zusammenarbeit & Qualität",
                description:
                    "Ein Team ausgerichtet halten und die Arbeit getestet, schnell und auffindbar machen.",
            },
        },
    },

    experience: {
        title: "Berufserfahrung",
        subtitle: "Ein klarer Weg in den Produktivbetrieb",
        items: [
            {
                period: "Okt. 2023 — heute",
                title: "Lead Web Developer",
                organisation: "Hyfindr GmbH · Stuttgart",
                description:
                    "Verantwortung für die Full-Stack-Umsetzung eines produktiven B2B-Marktplatzes und für KI-Initiativen — über Symfony, Sylius, React, Suche und Infrastruktur hinweg.",
            },
            {
                period: "2022 — 2023",
                title: "Full-Stack-Developer-Programm",
                organisation: "Clarusway · Stuttgart",
                description:
                    "Intensive Ausbildung in der Softwareentwicklung: modernes Frontend, Backends mit Python/Django, Datenbanken und Arbeiten im Team.",
            },
        ],
    },

    contact: {
        title: "Lassen Sie uns zusammenarbeiten",
        subtitle: "Erzählen Sie mir von Ihrem Vorhaben",
        directTitle: "Direkter Kontakt",
        formTitle: "Projekt beschreiben",
        emailTitle: "E-Mail",
        emailCta: "E-Mail schreiben",
        whatsappTitle: "WhatsApp",
        whatsappCta: "Chat starten",
        whatsappText: "Hallo Fatih, ich würde gern über ein Projekt sprechen.",
        nameLabel: "Name",
        namePlaceholder: "Ihr Name",
        emailLabel: "E-Mail",
        emailPlaceholder: "name@beispiel.de",
        projectLabel: "Projekt",
        projectPlaceholder: "Kurz umrissen: worum geht es?",
        submit: "Nachricht senden",
        submitting: "Wird gesendet …",
        successToast: "Danke — Ihre Nachricht ist unterwegs.",
        errorToast:
            "Die Nachricht konnte nicht gesendet werden. Schreiben Sie mir bitte direkt eine E-Mail.",
        unavailableToast:
            "Das Formular ist vorübergehend nicht verfügbar. Bitte nutzen Sie E-Mail oder WhatsApp.",
    },

    footer: {
        sponsor: "Sponsor",
        coffee: "Spendier mir einen Kaffee",
        builtWith: "Gebaut mit React",
    },
};

export default de;
