/* eslint-disable max-len */
import { delay } from '../utils';
import axios from './base';

export const login = async (payload = {}) => {
  const response = await axios.post('/api/auth/login', payload);

  return response.data;
};

export const register = async (payload = {}) => {
  const response = await axios.post('/api/auth/register', payload);

  return response.data;
};
