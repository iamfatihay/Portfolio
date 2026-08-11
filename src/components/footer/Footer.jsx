import React, { useEffect, useRef, useState } from "react";
import { LiaXing } from "react-icons/lia";
import "./footer.css";
import Sponsor from "./Sponsor";
import logoSignature from "../../assets/logo-signature-animated.webp";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/fatih-ay1661/",
        label: "LinkedIn",
        icon: <i className="uil uil-linkedin-alt" aria-hidden="true"></i>,
    },
    {
        href: "https://github.com/iamfatihay",
        label: "GitHub",
        icon: <i className="uil uil-github" aria-hidden="true"></i>,
    },
    {
        href: "https://twitter.com/Fatih__AY",
        label: "X",
        icon: <i className="uil uil-twitter-alt" aria-hidden="true"></i>,
    },
    {
        href: "https://www.xing.com/profile/Fatih_AY033127/cv",
        label: "Xing",
        icon: <LiaXing aria-hidden="true" />,
    },
];

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
                    <ul className="footer__social">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="footer__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Fatih Ay on ${link.label}`}
                                >
                                    {link.icon}
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
