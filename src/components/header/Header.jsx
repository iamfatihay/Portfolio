import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { localePath, useCopy, useLocale } from "../../i18n";
import {
    BiEnvelope,
    BiFile,
    BiGlobe,
    BiGridAlt,
    BiHomeAlt,
    BiImageAlt,
    BiTrophy,
    BiUser,
    BiX,
} from "react-icons/bi";

const navItems = [
    { href: "#home", key: "home", Icon: BiHomeAlt },
    { href: "#about", key: "about", Icon: BiUser },
    { href: "#portfolio", key: "work", Icon: BiImageAlt },
    { href: "#achievements", key: "award", Icon: BiTrophy },
    { href: "#skills", key: "skills", Icon: BiFile },
    { href: "#contact", key: "contact", Icon: BiEnvelope },
];

const Header = () => {
    const { nav, common } = useCopy();
    const locale = useLocale();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            headerRef.current?.classList.toggle("scroll-header", window.scrollY >= 40);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveNav(`#${visible.target.id}`);
            },
            { rootMargin: "-35% 0px -55%", threshold: 0 }
        );

        /*
         * The header renders outside Suspense, so on this first pass every
         * section is still unmounted and there is nothing to observe. Watching
         * main lets the sections be picked up as they arrive; once all of them
         * are observed the watcher has nothing left to do.
         */
        const observed = new Set();
        const syncTargets = () => {
            navItems.forEach(({ href }) => {
                const section = document.querySelector(href);
                if (section && !observed.has(section)) {
                    observer.observe(section);
                    observed.add(section);
                }
            });
            if (observed.size === navItems.length) mutations.disconnect();
        };

        const mutations = new MutationObserver(syncTargets);
        const main = document.getElementById("main-content");
        if (main) mutations.observe(main, { childList: true, subtree: true });
        syncTargets();

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            mutations.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (href) => {
        setActiveNav(href);
        setIsMenuOpen(false);
    };

    const targetLocale = locale === "en" ? "de" : "en";

    return (
        <header className="header" ref={headerRef}>
            <nav className="nav container" aria-label={nav.label}>
                <a
                    href="#home"
                    className="nav__logo"
                    onClick={() => handleNavClick("#home")}
                    aria-label={common.backToTop}
                >
                    <span className="nav__logo-text">Fatih AY</span>
                </a>

                <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {navItems.map(({ href, key, Icon }) => (
                            <li className="nav__item" key={href}>
                                <a
                                    href={href}
                                    onClick={() => handleNavClick(href)}
                                    className={activeNav === href ? "nav__link active-link" : "nav__link"}
                                    aria-current={activeNav === href ? "location" : undefined}
                                >
                                    <Icon className="nav__icon" aria-hidden="true" focusable="false" />
                                    {nav[key]}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="nav__close"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label={nav.close}
                    >
                        <BiX aria-hidden="true" focusable="false" />
                    </button>
                    <a
                        className="language-toggle"
                        href={localePath[targetLocale]}
                        hrefLang={targetLocale}
                        lang={targetLocale}
                        aria-label={common.languageSwitch}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <BiGlobe aria-hidden="true" focusable="false" />
                        <span className="language-toggle__text">
                            <span className="language-toggle__current">{locale.toUpperCase()}</span>
                            <span className="language-toggle__target">{targetLocale.toUpperCase()}</span>
                        </span>
                    </a>
                </div>

                <button
                    type="button"
                    className="nav__toggle"
                    onClick={() => setIsMenuOpen(true)}
                    aria-expanded={isMenuOpen}
                    aria-label={nav.open}
                >
                    <BiGridAlt aria-hidden="true" focusable="false" />
                </button>
            </nav>
            <span className="header__progress" aria-hidden="true"></span>
        </header>
    );
};

export default Header;
