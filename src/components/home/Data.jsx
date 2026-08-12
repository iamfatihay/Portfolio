import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useCopy } from "../../i18n";
import handIcon from "../../assets/hand.svg";

const Data = () => {
    const { hero } = useCopy();

    return (
        <div className="home__data">
            <p className="home__eyebrow">
                <span aria-hidden="true"></span>
                {hero.eyebrow}
            </p>
            <h1 className="home__title">
                {hero.greeting}{" "}
                <span className="home__title-wrap">
                    <span className="home__title-name">{hero.name}</span>
                    <img className="home__hand" src={handIcon} alt="" />
                </span>
            </h1>
            <h2 className="home__subtitle">{hero.subtitle}</h2>
            <p className="home__description">
                {hero.description}
            </p>

            <div className="home__actions">
                <a href="#portfolio" className="button button--flex">
                    {hero.primaryCta}
                    <BiRightArrowAlt className="button__icon" aria-hidden="true" focusable="false" />
                </a>
                <a href="#contact" className="button button--flex button--ghost">
                    {hero.secondaryCta}
                </a>
            </div>
        </div>
    );
};

export default Data;
