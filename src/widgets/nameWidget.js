import React from 'react';
import ReactDOM from 'react-dom';
import Name from '../Component/nameComponent';

ReactDOM.render(
    <Name />,
    document.getElementById('widget:name'), // <-- NOTE the element id
);