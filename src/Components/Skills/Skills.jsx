import React from "react";
import "./Skills.css";

function Skills() {
    // Simple variable for conditional rendering
    const showdigitalSkills = true;

    return (
        <section className="skills">
            <h2 className="section-title">Skills</h2>

            {/* Conditional rendering within the Skills component */}
            {showdigitalSkills ? (
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>My Digital Skills</h3>
                        <ul className="skills-list">
                            <li className="skill-item">
                                Manual software Testing
                            </li>
                            <li className="skill-item">Service validation</li>
                            <li className="skill-item">Remote operation</li>
                            <li className="skill-item">Attention to detail</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Interpersonal skills</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Problem Solving</li>
                            <li className="skill-item"> Decision making</li>
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
