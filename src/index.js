import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import Header from './components/layouts/header/Header';
import * as serviceWorker from './serviceWorker';
import Content from "./components/layouts/content/Content";
import Footer from "./components/layouts/footer/Footer";
import Register from "./components/layouts/content/forms/Register";
import Main from './components/main/Main';
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Content />, document.getElementById('content'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));
// ReactDOM.render(<Register />, document.getElementById('register'));
ReactDOM.render(<Main/>, document.getElementById('container'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
