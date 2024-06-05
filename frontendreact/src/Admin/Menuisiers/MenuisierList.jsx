import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MenuisierList = () => {
  const [menuisiers, setMenuisiers] = useState([]);
  const [selectedRendezVous, setSelectedRendezVous] = useState(null);

  useEffect(() => {
    fetchMenuisiers();
  }, []);

  const fetchMenuisiers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/menuisiers');
      setMenuisiers(response.data);
    } catch (error) {
      console.error('Erreur de chargement des menuisiers:', error);
    }
  };

  const deleteMenuisier = async (menuisierId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/menuisiers/${menuisierId}`);
      fetchMenuisiers();
    } catch (error) {
      console.error('Erreur lors de la suppression du menuisier:', error);
    }
  };

  const showRendezVousDetails = (rendezVous) => {
    setSelectedRendezVous(rendezVous);
  };

  const hideRendezVousDetails = () => {
    setSelectedRendezVous(null);
  };

  return (
    <div className="container">
      <Link to='/AjouterMenuisier'>Ajouter menuisier</Link>
      <h2 style={{ marginTop: '50px', color: '#ab7442' }}>Liste des Menuisiers</h2>
      <div className="menuisier-list">
        {menuisiers.map(menuisier => (
          <div key={menuisier.id} className="menuisier-card">
            <div>
              <h3>{menuisier.nomComplet}</h3>
              <p>Email: {menuisier.email}</p>
              <p>Téléphone: {menuisier.phone}</p>
            </div>
            <div>
              <h4>Rendez-vous</h4>
              {menuisier.appointments && menuisier.appointments.map(rendezVous => (
                <div key={rendezVous.id}>
                  <button onClick={() => showRendezVousDetails(rendezVous)}>Détails</button>
                  {selectedRendezVous === rendezVous && (
                    <div>
                      <p>Date: {rendezVous.appointmentDate}</p>
                      <p>Détails: {rendezVous.details}</p>
                      <p>Adresse: {rendezVous.address}</p>
                      <p>Téléphone: {rendezVous.phone}</p>
                      <button onClick={hideRendezVousDetails}>Fermer</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => deleteMenuisier(menuisier.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuisierList;
