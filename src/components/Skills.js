import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="skills" role="region" aria-label="Skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <article tabIndex="0" className="skill-card" aria-label="JavaScript skill">
          <h3>JavaScript</h3>
          <p>Proficient in ES6+, DOM manipulation, and async programming.</p>
        </article>

        <article tabIndex="0" className="skill-card" aria-label="React skill">
          <h3>React</h3>
          <p>Experienced with hooks, state management, and component design.</p>
        </article>

        <article tabIndex="0" className="skill-card" aria-label="CSS skill">
          <h3>CSS</h3>
          <p>Skilled in responsive design, Flexbox, Grid, and animations.</p>
        </article>

        {/* Add more skills as needed */}
      </div>
    </section>
  );
}
