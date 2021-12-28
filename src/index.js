import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

import { createStore } from 'redux';
import allReducers from './Redux/reducers'

const Store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    return (
      <h1>Hello from react</h1>
    )
  }

ReactDOM.render(<App/>, document.getElementById('react-test-widget'))

// ReactDOM.render(<Search/>,document.getElementById('widget:search'));

// export const init = (config) => {
//   ReactDOM.render(<App config={config} />, document.getElementById('byond_market_react'));
// }

// window.MyWidget = function() {
//     ReactDOM.render(<App/>, document.getElementById('byond_market_react'));
//     return this;
// }
