import React, { useEffect, useRef, useState } from "react";
import "./beams.css";

/*
 * Rain falling the full height of the section it backs, breaking on its bottom
 * edge — which is the footer's top border. Every lane is hand-placed rather
 * than random: the impact is phase-locked to the fall by sharing one animation
 * duration and delay, so a random value would have to be threaded through both.
 *
 * Delays are spread so no two lanes land on the same beat.
 */
const LANES = [
    { x: "2%", delay: "0s", duration: "10.4s", length: "2.5rem", opacity: 0.5 },
    { x: "9%", delay: "5.1s", duration: "8.2s", length: "1.6rem", opacity: 0.35 },
    { x: "16%", delay: "11.3s", duration: "13.1s", length: "3.4rem", opacity: 0.6 },
    { x: "23%", delay: "2.4s", duration: "9.3s", length: "2rem", opacity: 0.4 },
    { x: "30%", delay: "7.8s", duration: "6.7s", length: "4rem", opacity: 0.65 },
    { x: "37%", delay: "13.6s", duration: "11.8s", length: "1.8rem", opacity: 0.3 },
    { x: "45%", delay: "3.9s", duration: "7.4s", length: "3rem", opacity: 0.55 },
    { x: "52%", delay: "9.2s", duration: "12.6s", length: "2.2rem", opacity: 0.4 },
    { x: "59%", delay: "15.1s", duration: "8.8s", length: "4.4rem", opacity: 0.6 },
    { x: "66%", delay: "1.2s", duration: "10.9s", length: "1.5rem", opacity: 0.3 },
    { x: "73%", delay: "6.4s", duration: "7.1s", length: "2.8rem", opacity: 0.5 },
    { x: "80%", delay: "12.7s", duration: "13.8s", length: "2rem", opacity: 0.35 },
    { x: "86%", delay: "4.6s", duration: "9.7s", length: "3.6rem", opacity: 0.6 },
    { x: "92%", delay: "10.3s", duration: "6.2s", length: "1.7rem", opacity: 0.45 },
    { x: "98%", delay: "14.4s", duration: "11.2s", length: "3rem", opacity: 0.5 },
];

/*
 * Deliberately uneven — a symmetric spray reads as a mechanical burst rather
 * than a droplet breaking on a surface.
 */
const SPARKS = [
    { tx: "-24px", ty: "-13px", scale: 0.9 },
    { tx: "-15px", ty: "-28px", scale: 0.7 },
    { tx: "-6px", ty: "-19px", scale: 1 },
    { tx: "5px", ty: "-34px", scale: 0.8 },
    { tx: "14px", ty: "-22px", scale: 0.9 },
    { tx: "26px", ty: "-15px", scale: 0.6 },
];

const BeamsCollision = () => {
    const layerRef = useRef(null);
    const [isLive, setIsLive] = useState(false);

    /* Nothing animates while the section is off screen */
    useEffect(() => {
        const node = layerRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsLive(entry.isIntersecting),
            { rootMargin: "120px" }
        );
        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={layerRef}
            className={`beams${isLive ? " beams--live" : ""}`}
            aria-hidden="true"
        >
            {LANES.map((lane) => (
                <span
                    key={lane.x}
                    className="beams__lane"
                    style={{
                        "--lane-x": lane.x,
                        "--lane-delay": lane.delay,
                        "--lane-duration": lane.duration,
                        "--beam-length": lane.length,
                        "--beam-opacity": lane.opacity,
                    }}
                >
                    <span className="beams__beam" />
                    <span className="beams__impact">
                        <span className="beams__flash" />
                        {SPARKS.map((spark) => (
                            <span
                                key={spark.tx}
                                className="beams__spark"
                                style={{
                                    "--spark-x": spark.tx,
                                    "--spark-y": spark.ty,
                                    "--spark-scale": spark.scale,
                                }}
                            />
                        ))}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default BeamsCollision;
