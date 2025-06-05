import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRestaurantById, updateRestaurant } from '../service/firebaseRestaurantService';

const EditRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    image: '',
    phone: '',
    hours: '',
  });
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchRestaurant = async () => {
    const data = await getRestaurantById(id);
    console.log('Datos recibidos:', data);
    if (data) {
      setFormData({
        name: data.name || '',
        description: data.description || '',
        address: data.address || '',
        image: data.image || '',
        phone: data.phone || '',
        hours: data.hours || '',
      });
    }
    setLoading(false);
  };
  fetchRestaurant();
}, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRestaurant(id, formData);
      alert('Restaurante actualizado correctamente');
      navigate('/');
    } catch (error) {
      alert('Error al actualizar el restaurante');
      console.error(error);
    }
  };

  if (loading) return <div>Cargando datos...</div>;

  return (
    <div className="container mt-4">
      <h2>Editar Restaurante</h2>
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
            <label className="form-label">{label}</label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                rows={3}
                placeholder={placeholder}
                className="form-control"
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="form-control"
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditRestaurant;