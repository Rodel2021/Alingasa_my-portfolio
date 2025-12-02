import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <h2 className="logo">MyPortfolio</h2>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
