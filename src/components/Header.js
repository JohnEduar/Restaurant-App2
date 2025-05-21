import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header id="main-header">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bold" to="/">Restaurantes Colombia</NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          end
        >
          Inicio
        </NavLink>
        <NavLink
          to="/Search"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Buscar
        </NavLink>
        <NavLink
          to="/New"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Nuevo
        </NavLink>
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header