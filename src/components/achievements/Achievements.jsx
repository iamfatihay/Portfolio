import React from "react";
import "./achievements.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Importing hackathon images
import hackathon1 from "../../assets/hackathon1.jpg";
import hackathon2 from "../../assets/hackathon2.jpg";
import hackathon3 from "../../assets/hackathon3.jpg";
import hackathon4 from "../../assets/hackathon4.jpg";

const Achievements = () => {
    return (
        <section className="achievements section" id="achievements">
            <h2 className="section__title" data-aos="fade-up">
                Achievements
            </h2>
            <span
                className="section__subtitle"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                My Success Stories
            </span>

            <div className="achievements__container container">
                <div className="achievements__content">
                    <div
                        className="achievements__header"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="achievements__title">
                            🏆 Black Forest Hackathon Winner
                        </h3>
                        <p className="achievements__description">
                            From May 9-11, I participated in the Black Forest
                            Hackathon, tackling a coding challenge presented by
                            Liebherr Mining. After 48 hours of intense
                            collaboration, my team secured
                            <strong> 1st place</strong> with an AI-powered
                            solution.
                        </p>
                    </div>

                    <div
                        className="achievements__carousel"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Carousel
                            autoPlay
                            interval={4000}
                            transitionTime={800}
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={true}
                            showArrows={false}
                            useKeyboardArrows={true}
                            swipeScrollTolerance={50}
                            className="hackathon__carousel"
                        >
                            <div className="carousel__slide">
                                <img
                                    src={hackathon1}
                                    alt="Hackathon Winner with Prize Check"
                                    className="carousel__image"
                                />
                                <div className="carousel__legend">
                                    <h4>1st Place Winner</h4>
                                    <p>Prize Check for 3,000€ - Team Hyfindr</p>
                                </div>
                            </div>

                            <div className="carousel__slide">
                                <img
                                    src={hackathon2}
                                    alt="Team collaboration during hackathon"
                                    className="carousel__image"
                                />
                                <div className="carousel__legend">
                                    <h4>Intense Collaboration</h4>
                                    <p>
                                        48 hours of dedicated teamwork and
                                        innovation
                                    </p>
                                </div>
                            </div>

                            <div className="carousel__slide">
                                <img
                                    src={hackathon3}
                                    alt="Winning team celebration"
                                    className="carousel__image"
                                />
                                <div className="carousel__legend">
                                    <h4>Victory Celebration</h4>
                                    <p>
                                        Celebrating success with the winning
                                        team
                                    </p>
                                </div>
                            </div>

                            <div className="carousel__slide">
                                <img
                                    src={hackathon4}
                                    alt="Hackathon venue and participants"
                                    className="carousel__image"
                                />
                                <div className="carousel__legend">
                                    <h4>Event Venue</h4>
                                    <p>
                                        Black Forest Hackathon - Liebherr Mining
                                        Challenge
                                    </p>
                                </div>
                            </div>
                        </Carousel>
                    </div>

                    <div
                        className="achievements__current-work"
                        data-aos="fade-up"
                        data-aos-delay="350"
                    >
                        <div className="current-work__card">
                            <div className="current-work__header">
                                <i className="bx bx-buildings current-work__icon"></i>
                                <h3 className="current-work__title">
                                    Currently Building Innovation At
                                </h3>
                            </div>
                            <a
                                href="https://hyfindr.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="current-work__link"
                            >
                                <span className="current-work__company">
                                    Hyfindr GmbH
                                </span>
                                <i className="bx bx-link-external"></i>
                            </a>
                            <span className="current-work__role">
                                Lead Web Developer
                            </span>
                            <p className="current-work__description">
                                Leading the development of B2B hydrogen economy
                                platform, transforming how businesses connect in
                                the green industry sector.
                            </p>
                        </div>
                    </div>

                    <div
                        className="achievements__details"
                        data-aos="fade-up"
                        data-aos-delay="450"
                    >
                        <div className="achievements__info">
                            <div className="achievements__box">
                                <i className="bx bx-trophy achievements__icon"></i>
                                <h4 className="achievements__box-title">
                                    Position
                                </h4>
                                <span className="achievements__box-subtitle">
                                    1st Place
                                </span>
                            </div>

                            <div className="achievements__box">
                                <i className="bx bx-calendar achievements__icon"></i>
                                <h4 className="achievements__box-title">
                                    Date
                                </h4>
                                <span className="achievements__box-subtitle">
                                    May 9-11, 2025
                                </span>
                            </div>

                            <div className="achievements__box">
                                <i className="bx bx-group achievements__icon"></i>
                                <h4 className="achievements__box-title">
                                    Team
                                </h4>
                                <span className="achievements__box-subtitle">
                                    Hyfindr
                                </span>
                            </div>

                            <div className="achievements__box">
                                <i className="bx bx-cog achievements__icon"></i>
                                <h4 className="achievements__box-title">
                                    Solution
                                </h4>
                                <span className="achievements__box-subtitle">
                                    AI-Powered
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
