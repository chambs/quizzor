import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import '../node_modules/material-design-lite/material.min.css';
// import '../node_modules/material-design-lite/material.min.js';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



/**
<link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
<script src="/node_modules/material-design-lite/material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 */