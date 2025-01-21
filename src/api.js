// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://localhost:8000/api/v1/auth",
//     headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk5ODk5MDAwMDAyIiwiaWQiOjIsImlhdCI6MTczNzQ2ODI0MSwiZXhwIjoxNzM3NDY5MTQxfQ.r0-N7bkHCx_RUn6fg-5rQokKGHb9bfnKlU1AEE0Ykf4`,
//     },
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://localhost:8000/api/v1/auth",
// });

// // Har bir so'rovdan oldin tokenni tekshirish va headerga qo'shish
// API.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token"); // localStorage dan tokenni olish
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export default API;

import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api/v1/auth',
    withCredentials: true, // Cookie va autentifikatsiya ma'lumotlarini yuborish
});

export default API;