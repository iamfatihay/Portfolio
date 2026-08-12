import React from "react";
import "./work.css";
import Works from "./Works";
import { useCopy } from "../../i18n";

/*
 * The id belongs on the section, not the heading: nav observation needs a
 * target tall enough to cross the observer's band, and `.section` carries the
 * scroll margin that keeps an anchor clear of the fixed header.
 */
const Work = () => {
  const { work } = useCopy();

  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">{work.title}</h2>
        <span className="section__subtitle">{work.subtitle}</span>

        <Works />
    </section>
  );
};

export default Work;
