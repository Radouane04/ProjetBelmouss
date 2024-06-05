import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const axiosMenuisier = axios.create({
  baseURL,
  withCredentials: true,
  withXSRFToken: true,
});

export const fetchMenuisiers = () => {
  return axiosMenuisier.get('/menuisiers');
};

export const deleteMenuisier = (id) => {
  return axiosMenuisier.delete(`/menuisiers/${id}`);
};

export const addMenuisier = (menuisierData) => {
  return axiosMenuisier.post('/menuisiers', menuisierData);
};

export const updateMenuisier = (id, updatedMenuisierData) => {
  return axiosMenuisier.put(`/menuisiers/${id}`, updatedMenuisierData);
};

export default axiosMenuisier;
