import React from "react";
import "./AboutMe.css";
import ayushi from "../../images/ayushi.jpeg";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hi, I'm Ayushi a UX/UI designer with 4+ years of
                        experience crafting impactful digital products for
                        B2B/B2C SaaS in fintech, Telecom, and more specialising
                        in UX research, UI design. I help businesses bring their
                        ideas to life by transforming complex problems into
                        intuitive, user-friendly solutions.
                    </p>
                    <p>
                        I’m passionate about design exploration, tech
                        innovation, and crafting user-centered experiences that
                        make a difference. When I’m not designing, you’ll likely
                        find me brainstorming new ideas or enjoying a good cup
                        of chai. ☕
                    </p>
                </div>
                <div className="about-image">
                    {/* This would be your profile image */}
                    <div className="profile-placeholder">
                        <img
                            src={ayushi}
                            alt="Ayushi - UX/UI Designer"
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
