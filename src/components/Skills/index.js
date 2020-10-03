import React from 'react';
import front from 'src/images/front.png';
import back from 'src/images/back.png';
import dataBase from 'src/images/dataBase.png';
import deployment from 'src/images/deployment.png';

import './skills.scss';

const Skills = () => (
  <div className="skills">
    <div className="skills__card">
      <img
        src={front}
        alt="Banner GIF"
      />
      <h1>FRONTEND</h1>
      <ul>
        <li>HTML</li>
        <li>CSS | SaSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
    </div>
    <div className="skills__card">
      <img
        src={back}
        alt="Banner GIF"
      />
      <h1>BACKEND</h1>
      <ul>
        <li>Node JS</li>
        <li>Express</li>
      </ul>
    </div>
    <div className="skills__card">
      <img
        src={dataBase}
        alt="Banner GIF"
      />
      <h1>BATABASE</h1>
      <ul>
        <li>MongoDB</li>
      </ul>
    </div>
    <div className="skills__card">
      <img
        src={deployment}
        alt="Banner GIF"
      />
      <h1>DÉPLOIEMENT</h1>
      <ul>
        <li>Heroku</li>
        <li>Git</li>
      </ul>
    </div>
  </div>
);

export default Skills;
