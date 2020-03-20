import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dentalclouddev.s3.amazonaws.com/challenge'
});

export default api;