import React, { useState } from "react";
import { heroProject, secondaryProjects, featuredProjects, archiveProjects } from "./Data";

const Works = () => {
    const [showArchive, setShowArchive] = useState(false);

    return (
        <div className="works__root container">

            {/* ── Hero: hyfindr.com ── */}
            <div className="work__hero">
                <div className="work__hero-content">
                    <span className="work__hero-badge">
                        <span className="work__hero-dot" aria-hidden="true"></span>
                        Production
                    </span>
                    <h3 className="work__hero-title">
                        {heroProject.title}
                        <a
                            href={heroProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work__hero-ext"
                            aria-label="Visit hyfindr.com"
                        >
                            <i className="bx bx-link-external" aria-hidden="true"></i>
                        </a>
                    </h3>
                    <p className="work__hero-role">
                        {heroProject.role} · {heroProject.period}
                    </p>
                    <p className="work__hero-desc">{heroProject.description}</p>
                    <div className="work__hero-tags">
                        {heroProject.tags.map((tag) => (
                            <span className="work__hero-tag" key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="work__hero-actions">
                        <a
                            href={heroProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work__hero-btn work__hero-btn--primary"
                        >
                            Visit Site
                            <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
                        </a>
                        <a
                            href={heroProject.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work__hero-btn work__hero-btn--ghost"
                        >
                            LinkedIn
                            <i className="bx bxl-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="work__hero-deco" aria-hidden="true">
                    <div className="work__hero-ring work__hero-ring--1"></div>
                    <div className="work__hero-ring work__hero-ring--2"></div>
                    <div className="work__hero-ring work__hero-ring--3"></div>
                    <div className="work__hero-core"></div>
                </div>
            </div>

            {/* ── Secondary: AI Prototype + Hackathon ── */}
            <div className="work__secondary-grid">

                {/* AI Prototype */}
                <div className="work__secondary-card work__secondary-card--ai">
                    <div className="work__secondary-visual work__secondary-visual--ai" aria-hidden="true">
                        <div className="work__ai-grid">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div className="work__ai-cell" key={i}></div>
                            ))}
                        </div>
                        <div className="work__ai-chip">
                            <i className="bx bx-chip"></i>
                            <span>AI</span>
                        </div>
                    </div>
                    <div className="work__secondary-body">
                        <div className="work__secondary-head">
                            <span className="work__secondary-badge work__secondary-badge--internal">
                                <i className="bx bx-lock-alt" aria-hidden="true"></i>
                                Internal
                            </span>
                        </div>
                        <h4 className="work__secondary-title">{secondaryProjects[0].title}</h4>
                        <p className="work__secondary-role">
                            {secondaryProjects[0].role} · {secondaryProjects[0].period}
                        </p>
                        <p className="work__secondary-desc">{secondaryProjects[0].description}</p>
                        <div className="work__secondary-tags">
                            {secondaryProjects[0].tags.map((tag) => (
                                <span className="work__tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                        <p className="work__secondary-note">
                            <i className="bx bx-info-circle" aria-hidden="true"></i>
                            {secondaryProjects[0].note}
                        </p>
                        <div className="links">
                            <a
                                href={secondaryProjects[0].linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="work__button"
                            >
                                Contact on LinkedIn
                                <i className="bx bx-right-arrow-alt work__button-icon" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hackathon */}
                <div className="work__secondary-card work__secondary-card--hackathon">
                    <div className="work__secondary-visual work__secondary-visual--hackathon">
                        <img
                            src={secondaryProjects[1].image}
                            alt="Black Forest Hackathon 2025 — 1st Place"
                            className="work__secondary-img"
                        />
                        <div className="work__secondary-img-overlay" aria-hidden="true"></div>
                    </div>
                    <div className="work__secondary-body">
                        <div className="work__secondary-head">
                            <span className="work__secondary-badge work__secondary-badge--hackathon">
                                <i className="bx bx-trophy" aria-hidden="true"></i>
                                1st Place
                            </span>
                        </div>
                        <h4 className="work__secondary-title">{secondaryProjects[1].title}</h4>
                        <p className="work__secondary-role">
                            {secondaryProjects[1].role} · {secondaryProjects[1].period}
                        </p>
                        <p className="work__secondary-desc">{secondaryProjects[1].description}</p>
                        <div className="work__secondary-tags">
                            {secondaryProjects[1].tags.map((tag) => (
                                <span className="work__tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div className="links">
                            <a
                                href={secondaryProjects[1].linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="work__button"
                            >
                                View on LinkedIn
                                <i className="bx bx-right-arrow-alt work__button-icon" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Personal Projects ── */}
            <div className="work__personal-header">
                <span className="work__personal-line" aria-hidden="true"></span>
                <span className="work__personal-label">Personal Projects</span>
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

            {/* ── Archive Toggle ── */}
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

            {/* ── Archive Grid ── */}
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
