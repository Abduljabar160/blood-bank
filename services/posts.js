/* eslint-disable max-len */
import { delay } from '../utils';
import axios from './base';

export const getPosts = async (params = {}) => {
  const response = await axios.get('/api/posts');

  return response.data;
};

export const createPosts = async (payload = {}) => {
  const response = await axios.post('/api/posts', payload);

  return response.data;
};
