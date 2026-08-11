import React, { useCallback, useEffect, useRef } from "react";
import "./projectCard.css";

/*
 * Not every project has a URL to hand a visitor, and the ones that don't are
 * often the most substantial. So a card never states absence — it states what
 * kind of thing this is (live, in development, internal, awarded) and offers
 * the strongest proof that exists for that kind: the site itself, a product
 * tour on a real device, a jury result, a walkthrough on request.
 */
export const STATUS = {
    live: { label: "Live", icon: "bx-globe" },
    building: { label: "In development", icon: "bx-code-alt" },
    internal: { label: "Internal", icon: "bx-lock-alt" },
    award: { label: "1st place", icon: "bx-trophy" },
};

/* Total sweep across the card, so a corner reaches half this either way */
const MAX_TILT = 18;

const ProjectCard = ({ project, className = "", ...rest }) => {
    const cardRef = useRef(null);
    const frameRef = useRef(0);
    const status = STATUS[project.status];

    const handleMove = useCallback((event) => {
        const card = cardRef.current;
        // Touch and pen get no tilt (see the `hover: none` rules), so doing the
        // measuring and style writes for them only costs scroll performance.
        if (!card || event.pointerType !== "mouse") return;

        const { clientX, clientY } = event;
        cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = (clientX - rect.left) / rect.width;
            const y = (clientY - rect.top) / rect.height;

            card.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
            card.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
            card.style.setProperty("--ry", `${((x - 0.5) * MAX_TILT).toFixed(2)}deg`);
            card.style.setProperty("--rx", `${((0.5 - y) * MAX_TILT).toFixed(2)}deg`);
        });
    }, []);

    const handleLeave = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;

        cancelAnimationFrame(frameRef.current);
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "50%");
    }, []);

    useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

    return (
        <article
            className={`pcard pcard--${project.status} ${className}`}
            ref={cardRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            {...rest}
        >
            <div className="pcard__inner">
                {project.media && (
                    <span
                        className="pcard__media"
                        aria-hidden="true"
                        style={{
                            backgroundImage: `url(${project.media})`,
                            backgroundSize: project.mediaFit === "contain" ? "contain" : "cover",
                        }}
                    ></span>
                )}

                {/* Decorative light: a cursor-tracked highlight and an iridescent sheen */}
                <span className="pcard__sheen" aria-hidden="true"></span>
                <span className="pcard__foil" aria-hidden="true"></span>

                <div className="pcard__body">
                    <header className="pcard__head">
                        <span className="pcard__status">
                            <i className={`bx ${status.icon}`} aria-hidden="true"></i>
                            <span>{status.label}</span>
                        </span>
                        {project.period && (
                            <span className="pcard__period">{project.period}</span>
                        )}
                    </header>

                    <h3 className="pcard__title">{project.title}</h3>
                    <p className="pcard__role">{project.role}</p>
                    <p className="pcard__desc">{project.description}</p>

                    <ul className="pcard__tags" aria-label={`${project.title} stack`}>
                        {project.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>

                    <footer className="pcard__foot">
                        {project.proof && (
                            <p className="pcard__proof">
                                <i className="bx bx-check-shield" aria-hidden="true"></i>
                                {project.proof}
                            </p>
                        )}

                        <div className="pcard__actions">
                            {project.actions.map((action, index) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className={`pcard__action${
                                        index === 0 ? " pcard__action--primary" : ""
                                    }`}
                                    {...// Only real navigations open a tab; an in-page
                                    // anchor or a mailto: would strand an empty one.
                                    (action.href.startsWith("http")
                                        ? { target: "_blank", rel: "noopener noreferrer" }
                                        : {})}
                                >
                                    <span>{action.label}</span>
                                    <i className={`bx ${action.icon}`} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
