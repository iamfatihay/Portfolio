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
import { useCopy } from "../../i18n";

/*
 * Icons and technology lists are language-independent; the group title and
 * description come from the dictionary under the same key.
 */
const skillGroups = [
    { key: "backend", Icon: BiServer, skills: ["PHP 8", "Symfony", "Sylius", "REST APIs", "Node.js", "Twig"] },
    { key: "frontend", Icon: BiLayout, skills: ["React", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3"] },
    { key: "design", Icon: BiPalette, skills: ["Figma", "Tailwind CSS", "Sass", "Bootstrap", "Material UI"] },
    { key: "data", Icon: BiData, skills: ["MySQL", "Redis", "Elasticsearch", "SQLite", "Firebase", "Python", "Django"] },
    { key: "infrastructure", Icon: BiGitBranch, skills: ["Docker", "Nginx", "Linux", "CI/CD", "Git", "Netlify"] },
    {
        key: "quality",
        Icon: BiCheckShield,
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
    const { skills } = useCopy();

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title" data-aos="fade-up">
                {skills.title}
            </h2>
            <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">
                {skills.subtitle}
            </span>

            <div className="skills__container container grid">
                {skillGroups.map((group, index) => (
                    <article
                        className="skills__content"
                        key={group.key}
                        data-aos="fade-up"
                        data-aos-delay={150 + index * 60}
                    >
                        <span className="skills__icon" aria-hidden="true">
                            <group.Icon focusable="false" />
                        </span>
                        <h3 className="skills__title">
                            {skills.groups[group.key].title}
                        </h3>
                        <p className="skills__description">
                            {skills.groups[group.key].description}
                        </p>
                        <ul
                            className="skills__list"
                            aria-label={skills.listLabel(skills.groups[group.key].title)}
                        >
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
