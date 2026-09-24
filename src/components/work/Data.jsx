import {
    BiDownArrowAlt,
    BiLogoLinkedin,
    BiRightArrowAlt,
} from "react-icons/bi";
import Work1 from "../../assets/blog-app-preview.webp";
import Work2 from "../../assets/stockApp-preview.webp";
import Work3 from "../../assets/movieapp-preview.webp";
import Work4 from "../../assets/youtube-preview.webp";
import Hackathon from "../../assets/hackathon1.webp";
import HiddenChampionsMark from "../../assets/hidden-champions-mark.svg";
import HyfindrMapMark from "../../assets/hyfindr-map-mark.svg";

const HYFINDR_MAP_URL = "https://hyfindr.com/en/map";

/*
 * Led by the newest shipped work: the Hyfindr Interactive Map spans the full
 * row as a spotlight, since it is live and was owned from design to deploy.
 * After it, ordered by how much of it a visitor can verify: two live products, a mobile
 * app mid-build, an internal tool, then an awarded 48-hour build. Each carries
 * the strongest proof it has, so the ones without a public URL still stand up.
 *
 * What stays here is what does not change with the language: ids, status,
 * images and links. Role, period, description, proof, tags and action labels
 * live under work.projects[id] in src/i18n — withCopy() at the bottom of this
 * file zips the two halves back together for whichever language is rendering.
 */
export const leadProjects = [
    {
        id: "hyfindr-map",
        status: "live",
        spotlight: true,
        title: "Hyfindr Interactive Map",
        media: HyfindrMapMark,
        mediaFit: "contain",
        actions: [{ href: HYFINDR_MAP_URL, Icon: BiRightArrowAlt }],
    },
    {
        id: "hyfindr",
        status: "live",
        title: "hyfindr.com",
        actions: [
            { href: "https://hyfindr.com", Icon: BiRightArrowAlt },
            {
                href: "https://www.linkedin.com/in/fatih-ay1661/",
                Icon: BiLogoLinkedin,
            },
        ],
    },
    {
        id: "hidden-champions",
        status: "live",
        title: "hidden-champions.ai",
        media: HiddenChampionsMark,
        mediaFit: "contain",
        actions: [
            {
                href: "https://hidden-champions.ai",
                Icon: BiRightArrowAlt,
            },
        ],
    },
    {
        id: "volo",
        status: "building",
        title: "Volo",
        actions: [
            {
                href: "#contact",
                Icon: BiDownArrowAlt,
            },
        ],
    },
];

export const supportingProjects = [
    {
        id: "prototype",
        status: "internal",
        title: "prototype.hyfindr.ai",
        actions: [
            {
                href: "#contact",
                Icon: BiDownArrowAlt,
            },
        ],
    },
    {
        id: "hackathon",
        status: "award",
        media: Hackathon,
        title: "Black Forest Hackathon",
        actions: [
            { href: "#achievements", Icon: BiDownArrowAlt },
            {
                /*
                 * The post itself, not the profile: this card trades a live URL
                 * for evidence, and a profile is a destination rather than
                 * evidence — it would leave the visitor hunting for a 2025 post.
                 */
                href: "https://www.linkedin.com/posts/fatih-ay1661_hackathon-hackathonwinner-liebherr-ugcPost-7327664859356028929-aasy/",
                Icon: BiLogoLinkedin,
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

/*
 * A card is assembled from two sources: the entry above and its translation.
 * Actions keep their order, which is how a label finds its link — the
 * alternative was repeating every URL in both dictionaries.
 */
export const withCopy = (projects, copy) =>
    projects.map((project) => {
        const text = copy.projects[project.id];
        return {
            ...project,
            role: text.role,
            period: text.period,
            description: text.description,
            proof: text.proof,
            highlights: text.highlights,
            tags: text.tags,
            actions: project.actions.map((action, index) => ({
                ...action,
                label: text.actions[index],
            })),
        };
    });
