import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Commandes = () => {
  const [commandes, setCommandes] = useState([]);
  const [selectedCommande, setSelectedCommande] = useState(null);
  const [modificationEnCours, setModificationEnCours] = useState(false);
  const [nouvelleCommande, setNouvelleCommande] = useState({
    user_id: '',
    total_amount: '',
    product_count: '',
    date: ''
  });

  useEffect(() => {
    // Fonction pour charger les commandes depuis l'API Laravel
    const fetchCommandes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/commandes');
        setCommandes(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes:', error);
      }
    };

    fetchCommandes();
  }, []);

  const handleAfficherDetails = async (commandeId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/commandes/${commandeId}`);
      setSelectedCommande(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la commande:', error);
    }
  };

  const handleModifierCommande = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/commandes/${selectedCommande.id}`, nouvelleCommande);
      setSelectedCommande(response.data);
      setModificationEnCours(false);
      console.log('Commande modifiée avec succès');
    } catch (error) {
      console.error('Erreur lors de la modification de la commande:', error);
    }
  };

  const handleSupprimerCommande = async (commandeId) => {
    try {
      // Suppression de la commande via l'API Laravel
      await axios.delete(`http://127.0.0.1:8000/commandes/${commandeId}`);
      // Mettre à jour l'état des commandes après suppression
      setCommandes(prevCommandes => prevCommandes.filter(commande => commande.id !== commandeId));
      console.log('Commande supprimée avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de la commande:', error);
    }
  };

  const handleChangeNouvelleCommande = (e) => {
    const { name, value } = e.target;
    setNouvelleCommande(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Liste des commandes</h2>
      <table>
        <thead>
          <tr>
            <th>ID Commande</th>
            <th>Total</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map(commande => (
            <tr key={commande.id}>
              <td>{commande.id}</td>
              <td>{commande.total_amount}</td>
              <td>{commande.date}</td>
              <td>
                <button onClick={() => handleAfficherDetails(commande.id)}>Détails</button>
                <button onClick={() => setModificationEnCours(true)}>Modifier</button>
                <button onClick={() => handleSupprimerCommande(commande.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCommande && (
        <div>
          <h3>Détails de la commande</h3>
          <p>ID: {selectedCommande.id}</p>
          <p>Total: {selectedCommande.total_amount}</p>
          <p>Date: {selectedCommande.date}</p>
          {modificationEnCours ? (
            <div>
              <h3>Modifier la commande</h3>
              <input type="text" name="user_id" value={nouvelleCommande.user_id} onChange={handleChangeNouvelleCommande} />
              <input type="text" name="total_amount" value={nouvelleCommande.total_amount} onChange={handleChangeNouvelleCommande} />
              <input type="text" name="product_count" value={nouvelleCommande.product_count} onChange={handleChangeNouvelleCommande} />
              <input type="text" name="date" value={nouvelleCommande.date} onChange={handleChangeNouvelleCommande} />
              <button onClick={handleModifierCommande}>Enregistrer</button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Commandes;
