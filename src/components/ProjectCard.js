//
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <Link to={`/projects/${project.id}`}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Link>
  </div>
);

export default ProjectCard;
