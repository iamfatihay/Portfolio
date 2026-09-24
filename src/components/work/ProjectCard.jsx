import React, { useCallback, useEffect, useRef } from "react";
import "./projectCard.css";
import {
    BiCheck,
    BiCheckShield,
    BiCodeAlt,
    BiGlobe,
    BiLockAlt,
    BiTrophy,
} from "react-icons/bi";
import { useCopy } from "../../i18n";

/*
 * Not every project has a URL to hand a visitor, and the ones that don't are
 * often the most substantial. So a card never states absence — it states what
 * kind of thing this is (live, in development, internal, awarded) and offers
 * the strongest proof that exists for that kind: the site itself, a product
 * tour on a real device, a jury result, a walkthrough on request.
 */
/* Icons only — the labels are translated, see work.statuses in src/i18n */
export const STATUS_ICONS = {
    live: BiGlobe,
    building: BiCodeAlt,
    internal: BiLockAlt,
    award: BiTrophy,
};

/* Total sweep across the card, so a corner reaches half this either way */
const MAX_TILT = 18;

const ProjectCard = ({ project, className = "", ...rest }) => {
    const cardRef = useRef(null);
    const frameRef = useRef(0);
    const { work } = useCopy();
    const StatusIcon = STATUS_ICONS[project.status];

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
            className={`pcard pcard--${project.status}${
                project.spotlight ? " pcard--spotlight" : ""
            } ${className}`}
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
                            <StatusIcon aria-hidden="true" focusable="false" />
                            <span>{work.statuses[project.status]}</span>
                        </span>
                        {project.period && (
                            <span className="pcard__period">{project.period}</span>
                        )}
                    </header>

                    {/* Flattened with display: contents unless the card is a spotlight */}
                    <div className="pcard__main">
                        <h3 className="pcard__title">{project.title}</h3>
                        <p className="pcard__role">{project.role}</p>
                        <p className="pcard__desc">{project.description}</p>

                        <ul className="pcard__tags" aria-label={work.stack(project.title)}>
                            {project.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="pcard__side">
                        {project.highlights && (
                            <ul className="pcard__highlights">
                                {project.highlights.map((item) => (
                                    <li key={item}>
                                        <BiCheck aria-hidden="true" focusable="false" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <footer className="pcard__foot">
                            {project.proof && (
                                <p className="pcard__proof">
                                    <BiCheckShield aria-hidden="true" focusable="false" />
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
                                        <action.Icon aria-hidden="true" focusable="false" />
                                    </a>
                                ))}
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
