import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title" data-aos="fade-up">
                Skills
            </h2>
            <span
                className="section__subtitle"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                My technical level
            </span>

            <div className="skills__container container grid">
                <div data-aos="fade-right" data-aos-delay="200">
                    <Frontend />
                </div>
                <div data-aos="fade-left" data-aos-delay="300">
                    <Backend />
                </div>
            </div>
        </section>
    );
};

export default Skills;
