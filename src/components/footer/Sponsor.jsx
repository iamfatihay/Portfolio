import React from 'react';

const Sponsor = () => {
    return (
        <div className="footer__sponsor">
            <p className="footer__sponsor-text">Support My Work</p>
            <div className="footer__sponsor-buttons">
                <a 
                    href="https://github.com/sponsors/iamfatihay" 
                    className="footer__sponsor-button" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Sponsor on GitHub"
                >
                    <i className="bx bxl-github" aria-hidden="true"></i>
                    <span>Sponsor</span>
                </a>
                <a 
                    href="https://www.buymeacoffee.com/iamfatihay" 
                    className="footer__sponsor-button footer__sponsor-button--coffee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Buy me a coffee"
                >
                    <i className="bx bx-coffee" aria-hidden="true"></i>
                    <span>Buy me a coffee</span>
                </a>
            </div>
        </div>
    );
};

export default Sponsor;
