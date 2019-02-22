
//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import App from './App';

//Css
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// ==========
const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
