import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Component/searchComponent';

ReactDOM.render(
    <Search />,
    document.getElementById('widget:search'), // <-- NOTE the element id
);