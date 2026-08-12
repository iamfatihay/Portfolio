import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import handIcon from "../../assets/hand.svg";

const Data = () => {
    return (
        <div className="home__data">
            <p className="home__eyebrow">
                <span aria-hidden="true"></span>
                Stuttgart, Germany · Lead Web Developer
            </p>
            <h1 className="home__title">
                Hi, I&apos;m{" "}
                <span className="home__title-wrap">
                    <span className="home__title-name">Fatih Ay</span>
                    <img className="home__hand" src={handIcon} alt="" />
                </span>
            </h1>
            <h2 className="home__subtitle">Full Stack Developer</h2>
            <p className="home__description">
                I build reliable marketplaces, AI-powered products and
                conversion-focused websites—from architecture to production.
            </p>

            <div className="home__actions">
                <a href="#portfolio" className="button button--flex">
                    View selected work
                    <BiRightArrowAlt className="button__icon" aria-hidden="true" focusable="false" />
                </a>
                <a href="#contact" className="button button--flex button--ghost">
                    Contact me
                </a>
            </div>
        </div>
    );
};

export default Data;
