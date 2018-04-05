import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '@homepage/theme';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
