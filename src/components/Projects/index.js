import React from 'react';

import './projects.scss';

const Projects = () => (
  <div className="project">
    <h1>PROJETS</h1>
    <div className="project__card">
      <div className="project__card--item">
        <h2>MABÉA</h2>
        <ul>
          <li>React</li>
          <li>Node JS | Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="project__card--item">
        <h2>Github API</h2>
        <ul>
          <li>React</li>
          <li>CSS | SCSS</li>
          <li>API GitHub</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Projects;
