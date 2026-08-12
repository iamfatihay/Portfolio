import React from "react";
import { BiBriefcaseAlt2, BiLayer, BiTrophy } from "react-icons/bi";
import { useCopy } from "../../i18n";

/* Icons in the order the three cards are written in the dictionary */
const ICONS = [BiBriefcaseAlt2, BiLayer, BiTrophy];

const Info = () => {
    const { about } = useCopy();

    return (
        <div className="about__info grid">
            {about.info.map((item, index) => {
                const Icon = ICONS[index];
                return (
                    <div className="about__box" key={item.title}>
                        <Icon className="about__icon" aria-hidden="true" focusable="false" />
                        <h3 className="about__title">{item.title}</h3>
                        <span className="about__subtitle">{item.subtitle}</span>
                    </div>
                );
            })}
        </div>
    );
};
export default Info;
