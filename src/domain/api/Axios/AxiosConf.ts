import axios from 'axios';

const Axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  async (config) => {
    config.baseURL = 'https://iuvo-dev.nn.r.appspot.com';
    config.proxy = false;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
