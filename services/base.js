import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.129:9000',
  // timeout: 60000,
  headers: { 'X-Api-Key': 'not4everyone' },
});

export default instance;
