import React, { useState } from 'react';
import axios from 'axios';

export default function ModelSpecial() {
  const [formData, setFormData] = useState({
    nameClient: '',
    address: '',
    phone: '',
    appointmentDate: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const styleM = {
    background: 'radial-gradient(circle, #D78C3D, #4B2E20)',
    borderColor: '#735028',
    color: 'white'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/appointments', formData);
      console.log(response.data);
      // Réinitialiser le formulaire après la soumission
      setFormData({
        nameClient: '',
        address: '',
        phone: '',
        appointmentDate: '',
        details: ''
      });
      // Afficher une alerte de succès
      alert('Rendez-vous créé avec succès. Attendez notre appel de confirmation.');
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div className="container">
      <h2>Fixer un rendez-vous avec notre Menuisier</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom Complet:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="nameClient"
            value={formData.nameClient}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Date du rendez-vous:</label>
          <input
            type="date"
            className="form-control"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Description du modèle que vous voulez:</label>
          <textarea
            className="form-control"
            id="details"
            name="details"
            rows="4"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn" style={styleM}>Fixer le rendez-vous</button>
      </form>
    </div>
  );
}
