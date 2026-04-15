import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ProjectCell from '../components/Projects/ProjectCell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Yunlin Qi's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>Professional projects from my work at AWS.</p>
        </div>
      </header>
      {data.map((project) => (
        <ProjectCell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
