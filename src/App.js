import React from 'react';
import Logo from './img/Dra.png';
import './index.css';

/* import { Route } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; */


function App() {
  return (
    <div class="pantalla">
      {/* Navegación */}
      <div class="container">
        <nav class="nav-main">
           <a href="/">  <img src={ Logo } class="logo"> </img> </a>
          <ul class="nav-menu">
            <li>
              <a href="/">Pablo</a>
            </li>
          </ul>
          <ul class="nav-menu-rigth">
            <li >
              <a href="/">F</a>
            </li>
            <li >
              <a href="/">F</a>
            </li>
          </ul>
        </nav>
        <hr></hr>
      </div>

        {/* SHOWCASE */}
      <header class="showcase">
        <h2>Hola</h2>
        <p>Irure enim exercitation ea ullamco amet sit quis occaecat ullamco culpa nisi tempor nulla.</p>
        <a href="#" class="btn">Leer mas</a>
      </header>

      {/* LOS APLICATIVOS */}
      <div class="aplica">
        <div>
          <img src="img/compu.jpeg" alt="New 1"></img>
          <h3>Reprehenderit ullamco ea do quis eiusmod esse irure.</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="#">Loren More>><i class=""></i></a>

          <img src="img/compu1.jpeg" alt="New 2"></img>
          <h3>Reprehenderit ullamco ea do quis eiusmod esse irure.</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="#">Loren More>><i class=""></i></a>

          <img src="img/compu2.jpeg" alt="New 3"></img>
          <h3>Reprehenderit ullamco ea do quis eiusmod esse irure.</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="#">Loren More>><i class=""></i></a>

        </div>


      </div>
    </div>  
  );
}

export default App;