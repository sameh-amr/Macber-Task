import axios from 'axios';
import { API_URL } from './apis.constants';
export const login = async (email: string, password: string) => {
    return axios.post(`${API_URL}/auth/login`, { email, password });
  };