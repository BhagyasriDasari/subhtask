import axios from 'axios';

const api = axios.create({
    baseURL: 'https://subhtaskback.onrender.com/api/auth',
});

export default api;
