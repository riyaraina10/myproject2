import React from "react";
import "./Footer.css";

function Footer() {
    // Simple event handler for the button
    function handleClick() {
        const footerMessage = document.getElementById("footer-message");

        // If message is hidden, show it
        if (
            footerMessage.style.display === "none" ||
            footerMessage.style.display === ""
        ) {
            footerMessage.style.display = "block";
            footerMessage.textContent = "Thank you for your interest!";
        } else {
            // If message is shown, hide it
            footerMessage.style.display = "none";
        }
    }

    return (
        <footer className="footer">
            <p>&copy; 2025 My Portfolio</p>
            <button className="contact-button" onClick={handleClick}>
                Contact Me
            </button>
            <p id="footer-message" className="footer-message"></p>
        </footer>
    );
}

export default Footer;
