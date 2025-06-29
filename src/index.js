import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './About';
import Contact from './Contact';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myform from './Myform';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myform></Myform>
    <Abc></Abc>
    <Contact></Contact>

  </React.StrictMode>
);

