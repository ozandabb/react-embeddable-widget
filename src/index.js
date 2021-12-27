// import React from 'react';
// import { render } from 'react-dom';

// import App from './Component/search';

// render(
//   <App />,
//   document.getElementById('app')
// );


import React from 'react';
import ReactDOM from 'react-dom';
// import Search from './Component/searchComponent';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

const App = () => {
    return (
      <h1>Hello from react</h1>
    )
  }

ReactDOM.render(<App/>, document.getElementById('widget:search'))

// ReactDOM.render(<Search/>,document.getElementById('widget:search'));

// export const init = (config) => {
//   ReactDOM.render(<App config={config} />, document.getElementById('byond_market_react'));
// }

// window.MyWidget = function() {
//     ReactDOM.render(<App/>, document.getElementById('byond_market_react'));
//     return this;
// }
