// MenuisierList.js

import React, { useEffect, useState } from 'react';


import axios from 'axios';

const MenuisierList = () => {
  const [menuisiers, setMenuisiers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/menuisiers')
      .then(response => {
        setMenuisiers(response.data);
      })
      .catch(error => {
        console.error('Erreur de chargement des menuisiers:', error);
      });
  }, []);

  
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/menuisiers/${id}`)
      .then(response => {
        console.log('Menuisier supprimé avec succès');
        // Rafraîchir la liste des menuisiers après la suppression
        setMenuisiers(menuisiers.filter(menuisier => menuisier.id !== id));
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du menuisier:', error);
      });}
  
  return (
    <div>
      <h2>Liste des Menuisiers</h2>
     
        {menuisiers.map(menuisier => (
          <ul key={menuisier.id}>

            <li>nom:{menuisier.nomComplet}</li>
            <li>email:{menuisier.email}</li>
            <li>telephone:{menuisier.phone}</li>
            <li>
            
              <button onClick={() => handleDelete(menuisier.id)}>Supprimer</button>
           </li>
          </ul>
        ))}
     
    </div>
  );
};

export default MenuisierList;
