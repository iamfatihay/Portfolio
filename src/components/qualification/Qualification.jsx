import React from 'react';
import "./qualification.css";
import { useState } from 'react';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                    <div className={toggleState === 3 ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(3)}
                    >
                        <i className="uil uil-award qualification__icon"></i>Certificates
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"} >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">Stuttgart - Clarusway </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">International Economic Policy</h3>
                                <span className="qualification__subtitle">Bursa - Bursa Technical University,  Master's degree</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - paused
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Public Administration</h3>
                                <span className="qualification__subtitle">Kütahya - Dumlupinar University,  Bachelor's degree</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2012 - 2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Developer</h3>
                                <span className="qualification__subtitle">Stuttgart - Clarusway </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2019 - 2020
                                </div>
                            </div>

                        </div> */}
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Stuttgart - Hyfindr GmbH </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">Stuttgart - Clarusway, Trainee </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Shipping and Invoice Manager</h3>
                                <span className="qualification__subtitle">Ankara - Misbaşak </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2019
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Manager</h3>
                                <span className="qualification__subtitle">Bursa - htc home collection </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                    <div className={toggleState === 3 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                {/* <span className="qualification__subtitle">Clarusway</span> */}
                                <a className='qualification__link' href="https://c11n.clarusway.com/en/verify/12825043385694?ref=email" target='_blank' rel="noopener noreferrer">
                                    Credential
                                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                                </a>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">JavaScript</h3>
                                {/* <span className="qualification__subtitle">Clarusway</span> */}
                                <a className='qualification__link' href="https://c11n.clarusway.com/en/verify/46897143464598?ref=email" target='_blank' rel="noopener noreferrer">
                                    Credential
                                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                                </a>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">React</h3>
                                {/* <span className="qualification__subtitle">Clarusway</span> */}
                                <a className='qualification__link' href="https://c11n.clarusway.com/en/verify/33670067149733?ref=email" target='_blank' rel="noopener noreferrer">
                                    Credential
                                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                                </a>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">HTML & CSS</h3>
                                {/* <span className="qualification__subtitle">Clarusway</span> */}
                                <a className='qualification__link' href="https://c11n.clarusway.com/en/verify/30228568874076?ref=email" target='_blank' rel="noopener noreferrer">
                                    Credential
                                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                                </a>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Python Data Structures</h3>
                                {/* <span className="qualification__subtitle">Clarusway</span> */}
                                <a className='qualification__link' href="https://www.sololearn.com/certificates/CT-9PVLYMVL" target='_blank' rel="noopener noreferrer">
                                    Credential
                                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                                </a>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification