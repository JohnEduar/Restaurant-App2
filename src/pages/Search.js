import React, { useState } from 'react';
import { getRestaurantsByName } from '../service/firebaseRestaurantService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    const term = e.target.value;
    setQuery(term);
    setLoading(true);
    const filtrados = await getRestaurantsByName(term);
    setResults(filtrados);
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2>Buscar Restaurantes</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={handleSearch}
      />
      {loading && <div>Buscando...</div>}
      <div className="row">
        {results.map(rest => (
          <div className="col-md-4 mb-4" key={rest.id}>
            <div className="card h-100">
              <img src={rest.image} className="card-img-top" alt={rest.name} />
              <div className="card-body">
                <h5 className="card-title">{rest.name}</h5>
                <p className="card-text">{rest.description}</p>
                <p><b>Dirección:</b> {rest.address}</p>
                <p><b>Teléfono:</b> {rest.phone}</p>
                <p><b>Horario:</b> {rest.hours}</p>
              </div>
            </div>
          </div>
        ))}
        {(!loading && results.length === 0 && query) && (
          <div className="col-12">
            <div className="alert alert-warning">No se encontraron restaurantes.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;