import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Header from './common/header/Header';
import './index.css';

// import Details from './screens/details/Details';
// ReactDOM.render(<Details/>,document.getElementById('root'));

// import Home from './screens/home/Home';
// ReactDOM.render(<Home/>,document.getElementById('root'));




ReactDOM.render(<BrowserRouter><Header/></BrowserRouter>,document.getElementById('root'));

