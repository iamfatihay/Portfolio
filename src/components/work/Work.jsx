import React from "react";
import "./work.css";
import Works from "./Works";

/*
 * The id belongs on the section, not the heading: nav observation needs a
 * target tall enough to cross the observer's band, and `.section` carries the
 * scroll margin that keeps an anchor clear of the fixed header.
 */
const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Selected Work</h2>
        <span className="section__subtitle">Production impact first, experiments second</span>

        <Works />
    </section>
  );
};

export default Work;
