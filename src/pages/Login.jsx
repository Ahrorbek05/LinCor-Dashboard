import React, { useState } from "react";
import Cookies from "js-cookie";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        phone: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/auth/login", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const { accessToken, refreshToken } = response.data;
            localStorage.setItem("accessToken", accessToken); // accessToken ni saqlash
            Cookies.set("refreshToken", refreshToken, { expires: 7 }); // refreshToken ni saqlash

            alert("Login muvaffaqiyatli!");

            navigate("/");
        } catch (error) {
            alert(`Loginda xato yuz berdi: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        { label: "Telefon", name: "phone", type: "text" },
                        { label: "Parol", name: "password", type: "password" },
                    ].map(({ label, name, type }) => (
                        <div key={name}>
                            <label className="block text-sm font-medium text-gray-700">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
                <a className="text-blue-600" href="/register">Register</a>
            </div>
        </div>
    );
};

export default Login;