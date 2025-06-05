import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRestaurant } from '../service/firebaseRestaurantService';
import './RestaurantForm.css';


const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    image: '',
    phone: '',
    hours: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRestaurant(formData);
      alert('Restaurante creado exitosamente');
      setFormData({
        name: '',
        description: '',
        address: '',
        image: '',
        phone: '',
        hours: '',
      });
      navigate('/');
    } catch (error) {
      alert('Error al crear el restaurante');
      console.error(error);
    }
  };

  return (
    <div className="restaurant-form-bg">
      <div className="restaurant-form-container">
        <h2 className="restaurant-form-title">
          Crear Nuevo Restaurante
        </h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Nombre', name: 'name', type: 'text', placeholder: 'Nombre del restaurante' },
            { label: 'Descripción', name: 'description', type: 'textarea', placeholder: 'Descripción breve' },
            { label: 'Dirección', name: 'address', type: 'text', placeholder: 'Dirección del restaurante' },
            { label: 'Imagen (URL)', name: 'image', type: 'url', placeholder: 'https://ejemplo.com/imagen.jpg' },
            { label: 'Teléfono', name: 'phone', type: 'tel', placeholder: '+57 123 456 7890' },
            { label: 'Horario', name: 'hours', type: 'text', placeholder: 'Ej: Lun-Vie 8am - 8pm' },
          ].map(({ label, name, type, placeholder }) => (
            <div className="mb-3" key={name}>
              <label className="restaurant-form-label">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder={placeholder}
                  className="restaurant-form-textarea"
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                  className="restaurant-form-input"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="restaurant-form-button"
          >
            Guardar Restaurante
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantForm;