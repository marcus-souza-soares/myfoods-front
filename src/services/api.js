import axios from 'axios';

// baseURL: 'https://myfoods-server.onrender.com',
export const api = axios.create({
  baseURL: 'http://localhost:5000',
});
