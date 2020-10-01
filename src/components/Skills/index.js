import React from 'react';

import './skills.scss';

const Skills = () => (
  <div className="skills">
    <div className="skills__card">
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
      <h1>BACKEND</h1>
      <ul>
        <li>Node JS</li>
        <li>Express</li>
        <li>Jsonwebtoken</li>
        <li>Socket.io</li>
      </ul>
    </div>
    <div className="skills__card">
      <h1>BATABASE</h1>
      <ul>
        <li>MongoDB</li>
      </ul>
    </div>
    <div className="skills__card">
      <h1>DÉPLOIEMENT</h1>
      <ul>
        <li>Heroku</li>
        <li>Git</li>
      </ul>
    </div>
  </div>
);

export default Skills;
