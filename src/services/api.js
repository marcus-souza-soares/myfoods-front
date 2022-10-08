import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://myfoods-server.onrender.com',
});
