import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-briefcase-alt-2 about__icon" aria-hidden="true"></i>
                <h3 className="about__title">Focus</h3>
                <span className="about__subtitle">Production products</span>
            </div>

            <div className="about__box">
                <i className="bx bx-layer about__icon" aria-hidden="true"></i>
                <h3 className="about__title">Scope</h3>
                <span className="about__subtitle">End-to-end delivery</span>
            </div>

            <div className="about__box">
                <i className="bx bx-trophy about__icon" aria-hidden="true"></i>
                <h3 className="about__title">Award</h3>
                <span className="about__subtitle">Hackathon · 1st</span>
            </div>
        </div>
    );
};
export default Info;
