import React from "react";
import { projectsNav } from "./Data";
import WorksItems from "./WorksItems";
import { useProjectFilter } from "../../hooks/useProjectFilter";

const Works = () => {
    const { projects, active, handleClick } = useProjectFilter();

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => handleClick(e, index)}
                            className={`${
                                active === index ? "active-work" : ""
                            } work__item`}
                            key={index}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleClick(e, index);
                                }
                            }}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorksItems item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Works;
