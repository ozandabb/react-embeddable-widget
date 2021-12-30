import React from 'react';
import ReactDOM from 'react-dom';
import Name from '../Component/nameComponent';

import { createStore } from 'redux';
import nameReducer from '../Redux/reducers/nameReducer';
import { Provider } from 'react-redux';
import store from '../Redux/store/store'

// const store = createStore(
//     nameReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

ReactDOM.render(
    <Provider store={store}>
        <Name/>
    </Provider>,
    document.getElementById('widget:name'), // <-- NOTE the element id
);