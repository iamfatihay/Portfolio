import React from "react";
import "./qualification.css";
import { useCopy } from "../../i18n";

const Qualification = () => {
    const { experience } = useCopy();

    return (
        <section className="qualification section" id="experience">
            <h2 className="section__title" data-aos="fade-up">
                {experience.title}
            </h2>
            <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">
                {experience.subtitle}
            </span>

            <div className="qualification__container container">
                {experience.items.map((item, index) => (
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
