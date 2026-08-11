import React from "react";
import "./achievements.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Importing hackathon images
import hackathon1 from "../../assets/hackathon1.webp";
import hackathon2 from "../../assets/hackathon2.webp";
import hackathon3 from "../../assets/hackathon3.webp";
import hackathon4 from "../../assets/hackathon4.webp";

const Achievements = () => {
    const prefersReducedMotion =
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    return (
        <section className="achievements section" id="achievements">
            <h2 className="section__title" data-aos="fade-up">
                Award
            </h2>
            <span
                className="section__subtitle"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                One result worth highlighting
            </span>

            <div className="achievements__container container">
                <div className="achievements__content">
                    <div
                        className="achievements__header"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="achievements__title">
                            Black Forest Hackathon · 1st Place
                        </h3>
                        <p className="achievements__description">
                            In May 2025, our team designed and built an
                            AI-powered solution for a Liebherr Mining challenge
                            in 48 hours—and won first place.
                        </p>
                    </div>

                    <div
                        className="achievements__carousel"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Carousel
                            autoPlay={!prefersReducedMotion}
                            interval={4000}
                            transitionTime={800}
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={true}
                            showArrows={true}
                            useKeyboardArrows={true}
                            stopOnHover={true}
                            swipeScrollTolerance={50}
                            className="hackathon__carousel"
                        >
                            <div className="carousel__slide">
                                <img
                                    src={hackathon1}
                                    alt="Hackathon Winner with Prize Check"
                                    className="carousel__image"
                                    loading="lazy"
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
                                    loading="lazy"
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
                                    loading="lazy"
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
                                    loading="lazy"
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

                </div>
            </div>
        </section>
    );
};

export default Achievements;
