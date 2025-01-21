import React, { useState } from "react";
import API from "../api";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        phone: "",
        avatar: null,
        address: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData((prevState) => ({
                ...prevState,
                [name]: files[0],
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await API.post("/register", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success) {
                setSuccess("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi!");
                console.log("User registered:", response.data);
            } else {
                setError("Ro'yxatdan o'tishda xatolik yuz berdi.");
            }
        } catch (error) {
            if (error.response) {
                setError(
                    `Xatolik: ${error.response.data.message || "Noma'lum xatolik"}`
                );
            } else if (error.request) {
                setError("CORS xatosi: Backend javob bermayapti yoki ruxsat yo'q.");
            } else {
                setError(`Xatolik: ${error.message}`);
            }
            console.error("Error registering user:", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                {error && (
                    <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded-md">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mb-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded-md">
                        {success}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    {[
                        { id: "firstName", label: "First Name", type: "text" },
                        { id: "lastName", label: "Last Name", type: "text" },
                        { id: "password", label: "Password", type: "password" },
                        { id: "phone", label: "Phone", type: "tel" },
                    ].map((field) => (
                        <div key={field.id} className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                                htmlFor={field.id}
                            >
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.id}
                                value={formData[field.id]}
                                onChange={handleChange}
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                        </div>
                    ))}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="avatar"
                        >
                            Avatar (Image)
                        </label>
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="address"
                        >
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;