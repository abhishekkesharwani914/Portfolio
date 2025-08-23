import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const submitQuery = (formData) => {
  return api.post('/query', { formData });
}