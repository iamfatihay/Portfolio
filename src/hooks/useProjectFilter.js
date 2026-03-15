// Custom hook for project filtering (legacy — not currently in use)
import { useState, useCallback } from "react";
import { featuredProjects, archiveProjects } from "../components/work/Data";

export const useProjectFilter = () => {
    const [showArchive, setShowArchive] = useState(false);

    const toggleArchive = useCallback(() => {
        setShowArchive((prev) => !prev);
    }, []);

    return {
        featuredProjects,
        archiveProjects,
        showArchive,
        toggleArchive,
    };
};
