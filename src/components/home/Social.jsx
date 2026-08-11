import React from "react";
import { LiaXing } from "react-icons/lia";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/fatih-ay1661/" className="home__social-icon" target="_blank" rel="noopener noreferrer" aria-label="Fatih Ay on LinkedIn">
        <i className="uil uil-linkedin-alt" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/iamfatihay" className="home__social-icon" target="_blank" rel="noopener noreferrer" aria-label="Fatih Ay on GitHub">
        <i className="uil uil-github" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/Fatih__AY" className="home__social-icon" target="_blank" rel="noopener noreferrer" aria-label="Fatih Ay on X">
        <i className="uil uil-twitter-alt" aria-hidden="true"></i>
      </a>
      <a href="https://www.xing.com/profile/Fatih_AY033127/cv" className="home__social-icon" target="_blank" rel="noopener noreferrer" aria-label="Fatih Ay on Xing">
        <LiaXing aria-hidden="true" />
      </a>
    </div>
  );
};

export default Social;
