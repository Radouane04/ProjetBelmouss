import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditMenuisier = () => {
  const [menuisier, setMenuisier] = useState({
    nomComplet: '',
    email: '',
    phone: ''
  });
  const [isUpdate, setIsUpdate] = useState(false);

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
      // Mettre à jour l'état pour indiquer que le menuisier a été ajouté avec succès
      setIsUpdate(true);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du menuisier:', error);
    }
  };

  // Utiliser useEffect pour déclencher la redirection après l'ajout
  useEffect(() => {
    if (isAdded) {
      // Redirection vers la liste des menuisiers après l'ajout
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

export default EditMenuisier;
