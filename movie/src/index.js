import React from 'react';
import ReactDOM from 'react-dom';
import {Messages} from './Messages';
import {Movie} from './Movie';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(<Messages />, document.getElementById('chat'));
ReactDOM.render(<Movie />, document.getElementById('movie'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
