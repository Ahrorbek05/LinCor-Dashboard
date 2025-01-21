import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        Authorization: `Bearer uz6xI7TCjTUzDaupBhD8THsYKkhEvmEa`,
    },
});

export default API;
