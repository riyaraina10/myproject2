import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
    // This variable will control conditional rendering
    const showSkills = true;

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <AboutMe />
                <Projects />
                {showSkills && <Skills />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
