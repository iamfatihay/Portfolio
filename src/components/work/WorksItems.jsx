import React, { memo } from "react";

// Portfolio project item component with optimized image loading
const WorksItems = memo(({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${item.title} project`}
            >
                <img
                    src={item.image}
                    alt={`${item.title} project screenshot`}
                    className="work__img"
                    loading="lazy"
                />
            </a>

            <h3 className="work__title">{item.title}</h3>
            <div className="links">
                <a
                    href={item.link}
                    className="work__button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} live demo`}
                >
                    Live Demo
                    <i
                        className="bx bx-right-arrow-alt work__button-icon"
                        aria-hidden="true"
                    ></i>
                </a>
                <a
                    href={item.link2}
                    className="work__button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} source code`}
                >
                    Source Code
                    <i
                        className="bx bx-right-arrow-alt work__button-icon"
                        aria-hidden="true"
                    ></i>
                </a>
            </div>
        </div>
    );
});

WorksItems.displayName = "WorksItems";

export default WorksItems;
