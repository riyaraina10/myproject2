import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
    // This is a simple way to handle button click events without useState
    function handleProjectClick(projectName) {
        alert("You clicked on: " + projectName);
    }

    // Projects data - simple array, not using complex functions like map
    const projectsData = [
        {
            id: 1,
            title: "Designing JioOne Pay Simplifying Payments,Empowering Merchants",
            description:
                "a merchant onboarding portal that simplifies the integration of payment gateway services.",
        },
        {
            id: 2,
            title: "Weather App",
            description: "An application to check weather forecasts",
        },
        {
            id: 3,
            title: "Task Manager",
            description: "A tool to organize and track your daily tasks",
        },
    ];

    return (
        <section className="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {/* Manually rendering list items without using map */}
                <ProjectCard
                    title={projectsData[0].title}
                    description={projectsData[0].description}
                    onButtonClick={() =>
                        handleProjectClick(projectsData[0].title)
                    }
                />
                <ProjectCard
                    title={projectsData[1].title}
                    description={projectsData[1].description}
                    onButtonClick={() =>
                        handleProjectClick(projectsData[1].title)
                    }
                />
                <ProjectCard
                    title={projectsData[2].title}
                    description={projectsData[2].description}
                    onButtonClick={() =>
                        handleProjectClick(projectsData[2].title)
                    }
                />
            </div>
        </section>
    );
}

export default Projects;
