import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        phone: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/auth/login",
                formData
            );
            localStorage.setItem("token", response.data.token);
            navigate("/"); 
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-2 w-full mb-4 border border-gray-300 rounded-md"
                        placeholder="Phone"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="p-2 w-full mb-4 border border-gray-300 rounded-md"
                        placeholder="Password"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;