import React from 'react';

import './portfolio.scss';
import Presentation from '../Presentation';
import Skills from '../Skills';
import Projects from '../Projects';
import Languages from '../Languages';

const App = () => (
  <div className="app">
    <Presentation />
    <Languages />
    <Skills />
    <Projects />
  </div>
);

export default App;
