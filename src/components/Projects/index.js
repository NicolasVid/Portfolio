import React from 'react';
import laptop from 'src/images/laptop.png';

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
          <li>CSS | SaSS</li>
          <li>API GitHub</li>
        </ul>
      </div>
    </div>
    <div className="project__imageContainer">
      <img
        src={laptop}
        className="project__image"
        alt="Banner GIF"
      />
    </div>
  </div>
);

export default Projects;
