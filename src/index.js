import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {Provider} from 'react-redux'
import persistor from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={persistor }>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

