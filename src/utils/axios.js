import axios from 'axios';

const instance = axios.create({
  baseURL:'' /* Base URL of the microservice */,
});

export default instance;
