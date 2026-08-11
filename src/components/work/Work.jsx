import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section">
        <h2 className="section__title" id="portfolio">Selected Work</h2>
        <span className="section__subtitle">Production impact first, experiments second</span>

        <Works />
    </section>
  );
};

export default Work;
