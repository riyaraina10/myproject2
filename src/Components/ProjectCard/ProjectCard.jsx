import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    // Destructuring props
    const { title, description, imgPlaceholder } = props;

    return (
        <div className="project-card">
            <div className="project-image">{imgPlaceholder}</div>
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <button
                    className="project-button"
                    onClick={props.onButtonClick}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;
