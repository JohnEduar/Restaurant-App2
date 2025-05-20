import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    image: '',
    phone: '',
    hours: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      ...formData,
      id: Date.now(),
    };

    const existing = JSON.parse(localStorage.getItem('restaurantesNuevos')) || [];
    localStorage.setItem('restaurantesNuevos', JSON.stringify([...existing, newRestaurant]));

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
  };


  return (
    <div 
      style={{
        minHeight: '80vh',
        padding: '50px 20px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1576723664541-23f84c3f93fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px 40px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: '#4B3B2B',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '25px', fontWeight: '700' }}>
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
              <label style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>{label}</label>
              {type === 'textarea' ? (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder={placeholder}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '10px',
                    border: '1.5px solid #8C6A43',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#4B3B2B',
                    fontWeight: '600',
                    fontSize: '1rem',
                    resize: 'vertical',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#C75B39')}
                  onBlur={e => (e.target.style.borderColor = '#8C6A43')}
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '10px',
                    border: '1.5px solid #8C6A43',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#4B3B2B',
                    fontWeight: '600',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#C75B39')}
                  onBlur={e => (e.target.style.borderColor = '#8C6A43')}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px 0',
              borderRadius: '20px',
              backgroundColor: '#C75B39',
              color: '#FFF8F0',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 6px 12px rgba(199, 91, 57, 0.6)',
              transition: 'background-color 0.3s ease',
              marginTop: '10px',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A64728')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C75B39')}
          >
            Guardar Restaurante
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantForm;
