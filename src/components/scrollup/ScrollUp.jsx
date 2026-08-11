import React, { useEffect, useState } from "react";
import "./scrollup.css";

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY >= 560);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a
            href="#home"
            className={isVisible ? "scrollup show-scroll" : "scrollup"}
            aria-label="Back to top"
        >
            <i className="uil uil-arrow-up scrollup__icon" aria-hidden="true"></i>
        </a>
    );
};

export default ScrollUp;
