import axios, { AxiosInstance } from 'axios';
import { Cookies } from 'react-cookie';

export const AuthAxios = (): AxiosInstance => {
  const cookies = new Cookies(null, { path: '/' });
  let token = cookies.get('token');

  return axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 1000,
    headers: { Authorization: `Bearer ${token}` },
  });
};
