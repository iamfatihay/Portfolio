import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
    leadProjects,
    supportingProjects,
    featuredProjects,
    archiveProjects,
} from "./Data";

const Works = () => {
    const [showArchive, setShowArchive] = useState(false);

    return (
        <div className="works__root container">
            {/*
             * Two rows of the same card, sized by weight rather than styled
             * differently: three across for the current work, two wider for the
             * internal tool and the hackathon, which have no public URL but are
             * not lesser for it.
             */}
            <div className="work__lead-grid">
                {leadProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        className="work__lead-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                    />
                ))}
            </div>

            <div className="work__support-grid">
                {supportingProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        className="work__support-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                    />
                ))}
            </div>

            {/* ── Earlier projects ── */}
            <div className="work__personal-header">
                <span className="work__personal-line" aria-hidden="true"></span>
                <span className="work__personal-label">Earlier Projects</span>
                <span className="work__personal-line" aria-hidden="true"></span>
            </div>

            <div className="work__personal-grid">
                {featuredProjects.map((item) => (
                    <div className="work__personal-card" key={item.id}>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work__personal-img-wrap"
                            aria-label={`View ${item.title}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="work__personal-img"
                                loading="lazy"
                            />
                        </a>
                        <div className="work__personal-body">
                            <h4 className="work__personal-title">{item.title}</h4>
                            <div className="work__personal-tags">
                                {item.tags.map((tag) => (
                                    <span className="work__tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="work__personal-actions">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${item.title} live demo`}
                                >
                                    <i className="bx bx-link-external" aria-hidden="true"></i>
                                </a>
                                <a
                                    href={item.link2}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${item.title} GitHub`}
                                >
                                    <i className="bx bxl-github" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Archive ── */}
            <div className="work__archive-toggle">
                <button
                    className="work__more-btn"
                    onClick={() => setShowArchive(!showArchive)}
                    aria-expanded={showArchive}
                >
                    {showArchive ? "Hide Projects" : "More Projects"}
                    <i
                        className={`bx ${showArchive ? "bx-chevron-up" : "bx-chevron-down"} work__more-icon`}
                        aria-hidden="true"
                    ></i>
                </button>
            </div>

            {showArchive && (
                <div className="work__archive-grid">
                    {archiveProjects.map((item) => (
                        <div className="work__archive-card" key={item.id}>
                            <div className="work__archive-top">
                                <i className="bx bx-folder work__archive-folder" aria-hidden="true"></i>
                                <div className="work__archive-links">
                                    <a
                                        href={item.link2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${item.title} source code`}
                                    >
                                        <i className="bx bxl-github" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${item.title} live demo`}
                                    >
                                        <i className="bx bx-link-external" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <h4 className="work__archive-title">{item.title}</h4>
                            <div className="work__archive-tags">
                                {item.tags.map((tag) => (
                                    <span className="work__archive-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Works;
