import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AjouterMenuisier = () => {
  const [nomComplet, setNomComplet] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Erreur de chargement des rendez-vous:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://127.0.0.1:8000/api/menuisiers', {
        nomComplet,
        email,
        phone,
        appointment_id: selectedAppointment,
      });
      navigate('/menuisiers'); 
    } catch (error) {
      console.error('Erreur lors de l\'ajout du menuisier:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 style={{ marginTop: '50px', color: '#ab7442' }}>Ajouter Menuisier</h2>
      <div className="col-md-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nomComplet">Nom Complet</label>
            <input
              type="text"
              className="form-control"
              id="nomComplet"
              value={nomComplet}
              onChange={(e) => setNomComplet(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointment">Rendez-vous</label>
            <select
              className="form-control"
              id="appointment"
              value={selectedAppointment}
              onChange={(e) => setSelectedAppointment(e.target.value)}
              required
            >
              <option value="">Choisissez un rendez-vous</option>
              {appointments.map(appointment => (
                <option key={appointment.id} value={appointment.id}>
                  {appointment.appointmentDate} - {appointment.details}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'En cours...' : 'Ajouter'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AjouterMenuisier;
