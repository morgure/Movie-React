import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import Chatroom from './Chatroom';
import Movie from './Movie';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Movie />, document.getElementById('movie'));
ReactDOM.render(<Chatroom />, document.getElementById('chatroom'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
