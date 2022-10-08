import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://ec2-34-228-32-252.compute-1.amazonaws.com',
});
