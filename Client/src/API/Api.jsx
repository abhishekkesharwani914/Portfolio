import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfolio-w6y4.onrender.com',
    // baseURL: 'http://localhost:5000',
})

export const submitQuery = (formData) => {
  return api.post('/query', { formData });
}