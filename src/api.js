import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const API = axios.create({
    baseURL: "http://38.242.195.171:8000/api/v1",
});

API.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            try {
                const decodedToken = jwtDecode(accessToken);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem("accessToken");
                    Cookies.remove("refreshToken");
                    window.location.href = "/login";
                    return Promise.reject(new Error("Token expired"));
                }

                config.headers.Authorization = `Bearer ${accessToken}`;
            } catch (error) {
                console.error("Tokenni decode qilishda xato:", error);
                localStorage.removeItem("accessToken");
                Cookies.remove("refreshToken");
                window.location.href = "/login";
                return Promise.reject(error);
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; 

            try {
                const refreshToken = Cookies.get("refreshToken");

                const response = await API.post("/auth/refreshToken", { refreshToken });

                const { accessToken } = response.data;

                localStorage.setItem("accessToken", accessToken);

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return API(originalRequest);
            } catch (err) {
                localStorage.removeItem("accessToken");
                Cookies.remove("refreshToken");
                window.location.href = "/login";
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default API;