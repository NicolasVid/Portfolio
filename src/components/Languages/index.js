import React from 'react';
import './languages.scss';
import js from 'src/images/js.png';
import react from 'src/images/react.png';
import node from 'src/images/node.png';

const Languages = () => (
  <div className="languages">
    <div className="languages__images">
      <img
        src={js}
        alt="Banner GIF"
      />
      <img
        src={react}
        alt="Banner GIF"
      />
      <img
        src={node}
        alt="Banner GIF"
      />
    </div>
  </div>
);

export default Languages;
