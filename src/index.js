import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./apps/css/global.css";
import Welcomeapp from './apps/Welcomeapp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Welcomeapp/>}></Route>
        </Routes>
    
    
    </BrowserRouter>
 


  </React.StrictMode>
);

