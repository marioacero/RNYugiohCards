import axios from 'axios';

const Axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  async (config) => {
    config.baseURL = 'https://db.ygoprodeck.com/api/v7';
    config.proxy = false;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
