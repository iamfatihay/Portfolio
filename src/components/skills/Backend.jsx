import React from "react";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-python skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-code-alt skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Django</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-data skills__icon"></i>

                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-firebase skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-network-chart skills__icon"></i>

                        <div>
                            <h3 className="skills__name">REST API</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-php skills__icon"></i>

                        <div>
                            <h3 className="skills__name">PHP/Symfony</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;
