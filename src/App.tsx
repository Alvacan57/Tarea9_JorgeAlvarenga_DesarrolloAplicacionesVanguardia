import React from "react";
import "./Styles.css";
import { Antonimos } from "./components/Antonimos";
import { Definiciones } from "./components/Definiciones";
import { Sinonimos } from "./components/Sinonimos";
import { Inicio } from "./components/Inicio";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">
                    <img alt="Inicio" src="https://thumbs.dreamstime.com/b/bot%C3%B3n-de-icono-inicio-158711757.jpg" style={{width:30, height:25, borderRadius: 25}}/>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Definiciones">
                      BUSCAR DEFINICIONES
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Sinonimos">
                      BUSCAR SINONIMOS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Antonimos">
                      BUSCAR ANTONIMOS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flexContainerPrincipal">
                <Inicio />
              </div>
            }
          />
          <Route path="/Definiciones" element={<Definiciones />} />
          <Route path="/Sinonimos" element={<Sinonimos />} />
          <Route path="/Antonimos" element={<Antonimos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
