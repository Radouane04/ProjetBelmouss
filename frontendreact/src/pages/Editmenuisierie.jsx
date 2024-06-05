import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditMenuisier = ({ match }) => {
  const [menuisier, setMenuisier] = useState({
    nomComplet: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/menuisiers/${match.params.id}`)
      .then(response => {
        setMenuisier(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du menuisier:', error);
      });
  }, [match.params.id]);

  const handleChange = (e) => {
    setMenuisier({ ...menuisier, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/menuisiers/${match.params.id}`, menuisier)
      .then(response => {
        console.log('Menuisier modifié avec succès');
        // Rediriger l'utilisateur vers la liste des menuisiers après la modification
        // Vous pouvez utiliser React Router pour naviguer vers la page de liste
      })
      .catch(error => {
        console.error('Erreur lors de la modification du menuisier:', error);
      });
  };

  return (
    <div>
      <h2>Modifier Menuisier</h2>
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
