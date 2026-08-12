import React from "react";
import profileLinks from "../../data/profileLinks";
import { useCopy } from "../../i18n";

/*
 * Class names avoid the word "social": generic cosmetic filters in the common
 * blocker lists hide anything matching `[class*="social"]`, and losing this
 * column used to take the hero layout with it. The grid also pins its children
 * to explicit columns, so a blocked link can no longer reflow the hero.
 */
const Social = () => {
    const { hero } = useCopy();

    return (
        <div className="home__rail">
            {profileLinks.map(({ key, label, href, Icon }) => (
                <a
                    key={key}
                    href={href}
                    className="home__rail-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={hero.profileLink(label)}
                >
                    <Icon aria-hidden="true" focusable="false" />
                </a>
            ))}
        </div>
    );
};

export default Social;
