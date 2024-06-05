import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Client() {
  const [users, setUsers] = useState([]);
  const [nameAdd, setNameAdd] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [phoneAdd, setPhoneAdd] = useState('');
  const [addressAdd, setAddressAdd] = useState('');
  const [passwordAdd, setPasswordAdd] = useState('');

  const [nameEdit, setNameEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  const [phoneEdit, setPhoneEdit] = useState('');
  const [addressEdit, setAddressEdit] = useState('');
  const [passwordEdit, setPasswordEdit] = useState('');
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users', {
        name: nameAdd,
        email: emailAdd,
        phone: phoneAdd,
        address: addressAdd,
        password: passwordAdd
      });
      setUsers([...users, response.data]);
      clearFields();
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find(user => user.id === userId);
    setEditUserId(userId);
    setNameEdit(userToEdit.name);
    setEmailEdit(userToEdit.email);
    setPhoneEdit(userToEdit.phone);
    setAddressEdit(userToEdit.address);
    setPasswordEdit(''); // Reset password field
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/users/${editUserId}`, {
        name: nameEdit,
        email: emailEdit,
        phone: phoneEdit,
        address: addressEdit,
        password: passwordEdit
      });
      const updatedUsers = users.map(user =>
        user.id === editUserId ? response.data : user
      );
      setUsers(updatedUsers);
      clearFields();
      setEditUserId(null);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    }
  };

  const clearFields = () => {
    setNameAdd('');
    setEmailAdd('');
    setPhoneAdd('');
    setAddressAdd('');
    setPasswordAdd('');
    setNameEdit('');
    setEmailEdit('');
    setPhoneEdit('');
    setAddressEdit('');
    setPasswordEdit('');
  };

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Nom: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Téléphone: {user.phone}</p>
            <p>Adresse: {user.address}</p>
            <button onClick={() => handleEditUser(user.id)}>Modifier</button>
            <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      {editUserId && (
        <div>
          <h2>Modifier un utilisateur</h2>
          <div>
            <input type="text" placeholder="Nom" value={nameEdit} onChange={e => setNameEdit(e.target.value)} />
            <input type="email" placeholder="Email" value={emailEdit} onChange={e => setEmailEdit(e.target.value)} />
            <input type="text" placeholder="Téléphone" value={phoneEdit} onChange={e => setPhoneEdit(e.target.value)} />
            <input type="text" placeholder="Adresse" value={addressEdit} onChange={e => setAddressEdit(e.target.value)} />
            <input type="password" placeholder="Mot de passe" value={passwordEdit} onChange={e => setPasswordEdit(e.target.value)} />
            <button onClick={handleUpdateUser}>Modifier</button>
          </div>
        </div>
      )}
      <h2>Ajouter un utilisateur</h2>
      <div>
        <input type="text" placeholder="Nom" value={nameAdd} onChange={e => setNameAdd(e.target.value)} />
        <input type="email" placeholder="Email" value={emailAdd} onChange={e => setEmailAdd(e.target.value)} />
        <input type="text" placeholder="Téléphone" value={phoneAdd} onChange={e => setPhoneAdd(e.target.value)} />
        <input type="text" placeholder="Adresse" value={addressAdd} onChange={e => setAddressAdd(e.target.value)} />
        <input type="password" placeholder="Mot de passe" value={passwordAdd} onChange={e => setPasswordAdd(e.target.value)} />
        <button onClick={handleAddUser}>Ajouter</button>
      </div>
    </div>
  );
}

export default Client;
