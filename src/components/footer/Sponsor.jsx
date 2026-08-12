import React from 'react';
import { BiCoffee, BiHeart } from "react-icons/bi";

const Sponsor = () => {
    return (
        <div className="footer__support">
            <a
                href="https://github.com/sponsors/iamfatihay"
                className="footer__support-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BiHeart aria-hidden="true" focusable="false" />
                Sponsor
            </a>
            <a
                href="https://www.buymeacoffee.com/iamfatihay"
                className="footer__support-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BiCoffee aria-hidden="true" focusable="false" />
                Buy me a coffee
            </a>
        </div>
    );
};

export default Sponsor;
