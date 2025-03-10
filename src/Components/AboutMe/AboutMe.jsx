import React from "react";
import "./AboutMe.css";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! I'm a web developer specializing in React
                        applications. I enjoy creating responsive, user-friendly
                        interfaces and solving complex problems.
                    </p>
                    <p>
                        I have experience working with various front-end
                        technologies and am always eager to learn more.
                    </p>
                </div>
                <div className="about-image">
                    {/* This would be your profile image */}
                    <div className="profile-placeholder">Profile Image</div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
