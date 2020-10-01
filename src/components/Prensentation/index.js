import React from 'react';
import './presentation.scss';
import shark from 'src/images/shark.gif';

const Presentation = () => (
  <div className="presentation">
    <h1>Développeur Front-end - React</h1>
    <h2>Passionné et futur président de la street</h2>
    <img
      src={shark}
      className="presentation__image"
      alt="Banner GIF"
    />
  </div>
);

export default Presentation;
