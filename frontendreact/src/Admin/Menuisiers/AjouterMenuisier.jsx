import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AjouterMenuisier = () => {
  const [menuisier, setMenuisier] = useState({
    nomComplet: '',
    email: '',
    phone: ''
  });
  const [isAdded, setIsAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuisier(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/menuisiers', menuisier);

      setIsAdded(true);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du menuisier:', error);
    }
  };

  
  useEffect(() => {
    if (isAdded) {
     
      window.location.href = '/menuisiers';
    }
  }, [isAdded]);

  return (
    <div className="container">
      <h2>Ajouter Menuisier</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom complet:</label>
          <input type="text" name="nomComplet" value={menuisier.nomComplet} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={menuisier.email} onChange={handleChange} />
        </div>
        <div>
          <label>Téléphone:</label>
          <input type="text" name="phone" value={menuisier.phone} onChange={handleChange} />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default AjouterMenuisier;
