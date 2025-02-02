import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutGrid, Users, Video, DollarSign, Settings, LogOut } from "lucide-react";

function Sidebar() {
    const navigate = useNavigate();

    const menuItems = [
        { id: "dashboard", icon: LayoutGrid, text: "Dashboard", path: "/" },
        { id: "students", icon: Users, text: "O'quvchilar", path: "/students" },
        { id: "courses", icon: Video, text: "Video kurslar", path: "/courses" },
        { id: "sales", icon: DollarSign, text: "Sales", path: "/sales" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };

    return (
        <div className="w-56 h-screen p-4 border-r bg-white flex flex-col">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-blue-600">LinCor</h1>
            </div>

            <div className="flex-1">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center w-full px-3 py-2 my-1 text-left rounded-lg transition-colors ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`
                        }
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>

            <div className="border-t pt-4">
                <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-3 py-2 my-1 text-left rounded-lg text-red-500 hover:bg-gray-100"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    <span>Chiqish</span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
