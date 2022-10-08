import axios from 'axios';

// baseURL: 'https://myfoods-server.onrender.com',
export const api = axios.create({
  baseURL: 'http://192.168.0.107:5000',
});
