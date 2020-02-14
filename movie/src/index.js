import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import {Chapters} from './Chapters';
import {Messages} from './Messages';
import {Movie} from './Movie';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Messages />, document.getElementById('messenger'));
ReactDOM.render(<Movie />, document.getElementById('movie'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
