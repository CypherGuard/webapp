import axios from 'axios';

export const BaseAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
});
