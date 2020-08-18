import axios from 'axios';

// yarn json-server --host 192.168.0.10 server.json -p 3333

const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
});

export default api;
