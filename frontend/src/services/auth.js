import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.access_token);
  return response.data;
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  await axios.post(`${API_URL}/logout`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  localStorage.removeItem('token');
};

export const getUser = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const isAuthenticated = () => !!localStorage.getItem('token');
