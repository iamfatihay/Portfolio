import React from "react";
import "./qualification.css";

const experience = [
    {
        period: "Oct 2023 — Present",
        title: "Lead Web Developer",
        organisation: "Hyfindr GmbH · Stuttgart",
        description:
            "Leading full stack delivery for a production B2B marketplace and AI initiatives across Symfony, Sylius, React, search and infrastructure.",
    },
    {
        period: "2022 — 2023",
        title: "Full Stack Developer Program",
        organisation: "Clarusway · Stuttgart",
        description:
            "Intensive software development training spanning modern frontend, Python/Django backends, databases and team delivery.",
    },
];

const Qualification = () => {
    return (
        <section className="qualification section" id="experience">
            <h2 className="section__title" data-aos="fade-up">
                Experience
            </h2>
            <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">
                A focused path into production
            </span>

            <div className="qualification__container container">
                {experience.map((item, index) => (
                    <article
                        className="qualification__item"
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={160 + index * 80}
                    >
                        <div className="qualification__marker" aria-hidden="true">
                            <span></span>
                        </div>
                        <div className="qualification__period">{item.period}</div>
                        <div className="qualification__body">
                            <h3>{item.title}</h3>
                            <p className="qualification__organisation">{item.organisation}</p>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Qualification;
