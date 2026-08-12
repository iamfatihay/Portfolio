import React, { useCallback, useEffect, useRef, useState } from "react";
import "./achievements.css";
import { FaTrophy } from "react-icons/fa";

// Importing hackathon images
import hackathon1 from "../../assets/hackathon1.webp";
import hackathon2 from "../../assets/hackathon2.webp";
import hackathon3 from "../../assets/hackathon3.webp";
import hackathon4 from "../../assets/hackathon4.webp";

/*
 * `focus` is each photo's object-position — the point of the image the crop
 * keeps in view. It matters because the band is wide and short while two of
 * these photos are portrait, so `cover` throws away most of their height; left
 * at the default centre, the crop lands on the table and cuts the faces off.
 * First value is horizontal, second vertical: lower the second number to keep
 * more of the top of the frame.
 */
const SLIDES = [
    {
        image: hackathon1,
        alt: "Hackathon winners holding the prize check",
        title: "1st Place Winner",
        caption: "Prize check for 3,000 € — Team Hyfindr",
        focus: "38% 22%",
    },
    {
        image: hackathon2,
        alt: "Team collaboration during the hackathon",
        title: "Intense Collaboration",
        caption: "48 hours of dedicated teamwork and innovation",
        focus: "45% 15%",
    },
    {
        image: hackathon3,
        alt: "Winning team celebration",
        title: "Victory Celebration",
        caption: "Celebrating success with the winning team",
        focus: "50% 42%",
    },
    {
        image: hackathon4,
        alt: "Black Forest Hackathon venue and participants",
        title: "Event Venue",
        caption: "Black Forest Hackathon — Liebherr Mining Challenge",
        focus: "50% 45%",
    },
];

const STATS = [
    { value: "48h", label: "Non-stop build" },
    { value: "3,000 €", label: "Prize awarded" },
    { value: "Liebherr", label: "Mining challenge" },
];

/* How long a photo holds the stage. The bar under the section fills over the
   same span — it *is* the timer, see the note on the ticks below. */
const SLIDE_DURATION = "6000ms";

const Achievements = () => {
    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    const goNext = useCallback(
        () => setIndex((current) => (current + 1) % SLIDES.length),
        []
    );

    /*
     * Nothing animates while the band is off screen: the fill bar drives the
     * rotation, so pausing it also stops the section cycling through its photos
     * for a reader who is three sections away.
     */
    useEffect(() => {
        const section = sectionRef.current;
        if (!section || typeof IntersectionObserver === "undefined") {
            setInView(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.15 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const paused = hovered || !inView;
    const active = SLIDES[index];

    return (
        <section
            className={`achievements section${paused ? " is-paused" : ""}`}
            id="achievements"
            ref={sectionRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
        >
            <div className="award__stage">
                {SLIDES.map((slide, i) => (
                    <img
                        key={slide.image}
                        src={slide.image}
                        alt={slide.alt}
                        className={`award__frame${
                            i === index ? " is-active" : ""
                        }`}
                        style={{ "--focus": slide.focus }}
                        loading="lazy"
                        decoding="async"
                    />
                ))}
                <div className="award__scrim" aria-hidden="true" />
            </div>

            <div className="award__content container">
                <h2 className="section__title" data-aos="fade-up">
                    Award
                </h2>
                <span
                    className="section__subtitle"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    One result worth highlighting
                </span>

                <p className="award__eyebrow" data-aos="fade-up">
                    <FaTrophy aria-hidden="true" />
                    Black Forest Hackathon · May 2025
                </p>

                <h3
                    className="award__headline"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <em>1st Place</em>
                    <span>out of every team in the room</span>
                </h3>

                <p
                    className="award__description"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Our team designed and built an AI-powered solution for a
                    Liebherr Mining challenge in 48 hours—and won first place.
                </p>

                <ul className="award__stats" data-aos="fade-up" data-aos-delay="300">
                    {STATS.map((stat) => (
                        <li className="award__stat" key={stat.label}>
                            <span className="award__stat-value">
                                {stat.value}
                            </span>
                            <span className="award__stat-label">
                                {stat.label}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="award__footer">
                    {/* Keyed on the index so the caption re-runs its fade as
                        the photo behind it changes */}
                    <p className="award__caption" key={index}>
                        <span className="award__caption-title">
                            {active.title}
                        </span>
                        <span className="award__caption-text">
                            {active.caption}
                        </span>
                    </p>

                    {/*
                     * The bars are the whole control surface: the active one
                     * fills over SLIDE_DURATION and its animationend advances
                     * the photo. That keeps one clock instead of two — hover
                     * pauses the CSS animation, and the rotation stops with it,
                     * and reduced motion drops the animation entirely, which
                     * leaves the section on manual navigation only.
                     */}
                    <div
                        className="award__ticks"
                        role="group"
                        aria-label="Award photos"
                    >
                        {SLIDES.map((slide, i) => (
                            <button
                                key={slide.image}
                                type="button"
                                className={`award__tick${
                                    i === index ? " is-active" : ""
                                }`}
                                onClick={() => setIndex(i)}
                                aria-label={`Show photo ${i + 1} of ${
                                    SLIDES.length
                                }: ${slide.title}`}
                                aria-current={i === index}
                            >
                                <span
                                    className="award__tick-fill"
                                    style={{
                                        animationDuration: SLIDE_DURATION,
                                    }}
                                    onAnimationEnd={
                                        i === index ? goNext : undefined
                                    }
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
