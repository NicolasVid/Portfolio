import React from 'react';
import { render } from 'react-dom';

import Portfolio from 'src/components/Portfolio';

const rootReactElement = <Portfolio />;

const target = document.getElementById('root');

render(rootReactElement, target);
