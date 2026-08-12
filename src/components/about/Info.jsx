import React from "react";
import { BiBriefcaseAlt2, BiLayer, BiTrophy } from "react-icons/bi";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <BiBriefcaseAlt2 className="about__icon" aria-hidden="true" focusable="false" />
                <h3 className="about__title">Focus</h3>
                <span className="about__subtitle">Production products</span>
            </div>

            <div className="about__box">
                <BiLayer className="about__icon" aria-hidden="true" focusable="false" />
                <h3 className="about__title">Scope</h3>
                <span className="about__subtitle">End-to-end delivery</span>
            </div>

            <div className="about__box">
                <BiTrophy className="about__icon" aria-hidden="true" focusable="false" />
                <h3 className="about__title">Award</h3>
                <span className="about__subtitle">Hackathon · 1st</span>
            </div>
        </div>
    );
};
export default Info;
