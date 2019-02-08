import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './homepage-theme/build/styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

