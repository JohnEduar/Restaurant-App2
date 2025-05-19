import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content d-flex flex-column align-items-center mt-5">
        <h1 className="animate-title">Bienvenido a Restaurantes Colombia</h1>
        <h4 className="animate-subtitle">Explora una variedad de opciones gastronómicas en todo el país.</h4>
        <div className="hero-buttons d-flex justify-content-center gap-3 mt-4">
          <a href="#restaurantes" className="btn btn-info btn-lg" aria-label="Ver Restaurantes">
            Ver Restaurantes
          </a>
          <a href="#saber-mas" className="btn btn-info btn-lg" aria-label="Saber Más">
            Saber Más
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero