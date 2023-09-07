import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/dunjastojanov/shift-json/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": "true"
    }
});

export default api;