import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutGrid, Users, Video, DollarSign, Settings, LogOut } from "lucide-react";

function Sidebar() {
    const menuItems = [
        { id: "dashboard", icon: LayoutGrid, text: "Dashboard", path: "/dashboard" },
        { id: "students", icon: Users, text: "O'quvchilar", path: "/students" },
        { id: "courses", icon: Video, text: "Video kurslar", path: "/courses" },
        { id: "sales", icon: DollarSign, text: "Sales", path: "/sales" },
    ];

    const bottomItems = [
        { id: "settings", icon: Settings, text: "Settings", path: "/settings" },
        { id: "logout", icon: LogOut, text: "Chiqish", path: "/logout", className: "text-red-500" },
    ];

    const MenuItem = ({ item }) => {
        return (
            <NavLink
                to={item.path}
                className={({ isActive }) =>
                    `flex items-center w-full px-3 py-2 my-4 text-left rounded-lg transition-colors ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    } ${item.className || ""}`
                }
            >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.text}</span>
            </NavLink>
        );
    };

    return (
        <div className="w-56 h-screen p-4 border-r bg-white flex flex-col">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-blue-600">LinCor</h1>
            </div>

            <div className="flex-1">
                {menuItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>

            <div className="border-t pt-4">
                {bottomItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
