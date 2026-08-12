import React, { useEffect, useRef } from "react";
import "./home.css";
import Social from "./Social";
import { useCopy } from "../../i18n";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import portraitSmall from "../../assets/portrait-640.webp";
import portraitLarge from "../../assets/portrait-1000.webp";

const Home = () => {
    const { hero } = useCopy();
    const dotsRef = useRef(null);

    useEffect(() => {
        const dots = dotsRef.current;
        const section = dots?.closest(".home");
        if (!dots || !section) return;

        // Pointer-driven, so it is meaningless without a real hovering cursor
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return;
        }

        let frame = 0;
        let pending = null;

        const paint = () => {
            frame = 0;
            const rect = dots.getBoundingClientRect();
            dots.style.setProperty("--spot-x", `${pending.x - rect.left}px`);
            dots.style.setProperty("--spot-y", `${pending.y - rect.top}px`);
            dots.style.setProperty("--spot-opacity", "1");
        };

        const handleMove = (event) => {
            pending = { x: event.clientX, y: event.clientY };
            if (!frame) frame = requestAnimationFrame(paint);
        };

        const handleLeave = () => {
            dots.style.setProperty("--spot-opacity", "0");
        };

        section.addEventListener("pointermove", handleMove);
        section.addEventListener("pointerleave", handleLeave);

        return () => {
            section.removeEventListener("pointermove", handleMove);
            section.removeEventListener("pointerleave", handleLeave);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__dots" ref={dotsRef} aria-hidden="true"></div>

                <div className="home__content grid">
                    <Social />

                    <div className="home__img" data-aos="fade-left">
                        <span className="home__img-echo" aria-hidden="true"></span>
                        <div className="home__img-frame">
                            <img
                                src={portraitSmall}
                                srcSet={`${portraitSmall} 640w, ${portraitLarge} 1000w`}
                                sizes="(max-width: 768px) 250px, 320px"
                                alt={hero.portraitAlt}
                                className="home__portrait"
                                width="640"
                                height="960"
                                loading="eager"
                                fetchpriority="high"
                            />
                            <span className="home__img-sheen" aria-hidden="true"></span>
                        </div>
                    </div>

                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
