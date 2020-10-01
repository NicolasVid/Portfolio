import React from 'react';
import './languages.scss';
import js from 'src/images/js.png';
import react from 'src/images/react.png';
import node from 'src/images/node.png';

const Languages = () => (
  <div className="languages">
    <img
      src={js}
      className="languages__images"
      alt="Banner GIF"
    />
    <img
      src={react}
      className="languages__images"
      alt="Banner GIF"
    />
    <img
      src={node}
      className="languages__images"
      alt="Banner GIF"
    />
  </div>
);

export default Languages;
