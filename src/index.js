import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import configureStore from './redux/store';
const store = configureStore();


ReactDOM.render(<App store={store} />, document.getElementById('root'));
serviceWorker.unregister();
