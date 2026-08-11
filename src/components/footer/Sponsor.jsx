import React from 'react';

const Sponsor = () => {
    return (
        <div className="footer__support">
            <a
                href="https://github.com/sponsors/iamfatihay"
                className="footer__support-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="bx bx-heart" aria-hidden="true"></i>
                Sponsor
            </a>
            <a
                href="https://www.buymeacoffee.com/iamfatihay"
                className="footer__support-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="bx bx-coffee" aria-hidden="true"></i>
                Buy me a coffee
            </a>
        </div>
    );
};

export default Sponsor;
