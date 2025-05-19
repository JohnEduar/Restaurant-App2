import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Sección Información */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Restaurantes Colombia</h5>
            <p>Explora los mejores restaurantes de Colombia. Calidad y sabor en cada plato.</p>
          </div>

          {/* Sección Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contacto</h5>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Calle 123, Bogotá, Colombia</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +57 300 1234567</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> contacto@restaurantescolombia.com</p>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Síguenos</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Restaurantes Colombia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;