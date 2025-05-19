import React, { useState } from 'react';
import Hero from '../components/Hero';
import RestaurantCards from '../components/RestaurantCards';
import RestaurantModal from '../components/RestaurantModal';

const Home = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const restaurantes = [
    {
      id: 1,
      name: 'La Cumbre del Sabor',
      description: 'Un restaurante de cocina internacional que combina lo mejor de la gastronomía europea y asiática en un ambiente elegante con vistas panorámicas',
      image: 'https://images.unsplash.com/photo-1552566626-2d907dab0dff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Calle 123, Bogotá',
      phone: '+57 300 1234567',
      hours: 'Lunes a Domingo: 12pm - 11pm',
    },
    {
      id: 2,
      name: 'La Casa Gourmet',
      description: 'Experiencia gastronómica con platos internacionales. Ambiente acogedor y elegante, ideal para cenas románticas o celebraciones especiales',
      image: 'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Carrera 45, Medellín',
      phone: '+57 300 7654321',
      hours: 'Martes a Domingo: 1pm - 10pm',
    },
    {
      id: 3,
      name: 'El Refugio del Valle',
      description: 'Ofrece platos tradicionales de la cocina colombiana, con ingredientes frescos de la región, en un entorno acogedor y rústico rodeado de naturaleza',
      image: 'https://images.unsplash.com/photo-1567745219000-b99afacf5ef6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Avenida 10, Cali',
      phone: '+57 300 9876543',
      hours: 'Miércoles a Lunes: 11am - 9pm',
    },
  ];

  const handleShowModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedRestaurant(null);
  };

  return (
    <>
      <Hero />
      <div id="restaurantes" className="container mt-5 mb-5">
        <div className="row g-4">
          {restaurantes.map((restaurant) => (
            <div key={restaurant.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <RestaurantCards
                {...restaurant}
                onViewMore={() => handleShowModal(restaurant)}
              />
            </div>
          ))}
        </div>
      </div>

      <RestaurantModal
        show={modalShow}
        handleClose={handleCloseModal}
        restaurant={selectedRestaurant}
      />

      <section className="container my-5" id="saber-mas">
        <h2 className="mb-4">Sobre Nosotros</h2>
        <p>
          Somos una plataforma dedicada a conectar a los amantes de la buena comida con los mejores restaurantes de Colombia. 
          Nuestro objetivo es ofrecer una experiencia gastronómica única, facilitando la exploración y el descubrimiento de opciones variadas y deliciosas.
        </p>
        <p>
          Valoramos la calidad, la autenticidad y el sabor, apoyando a los restaurantes locales y brindando a nuestros usuarios una guía confiable y actualizada.
        </p>
      </section>
    </>
  );
};

export default Home;
