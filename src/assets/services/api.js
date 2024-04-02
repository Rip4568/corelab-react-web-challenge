/* eslint-disable no-unused-vars */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getTasks = async (token) => {
  const response = await api.get('/tasks', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export const deleteTask = async (id, token) => {
  const response = await api.delete(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export const createTask = async (title, content, favorite, token) => {
  const response = await api.post('/tasks', {title, content, favorite}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const loginAPI = async (username, password) => {
  const response = await api.post('/login', { username, password });
  return response;
};

export const signupAPI = async (username, email, password) => {
  const response = await api.post('/users', { username, email, password });
  return response;
}