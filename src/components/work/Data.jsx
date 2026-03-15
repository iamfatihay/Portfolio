import Work1 from "../../assets/blog-app.gif";
import Work2 from "../../assets/stockApp.gif";
import Work3 from "../../assets/movieapp.gif";
import Work4 from "../../assets/youtube.gif";
import Hackathon from "../../assets/hackathon1.jpg";

export const heroProject = {
    title: "hyfindr.com",
    role: "Lead Web Developer",
    period: "Oct 2023 – Present",
    description:
        "Production B2B hydrogen technology marketplace for the global hydrogen economy. Full stack development with Symfony, PHP 8, Sylius, MySQL, Elasticsearch, Docker and CI/CD. Responsible for all frontend (HTML, CSS, JS, jQuery), backend features, performance, SEO and sprint management.",
    tags: ["PHP", "Symfony", "Sylius", "MySQL", "Elasticsearch", "Docker", "Twig", "JS", "CI/CD"],
    link: "https://hyfindr.com",
    linkedIn: "https://www.linkedin.com/in/fatih-ay1661/",
};

export const secondaryProjects = [
    {
        id: "ai",
        title: "prototype.hyfindr.ai",
        role: "AI Prototype · Internal Tool",
        period: "2024",
        description:
            "AI-powered internal platform developed at Hyfindr GmbH, built before AI integration into the main site. React + React Bootstrap frontend with a Python backend (AI/API layer), communicating with the main PHP 8 application via API calls.",
        tags: ["React", "React Bootstrap", "Python", "AI/ML", "REST API"],
        badge: "Internal",
        note: "Login-restricted · Demo available on request",
        linkedIn: "https://www.linkedin.com/in/fatih-ay1661/",
    },
    {
        id: "hackathon",
        image: Hackathon,
        title: "Black Forest Hackathon 2025",
        role: "BadenCampus × Black Forest Innovation GmbH",
        period: "May 2025 · Freiburg",
        description:
            "Developed an AI-powered platform addressing a real-world challenge for Liebherr Mining. 48 hours of coding, collaboration, and innovation — brought home 1st place.",
        tags: ["Vite + React", "React Bootstrap", "AI/ML"],
        badge: "1st Place",
        linkedIn: "https://www.linkedin.com/in/fatih-ay1661/",
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
        title: "Youtube Clone",
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
        title: "Anazon Store",
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
