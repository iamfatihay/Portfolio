import Work1 from "../../assets/blog-app-preview.webp";
import Work2 from "../../assets/stockApp-preview.webp";
import Work3 from "../../assets/movieapp-preview.webp";
import Work4 from "../../assets/youtube-preview.webp";
import Hackathon from "../../assets/hackathon1.webp";
import HiddenChampionsMark from "../../assets/hidden-champions-mark.svg";

/*
 * Ordered by how much of it a visitor can verify: two live products, a mobile
 * app mid-build, an internal tool, then an awarded 48-hour build. Each carries
 * the strongest proof it has, so the ones without a public URL still stand up.
 */
export const leadProjects = [
    {
        id: "hyfindr",
        status: "live",
        title: "hyfindr.com",
        role: "Lead Web Developer",
        period: "Oct 2023 – Present",
        description:
            "A production B2B hydrogen marketplace serving a global industry. I lead full stack delivery across commerce, search, performance and release workflows.",
        tags: ["Symfony", "Sylius", "PHP", "Elasticsearch", "Docker"],
        proof: "In production and trading today.",
        actions: [
            { label: "Visit site", href: "https://hyfindr.com", icon: "bx-right-arrow-alt" },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/fatih-ay1661/",
                icon: "bxl-linkedin",
            },
        ],
    },
    {
        id: "hidden-champions",
        status: "live",
        title: "hidden-champions.ai",
        role: "Design & development",
        period: "2026",
        description:
            "A conversion-focused German site for secure AI agents in the Mittelstand, built around interactive process comparisons and clear service storytelling.",
        tags: ["JavaScript", "CSS", "Interaction Design", "SEO"],
        media: HiddenChampionsMark,
        mediaFit: "contain",
        proof: "Live, and shipped end to end by me.",
        actions: [
            {
                label: "Visit site",
                href: "https://hidden-champions.ai",
                icon: "bx-right-arrow-alt",
            },
        ],
    },
    {
        id: "volo",
        status: "building",
        title: "Volo",
        role: "Podcast recording & editing app",
        period: "2026 · In build",
        description:
            "Two people in two places record a conversation and publish a finished episode from one app. Recording runs on the server with a track per speaker, so a dropped connection never costs the take.",
        tags: ["React Native", "Expo", "FastAPI", "PostgreSQL", "100ms"],
        proof: "Full flow recorded, edited and published on a real device.",
        actions: [
            {
                label: "Request a product tour",
                href: "#contact",
                icon: "bx-down-arrow-alt",
            },
        ],
    },
];

export const supportingProjects = [
    {
        id: "prototype",
        status: "internal",
        title: "prototype.hyfindr.ai",
        role: "AI prototype · internal tool",
        period: "2024",
        description:
            "An internal AI product joining a React interface and a Python AI/API layer to Hyfindr's main PHP application.",
        tags: ["React", "Python", "AI/ML", "REST API"],
        proof: "Login-restricted · walkthrough available on request.",
        actions: [
            {
                label: "Request a walkthrough",
                href: "#contact",
                icon: "bx-down-arrow-alt",
            },
        ],
    },
    {
        id: "hackathon",
        status: "award",
        media: Hackathon,
        title: "Black Forest Hackathon",
        role: "Liebherr Mining challenge · BadenCampus",
        period: "May 2025 · Freiburg",
        description:
            "An AI-powered platform built for a real Liebherr Mining challenge in 48 hours, judged first place against competing teams.",
        tags: ["Vite + React", "AI/ML", "48 hours"],
        proof: "Judged first place — photos and the story below.",
        actions: [
            { label: "See the result", href: "#achievements", icon: "bx-down-arrow-alt" },
            {
                /*
                 * The post itself, not the profile: this card trades a live URL
                 * for evidence, and a profile is a destination rather than
                 * evidence — it would leave the visitor hunting for a 2025 post.
                 */
                label: "Read the post",
                href: "https://www.linkedin.com/posts/fatih-ay1661_hackathon-hackathonwinner-liebherr-ugcPost-7327664859356028929-aasy/",
                icon: "bxl-linkedin",
            },
        ],
    },
];

export const featuredProjects = [
    {
        id: 1,
        image: Work1,
        title: "Blog App",
        tags: ["React", "Redux", "Django"],
        link: "https://fatihay-blog-app.vercel.app/",
        link2: "https://github.com/iamfatihay/Blog-App",
    },
    {
        id: 2,
        image: Work2,
        title: "Stock App",
        tags: ["React", "Redux Toolkit", "Django"],
        link: "https://stock-app-fay.vercel.app/",
        link2: "https://github.com/iamfatihay/Stock-app",
    },
    {
        id: 3,
        image: Work3,
        title: "Movie App",
        tags: ["React", "TMDB API"],
        link: "https://movie-app-react-fay.netlify.app/",
        link2: "https://github.com/iamfatihay/Movie-app",
    },
    {
        id: 4,
        image: Work4,
        title: "YouTube Clone",
        tags: ["React", "YouTube API"],
        link: "https://youtube-clone-app-fay.vercel.app/",
        link2: "https://github.com/iamfatihay/youtube-clone-app",
    },
];

export const archiveProjects = [
    {
        id: 5,
        title: "Recipe App",
        tags: ["React", "API"],
        link: "https://recipe-app-fay.vercel.app/",
        link2: "https://github.com/iamfatihay/Recipe-App",
    },
    {
        id: 6,
        title: "Countries App",
        tags: ["React", "REST API"],
        link: "https://countries-react-app-fay.netlify.app/",
        link2: "https://github.com/iamfatihay/Countries-App",
    },
    {
        id: 7,
        title: "NBA Legends",
        tags: ["React", "JSON"],
        link: "https://nba-legends-app-fay.netlify.app/",
        link2: "https://github.com/iamfatihay/NBA-legends-app",
    },
    {
        id: 8,
        title: "E-commerce Store",
        tags: ["React", "Context API"],
        link: "https://anazon-store-app.vercel.app",
        link2: "https://github.com/iamfatihay/Anazon-storeApp",
    },
    {
        id: 9,
        title: "Guess My Number",
        tags: ["JavaScript", "DOM"],
        link: "https://guess-number-xzmp.vercel.app/",
        link2: "https://github.com/iamfatihay/guess-number",
    },
    {
        id: 10,
        title: "Freelance Web Design",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://freelance-web-design-kappa.vercel.app/",
        link2: "https://github.com/iamfatihay/freelance-web-design",
    },
];
