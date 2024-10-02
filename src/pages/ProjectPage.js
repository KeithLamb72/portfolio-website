//
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projectsSlice';

const ProjectPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) =>
    state.projects.items.find((proj) => proj.id === parseInt(id))
  );
  const status = useSelector((state) => state.projects.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="container project-details">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.fullDescription}</p>
      {/* Include additional project details */}
      <a href={project.repoLink} >
        View Source Code
      </a>
      <a href={project.liveLink} >
        View Live Project
      </a>
    </div>
  );
};

export default ProjectPage;
