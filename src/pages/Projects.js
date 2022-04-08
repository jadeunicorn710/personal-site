import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
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
          <p>One side of me - as a passionate software developer, who proactively
            explores the fast-evolving computer science fields such as web development,
            data analytics & visualization, big data & cloud computing, machine learning
            & deep learning, and computer vision. Hands on projects benefited me a lot
            with the new technologies and ideas, and more importanly, they equiped me with
            the knowledge and inspired me to solve problems interdisciplinarily. Followings
            are some cool projects that I have worked on.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
