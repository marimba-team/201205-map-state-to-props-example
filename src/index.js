import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducer';

const store = createStore(
  reducers,
);

// store.subscribe(() => console.log('!!! subscribe !!! ', store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

// // 액쑌!
// store.dispatch({ type: SET_A, a: 1 });
// store.dispatch({ type: SET_B, b: 2 });
// store.dispatch({ type: SET_C, c: 3 });
