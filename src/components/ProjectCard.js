import React from 'react';
import '../styles/Portfolio.css';  // Importing custom styles

function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Keith Lamb</h1>
        <p>Full Stack Web Developer | Software Engineer</p>
      </header>
      <section className="bio">
        <h2>About Me</h2>
        <p>[Insert a brief bio here]</p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {/* Project components will go here */}
        </div>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>[Insert contact information and form here]</p>
      </section>
    </div>
  );
}

export default Portfolio;
