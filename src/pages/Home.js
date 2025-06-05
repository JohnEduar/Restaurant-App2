import React, { useState, useEffect } from 'react';
import { getRestaurants, initilizeRestaurants, deleteRestaurant } from '../service/firebaseRestaurantService';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      let data = await getRestaurants();
      if (data.length === 0) {
        await initilizeRestaurants();
        data = await getRestaurants();
      }
      setRestaurants(data);
      setLoading(false);
    };
    fetchRestaurants();
  }, []);

const handleEdit = (id) => {
  navigate(`/editar/${id}`);
};

const handleDelete = async (id) => {
  try {
    if (window.confirm('¿Seguro que deseas eliminar este restaurante?')) {
      await deleteRestaurant(id);
      console.log('Eliminado en Firestore:', id);
      setRestaurants(restaurants.filter(r => r.id !== id));
    }
  } catch (error) {
    alert('Error eliminando: ' + error.message);
    console.error(error);
  }
};

  if (loading) return <div>Cargando restaurantes...</div>;

  return (
    <div className="container mt-4">
      <h1>Restaurantes</h1>
      <div className="row">
        {restaurants.map(rest => (
          <div className="col-md-4 mb-4" key={rest.id}>
            <div className="card h-100">
              <img src={rest.image} className="card-img-top" alt={rest.name} />
              <div className="card-body">
                <h5 className="card-title">{rest.name}</h5>
                <p className="card-text">{rest.description}</p>
                <p><b>Dirección:</b> {rest.address}</p>
                <p><b>Teléfono:</b> {rest.phone}</p>
                <p><b>Horario:</b> {rest.hours}</p>
                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(rest.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(rest.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;