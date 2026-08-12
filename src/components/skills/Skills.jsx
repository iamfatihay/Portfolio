import React from "react";
import "./skills.css";
import {
    BiCheckShield,
    BiData,
    BiGitBranch,
    BiLayout,
    BiPalette,
    BiServer,
} from "react-icons/bi";

const skillGroups = [
    {
        title: "Backend & commerce",
        Icon: BiServer,
        description: "Business logic, APIs and data-heavy commerce platforms.",
        skills: ["PHP 8", "Symfony", "Sylius", "REST APIs", "Node.js", "Twig"],
    },
    {
        title: "Frontend",
        Icon: BiLayout,
        description: "Responsive interfaces that stay clear and maintainable.",
        skills: ["React", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3"],
    },
    {
        title: "UI & design",
        Icon: BiPalette,
        description: "Design handoff through to component libraries that scale.",
        skills: ["Figma", "Tailwind CSS", "Sass", "Bootstrap", "Material UI"],
    },
    {
        title: "Data & search",
        Icon: BiData,
        description: "Reliable persistence, caching, discovery and integration.",
        skills: ["MySQL", "Redis", "Elasticsearch", "SQLite", "Firebase", "Python", "Django"],
    },
    {
        title: "Infrastructure & delivery",
        Icon: BiGitBranch,
        description: "Where the work runs, and how it gets to production.",
        skills: ["Docker", "Nginx", "Linux", "CI/CD", "Git", "Netlify"],
    },
    {
        title: "Collaboration & quality",
        Icon: BiCheckShield,
        description: "Keeping a team aligned and the work tested, fast and findable.",
        skills: [
            "Jira",
            "Confluence",
            "Testing Library",
            "Postman",
            "Core Web Vitals",
            "SEO",
            "Accessibility",
        ],
    },
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title" data-aos="fade-up">
                Technical Focus
            </h2>
            <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">
                The tools I use to ship
            </span>

            <div className="skills__container container grid">
                {skillGroups.map((group, index) => (
                    <article
                        className="skills__content"
                        key={group.title}
                        data-aos="fade-up"
                        data-aos-delay={150 + index * 60}
                    >
                        <span className="skills__icon" aria-hidden="true">
                            <group.Icon focusable="false" />
                        </span>
                        <h3 className="skills__title">{group.title}</h3>
                        <p className="skills__description">{group.description}</p>
                        <ul className="skills__list" aria-label={`${group.title} technologies`}>
                            {group.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Skills;
