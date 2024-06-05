import React, { useState } from 'react';
import axios from 'axios';

const AddMenuisierForm = () => {
  const [menuisierData, setMenuisierData] = useState({
    nomComplet: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setMenuisierData({ ...menuisierData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/menuisiers', menuisierData)
      .then(response => {
        console.log('Menuisier ajouté avec succès');
       
        setMenuisierData({
          nomComplet: '',
          email: '',
          phone: ''
        });
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du menuisier:', error);
      });
  };

  return (
    <div>
      <h2>Ajouter un Menuisier</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom complet:</label>
          <input type="text" name="nomComplet" value={menuisierData.nomComplet} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={menuisierData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Téléphone:</label>
          <input type="text" name="phone" value={menuisierData.phone} onChange={handleChange} />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddMenuisierForm;