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
           <a href="/"><img src={ Logo } class="logo" alt="Nav"/></a>
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
        <a href="/" class="btn">Leer mas</a>
      </header>

      {/* LOS SKILLS */}
      <div class="aplica">
        <div>
          <h1 class="titulo">Aplicativos que Manejo</h1>
          <br/>
          <img src="img/html.png" alt="HTML"></img>
          <h3>HTML 5</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="/">Loren More<i class="fas fa-angle-double-right"></i></a>

          <img src="img/css.jfif" alt="CSS"></img>
          <h3>CSS</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="/">Loren More<i class="fas fa-angle-double-right"></i></a>

          <img src="img/bootstrap.jfif" alt="Bootstrap"></img>
          <h3>Bootstrap 4</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="/" class="btn">Loren More<i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>

      {/* Proposito */}      
      <section class="baner">
        <div class="content">
          <h2>Al generar un proyecto</h2>
          <p>Officia pariatur aliqua tempor mollit elit nulla id incididunt sunt excepteur et aliquip officia sit.</p>
          <a href="/" class="btn">Lorem More<i class="fas fa-angle-double ride"></i></a>
        </div>
      </section>

      {/* PROYECTOS */}
      <div class="aplica">
        <div>
          <h1 class="titulo">Lo proyectos realizados</h1>
          <br/>
          <img src="img/html.png" alt="HTML"></img>
          <h3>HTML 5</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="/">Loren More<i class="fas fa-angle-double-right"></i></a>

          <img src="img/css.jfif" alt="CSS"></img>
          <h3>CSS</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="/">Loren More<i class="fas fa-angle-double-right"></i></a>

          <img src="img/bootstrap.jfif" alt="Bootstrap"></img>
          <h3>Bootstrap 4</h3>
          <p>Magna aliqua est eiusmod commodo nulla laboris culpa nulla voluptate voluptate occaecat commodo.</p>
          {/* A qui es la base de el fichero */}
          <a href="/" class="btn">Loren More<i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>

      {/* Agradecimientos */}
      <section class="proyecto">
        <div class="proyecto-one">
          <h2>Lorem</h2>
          <p>Est enim Lorem quis incididunt labore ex excepteur.</p>
          <a href="/" class="btn">Leer mas</a>
        </div>
      </section>

      {/* SOCIALES */}
        <section class="social">
          <p class="nav-menu">Redes Sociales</p>
            <div class="link">
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i class="fab-fa-thitter-fa"></i>
                </a>
            </div>
        </section>
      <div>
          <div class="footer-links">
            <div class="footer-container">
              <ul>
                <li>
                  <a href="/">
                    <h3>Title One</h3>
                  </a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">
                    <h3>Title One</h3>
                  </a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
                <li>
                  <a href="/">Blockchain></a>
                </li>
              </ul>
            </div>
          
          </div>

          <footer class="footer">
            <h3>TECH NEWS COPYRGT</h3>
          </footer>
      </div>
    </div>  

  );
}

export default App;