import React, { useEffect, useState } from "react";
import "./scrollup.css";
import { BiUpArrowAlt } from "react-icons/bi";
import { useCopy } from "../../i18n";

const ScrollUp = () => {
    const { common } = useCopy();
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
            aria-label={common.scrollUp}
        >
            <BiUpArrowAlt className="scrollup__icon" aria-hidden="true" focusable="false" />
        </a>
    );
};

export default ScrollUp;
