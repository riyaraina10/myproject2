import React from "react";
import "./Skills.css";

function Skills() {
    // Simple variable for conditional rendering
    const showTechnicalSkills = true;

    return (
        <section className="skills">
            <h2 className="section-title">Skills</h2>

            {/* Conditional rendering within the Skills component */}
            {showTechnicalSkills ? (
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>Technical Skills</h3>
                        <ul className="skills-list">
                            <li className="skill-item">HTML & CSS</li>
                            <li className="skill-item">JavaScript</li>
                            <li className="skill-item">React</li>
                            <li className="skill-item">Responsive Design</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Soft Skills</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Problem Solving</li>
                            <li className="skill-item">Communication</li>
                            <li className="skill-item">Teamwork</li>
                            <li className="skill-item">Time Management</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Skills section is currently being updated.</p>
            )}
        </section>
    );
}

export default Skills;
