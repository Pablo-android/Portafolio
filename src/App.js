import React from 'react';
import './styler.css';
import { Route } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Logo from './img/Dra.png';


function App() {
  return (
      <div>
        <header>
          <nav class="nav-main">
            <a href="/" > <img src={Logo} class="logo"/> </a>
            <ul class="nav-menu">
              <li>
                <a href="h">PABLO</a>
              </li>
            </ul>

            <ul classs="nav menu-right">
              <li>
                <a href="h">PABLO</a>
              </li>
              <li>
                <a href="h">PABLO</a>
              </li>
              
            </ul>

          </nav>
            <hr></hr>
        </header>


      </div>

  );
}

export default App;