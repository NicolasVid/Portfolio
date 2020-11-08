import React from 'react';
import laptop from 'src/images/laptop.png';

import './projects.scss';

const Projects = () => (
  <div className="project">
    <h1>PROJETS</h1>
    <div className="project__card">
      <div className="project__card__item">
        <h2>MABÉA</h2>
        <ul>
          <li>React</li>
          <li>Node JS | Express</li>
          <li>MongoDB</li>
        </ul>
        <div className="project-responsive">Voir les liens</div>
        <div className="project__card__item--hover">
          <a href="https://github.com/NicolasVid/Mabea"><button type="button">Code source</button></a>
          <a href="https://nicolasvid.github.io/Mabea"><button type="button">Le site</button></a>
        </div>
      </div>
      <div className="project__card__item">
        <h2>GITHUB API</h2>
        <ul>
          <li>React</li>
          <li>CSS | SaSS</li>
          <li>API GitHub</li>
        </ul>
        <div className="project-responsive">Voir les liens</div>
        <div className="project__card__item--hover">
          <a href="https://github.com/NicolasVid/Github_API"><button type="button">Code source</button></a>
          <a href="https://nicolasvid.github.io/Github_API/"><button type="button">Le site</button></a>
        </div>
      </div>
      <div className="project__card__item">
        <h2>HÉRO</h2>
        <ul>
          <li>React | Redux</li>
          <li>Node JS | Express</li>
          <li>Postgres</li>
        </ul>
        <div className="project-responsive">Voir les liens</div>
        <div className="project__card__item--hover">
          <a href="https://github.com/NicolasVid/Hero"><button type="button">Code source</button></a>
          <a href="http://34.207.247.234:5000/"><button type="button">Le site</button></a>
        </div>
      </div>
    </div>
    <div className="project__imageContainer">
      <img
        src={laptop}
        className="project__image"
        alt="avatar_laptop"
      />
    </div>
  </div>
);

export default Projects;
