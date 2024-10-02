//
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projectsSlice';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.items);
  const status = useSelector((state) => state.projects.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [dispatch, status]);

  return (
    <div className="container">
      <h1>Welcome to My Portfolio</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
