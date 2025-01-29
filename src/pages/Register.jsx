import React, { useState } from "react";
import Cookies from "js-cookie";
import API from "../api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        phone: "",
        address: "",
        avatar: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, avatar: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) data.append(key, value);
        });

        try {
            const response = await API.post("/auth/register", data);

            const { accessToken, refreshToken } = response.data;

            localStorage.setItem("accessToken", accessToken);
            Cookies.set("refreshToken", refreshToken, { expires: 7 });

            // localStorage.setItem("user", JSON.stringify({
            //     firstname: user.firstname,
            //     avatar: user.avatar,

            // }));

            alert("Ro'yxatdan o'tish muvaffaqiyatli!");

            setFormData({
                firstname: "",
                lastname: "",
                password: "",
                phone: "",
                address: "",
                avatar: null,
            });

            navigate("/");
        } catch (error) {
            alert(`Ro'yxatdan o'tishda xato yuz berdi: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Ro'yxatdan O'tish</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        { label: "Ism", name: "firstname", type: "text" },
                        { label: "Familiya", name: "lastname", type: "text" },
                        { label: "Parol", name: "password", type: "password" },
                        { label: "Telefon", name: "phone", type: "text" },
                        { label: "Manzil", name: "address", type: "text" },
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Avatar</label>
                        <input
                            type="file"
                            name="avatar"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Ro'yxatdan O'tish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
