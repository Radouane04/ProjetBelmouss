import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuisierList = () => {
  const [menuisiers, setMenuisiers] = useState([]);
  const [newMenuisier, setNewMenuisier] = useState({
    nomComplet: '',
    email: '',
    phone: ''
  });
  const [editingMenuisier, setEditingMenuisier] = useState(null);

  useEffect(() => {
    fetchMenuisiers();
  }, []);

  const fetchMenuisiers = () => {
    axios.get('http://127.0.0.1:8000/api/menuisiers')
      .then(response => {
        setMenuisiers(response.data);
      })
      .catch(error => {
        console.error('Erreur de chargement des menuisiers:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/menuisiers/${id}`)
      .then(response => {
        console.log('Menuisier supprimé avec succès');
        fetchMenuisiers();
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du menuisier:', error);
      });
  };

  const handleEdit = (menuisier) => {
    setEditingMenuisier(menuisier);
    setNewMenuisier({
      nomComplet: menuisier.nomComplet,
      email: menuisier.email,
      phone: menuisier.phone
    });
  };

  const handleSaveEdit = () => {
    if (!editingMenuisier) return; // Vérifier si un menuisier est en cours d'édition
    axios.put(`http://127.0.0.1:8000/api/menuisiers/${editingMenuisier.id}`, newMenuisier)
      .then(response => {
        console.log('Menuisier édité avec succès');
        fetchMenuisiers();
        setEditingMenuisier(null);
        setNewMenuisier({
          nomComplet: '',
          email: '',
          phone: ''
        });
      })
      .catch(error => {
        console.error('Erreur lors de l\'édition du menuisier:', error);
      });
  };

  const handleAddMenuisier = () => {
    // Vérifier si tous les champs requis sont remplis avant d'ajouter un nouveau menuisier
    if (!newMenuisier.nomComplet || !newMenuisier.email || !newMenuisier.phone) {
      console.error('Veuillez remplir tous les champs');
      return;
    }
    axios.post('http://127.0.0.1:8000/api/menuisiers', newMenuisier)
      .then(response => {
        console.log('Menuisier ajouté avec succès');
        fetchMenuisiers();
        setNewMenuisier({
          nomComplet: '',
          email: '',
          phone: ''
        });
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du menuisier:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenuisier({ ...newMenuisier, [name]: value });
  };

  return (
    <div className="container">
      <h2 style={{marginTop:'50px', color:'#ab7442'}}>Liste des Menuisiers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuisiers.map(menuisier => (
            <tr key={menuisier.id}>
              <td>{menuisier.nomComplet}</td>
              <td>{menuisier.email}</td>
              <td>{menuisier.phone}</td>
              <td>
                {editingMenuisier === menuisier ? (
                  <button className="btn btn-primary "  onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <button className="btn btn-info" style={{marginRight:'12px'}} onClick={() => handleEdit(menuisier)}>Éditer</button>
                )}
                <button className="btn btn-danger" onClick={() => handleDelete(menuisier.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{marginTop:'10px', color:'#ab7442'}} >{editingMenuisier ? 'Modifier Menuisier' : 'Ajouter un Menuisier'}</h2>
      <form onSubmit={editingMenuisier ? handleSaveEdit : handleAddMenuisier} >
        <div className="form-group">
          <input type="text" className="form-control" name="nomComplet" value={newMenuisier.nomComplet} onChange={handleInputChange} placeholder="Nom complet" required />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" name="email" value={newMenuisier.email} onChange={handleInputChange} placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="phone" value={newMenuisier.phone} onChange={handleInputChange} placeholder="Téléphone" required />
        </div>
        <button type="submit" className="btn btn-success">{editingMenuisier ? 'Enregistrer' : 'Ajouter'}</button>
      </form>
    </div>
  );
};

export default MenuisierList;
