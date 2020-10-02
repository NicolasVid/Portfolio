import React from 'react';
import './presentation.scss';
import avatar from 'src/images/avatar.png';
import githubLogo from 'src/images/github-logo.png';
import linkedin from 'src/images/linkedin.png';

const Presentation = () => (
  <div className="presentation">
    <div className="presentation__images__container">
      <a href="https://github.com/NicolasVid" className="presentation__github">
        <img
          src={githubLogo}
          alt="Banner GIF"
        />
      </a>
      <a href="https://www.linke•din.com/in/nicolasvidale/" className="presentation__linkedin">
        <img
          src={linkedin}
          alt="Banner GIF"
        />
      </a>
    </div>
    <h1>Nicolas Vidale</h1>
    <h2>Développeur Front-end passionné</h2>
    <img
      src={avatar}
      className="presentation__avatar"
      alt="Banner GIF"
    />
    <div className="half-circle" />
  </div>
);

export default Presentation;
