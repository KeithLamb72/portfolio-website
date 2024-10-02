import React from 'react';

const AboutPage = () => (
  <div className="container">
    <h1>About Me</h1>
    <p>
      {/* Your detailed biography */}
      I'm a full-stack developer with a passion for creating dynamic and responsive web applications...
    </p>
    <h2>Skills & Technologies</h2>
    <ul className="skills-list">
      <li>JavaScript (ES6+)</li>
      <li>React & Redux</li>
      <li>Node.js & Express</li>
      <li>HTML5 & CSS3</li>
      <li>Responsive Design</li>
      {/* Add more skills */}
    </ul>
    <h2>Professional Experience</h2>
    <div className="timeline">
      {/* Implement an interactive timeline here */}
      <div className="timeline-item">
        <h3>Job Title at Company</h3>
        <span>2020 - Present</span>
        <p>Describe your role and achievements.</p>
      </div>
      {/* Add more timeline items */}
    </div>
  </div>
);

export default AboutPage;
