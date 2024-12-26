import React from 'react';
import { LiaXing } from 'react-icons/lia';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/fatih-ay1661/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://github.com/iamfatihay" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-github"></i>
      </a>
      <a href="https://twitter.com/Fatih__AY" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a href="https://www.xing.com/profile/Fatih_AY033127/cv" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        < LiaXing />
      </a>
      

    </div>
  )
}

export default Social
