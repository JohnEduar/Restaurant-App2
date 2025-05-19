import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RestaurantModal = ({ show, handleClose, restaurant }) => {
  if (!restaurant) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{restaurant.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="img-fluid mb-3"
        />
        
        <p>{restaurant.description}</p>

        {restaurant.address && (
          <p><strong>Dirección:</strong> {restaurant.address}</p>
        )}
        {restaurant.phone && (
          <p><strong>Teléfono:</strong> {restaurant.phone}</p>
        )}
        {restaurant.hours && (
          <p><strong>Horario:</strong> {restaurant.hours}</p>
        )}
        {restaurant.menu && restaurant.menu.length > 0 && (
          <>
            <h5 className="mt-3">Menú destacado:</h5>
            <ul>
              {restaurant.menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestaurantModal;
