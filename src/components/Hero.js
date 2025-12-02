import React from "react";
import profileImage from "../images/profile.jpg"; // Adjust path accordingly

export default function Hero() {
  return (
    <section id="hero" className="hero" role="region" aria-label="Introduction">
      <div className="hero-content">
        <h1>
          Hello, I'm <span>Rodel Alingasa</span>
        </h1>
        <p>I'm learning on how to create a beutiful and functional digital experiences with our modern technologies</p>
        <a href="#contact" className="btn">
          View Contacts
        </a>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Rodel smiling" />
      </div>
    </section>
  );
}
