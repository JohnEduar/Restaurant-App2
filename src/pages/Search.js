// src/pages/Search.js
import React, { useState, useEffect } from 'react';
import RestaurantCards from '../components/RestaurantCards';
import RestaurantModal from '../components/RestaurantModal';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const restaurantesQuemados = [
    {
      id: 1,
      name: 'La Cumbre del Sabor',
      description: 'Un restaurante de cocina internacional...',
      image: 'https://images.unsplash.com/photo-1552566626-2d907dab0dff?...',
      address: 'Calle 123, Bogotá',
      phone: '+57 300 1234567',
      hours: 'Lunes a Domingo: 12pm - 11pm',
    },
    {
      id: 2,
      name: 'La Casa Gourmet',
      description: 'Experiencia gastronómica...',
      image: 'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?...',
      address: 'Carrera 45, Medellín',
      phone: '+57 300 7654321',
      hours: 'Martes a Domingo: 1pm - 10pm',
    },
    {
      id: 3,
      name: 'El Refugio del Valle',
      description: 'Ofrece platos tradicionales...',
      image: 'https://images.unsplash.com/photo-1567745219000-b99afacf5ef6?...',
      address: 'Avenida 10, Cali',
      phone: '+57 300 9876543',
      hours: 'Miércoles a Lunes: 11am - 9pm',
    },
  ];

  const [restaurantesNuevos, setRestaurantesNuevos] = useState([]);

  useEffect(() => {
    const nuevos = JSON.parse(localStorage.getItem('restaurantesNuevos')) || [];
    setRestaurantesNuevos(nuevos);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setQuery(term);

    const todos = [...restaurantesQuemados, ...restaurantesNuevos];
    const filtrados = todos.filter((r) =>
      r.name.toLowerCase().includes(term)
    );

    setResults(filtrados);
  };

  const handleShowModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedRestaurant(null);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Buscar Restaurante</h2>
        <div className="position-relative mb-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Buscar restaurante..."
            className="form-control form-control-lg rounded-pill shadow-sm ps-5 animated-input"
          />
          <span
            className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted"
            style={{ pointerEvents: 'none' }}
          >
            <i className="bi bi-search"></i>
          </span>
        </div>

      <div className="row g-4">
        {results.length > 0 ? (
          results.map((restaurant) => (
            <div key={restaurant.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <RestaurantCards {...restaurant} onViewMore={() => handleShowModal(restaurant)} />
            </div>
          ))
        ) : (
          query && <p className="text-center">No se encontraron restaurantes con ese nombre.</p>
        )}
      </div>

      <RestaurantModal
        show={modalShow}
        handleClose={handleCloseModal}
        restaurant={selectedRestaurant}
      />
    </div>
  );
};

export default Search;