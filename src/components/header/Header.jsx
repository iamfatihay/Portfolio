import React, { useEffect, useRef, useState } from "react";
import "./header.css";

const navItems = [
    { href: "#home", label: "Home", icon: "uil-estate" },
    { href: "#about", label: "About", icon: "uil-user" },
    { href: "#portfolio", label: "Work", icon: "uil-scenery" },
    { href: "#achievements", label: "Award", icon: "uil-trophy" },
    { href: "#skills", label: "Skills", icon: "uil-file-alt" },
    { href: "#contact", label: "Contact", icon: "uil-message" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            headerRef.current?.classList.toggle("scroll-header", window.scrollY >= 40);
        };

        const sections = navItems
            .map(({ href }) => document.querySelector(href))
            .filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveNav(`#${visible.target.id}`);
            },
            { rootMargin: "-35% 0px -55%", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (href) => {
        setActiveNav(href);
        setIsMenuOpen(false);
    };

    return (
        <header className="header" ref={headerRef}>
            <nav className="nav container" aria-label="Primary navigation">
                <a
                    href="#home"
                    className="nav__logo"
                    onClick={() => handleNavClick("#home")}
                    aria-label="Fatih Ay — back to top"
                >
                    <span className="nav__logo-text">Fatih AY</span>
                </a>

                <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {navItems.map((item) => (
                            <li className="nav__item" key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={activeNav === item.href ? "nav__link active-link" : "nav__link"}
                                    aria-current={activeNav === item.href ? "location" : undefined}
                                >
                                    <i className={`uil ${item.icon} nav__icon`} aria-hidden="true"></i>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="nav__close"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close navigation"
                    >
                        <i className="uil uil-times" aria-hidden="true"></i>
                    </button>
                </div>
                <button
                    type="button"
                    className="nav__toggle"
                    onClick={() => setIsMenuOpen(true)}
                    aria-expanded={isMenuOpen}
                    aria-label="Open navigation"
                >
                    <i className="uil uil-apps" aria-hidden="true"></i>
                </button>
            </nav>
            <span className="header__progress" aria-hidden="true"></span>
        </header>
    );
};

export default Header;
