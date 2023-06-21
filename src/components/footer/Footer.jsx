import React from 'react';
import "./footer.css";
import logo from "../../assets/logo.gif";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__container container">
                <div>
                    <img className='logo' src={logo} alt="logo" />
                </div>
                {/* <h1 className="footer__title">Fatih Ay</h1> */}
                <div>
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">Projects</a>
                        </li>

                    </ul>

                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/fatih-ay1661/" className="footer__social-link" target="_blank">
                            <i class="bx bxl-linkedin"></i>
                        </a>
                        <a href="https://github.com/iamfatihay" className="footer__social-link" target="_blank">
                            <i class="bx bxl-github"></i>
                        </a>
                        <a href="https://twitter.com/Fatih__AY" className="footer__social-link" target="_blank">
                            <i class="bx bxl-twitter"></i>
                        </a>
                    </div>

                    <span className='footer__copy' >&#169; All rigths reserved</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer