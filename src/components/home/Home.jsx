import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import portfolioImage from "../../assets/portfolio.jpg";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div className="home__img">
                        <img
                            src={portfolioImage}
                            alt="Fatih AY - Full Stack Developer Portfolio"
                            className="lazy-image"
                            loading="lazy"
                        />
                    </div>

                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
