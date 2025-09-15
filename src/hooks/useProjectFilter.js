// Custom hook for project filtering
import { useState, useEffect, useCallback } from "react";
import { projectsData } from "../components/work/Data";

export const useProjectFilter = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    const filterProjects = useCallback(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    useEffect(() => {
        filterProjects();
    }, [filterProjects]);

    const handleClick = useCallback((e, index) => {
        try {
            setItem({ name: e.target.textContent.toLowerCase() });
            setActive(index);
        } catch (error) {
            console.error("Error handling filter click:", error);
        }
    }, []);

    return {
        projects,
        active,
        handleClick,
    };
};
