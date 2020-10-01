import React from 'react';
import './presentation.scss';
import avatar from 'src/images/avatar.png';

const Presentation = () => (
  <div className="presentation">
    <h1>Nicolas Vidale</h1>
    <h2>Développeur Front-end passionné</h2>
    <img
      src={avatar}
      className="presentation__image"
      alt="Banner GIF"
    />
  </div>
);

export default Presentation;
