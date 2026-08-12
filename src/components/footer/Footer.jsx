import React, { useEffect, useRef, useState } from "react";
import "./footer.css";
import Sponsor from "./Sponsor";
import profileLinks from "../../data/profileLinks";
import logoSignature from "../../assets/logo-signature-animated.webp";

const Footer = () => {
    const sealSlotRef = useRef(null);
    const [showSeal, setShowSeal] = useState(false);

    useEffect(() => {
        const node = sealSlotRef.current;
        if (!node) return;

        let observer;
        const arm = () => {
            if (observer) return;
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) return;
                    setShowSeal(true);
                    observer.disconnect();
                },
                { rootMargin: "300px" }
            );
            observer.observe(node);
        };

        /*
         * Sections below the fold mount lazily, so for a beat after first paint
         * the document is short enough that this slot sits near the viewport
         * before the real layout exists — arming immediately would fetch the
         * animation on load. A footer this far down is only reachable by
         * scrolling, so wait for that, with a timeout for viewports tall
         * enough to show it outright.
         */
        window.addEventListener("scroll", arm, { once: true, passive: true });
        const fallback = setTimeout(arm, 2500);

        return () => {
            window.removeEventListener("scroll", arm);
            clearTimeout(fallback);
            observer?.disconnect();
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer__container container">
                {/* The mark is a seal, so the page closes the way a letter does */}
                <div className="footer__sign">
                    <span className="footer__rule" aria-hidden="true"></span>
                    <a href="#home" className="footer__seal" aria-label="Fatih Ay — back to top">
                        <span className="footer__seal-slot" ref={sealSlotRef}>
                            {showSeal && (
                                <img
                                    src={logoSignature}
                                    alt="Fatih Ay"
                                    className="footer__seal-img"
                                    width="150"
                                    height="150"
                                    decoding="async"
                                />
                            )}
                        </span>
                    </a>
                    <span className="footer__rule" aria-hidden="true"></span>
                </div>

                <div className="footer__meta">
                    {/* See src/data/profileLinks.jsx for why these are not
                        called "social" and use inline SVG */}
                    <ul className="footer__profiles">
                        {profileLinks.map(({ key, label, href, Icon }) => (
                            <li key={key}>
                                <a
                                    href={href}
                                    className="footer__profiles-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Fatih Ay on ${label}`}
                                >
                                    <Icon aria-hidden="true" focusable="false" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <span className="footer__divider" aria-hidden="true"></span>

                    <Sponsor />
                </div>

                <p className="footer__copy">
                    © {new Date().getFullYear()} Fatih Ay · Built with React
                </p>
            </div>
        </footer>
    );
};

export default Footer;
