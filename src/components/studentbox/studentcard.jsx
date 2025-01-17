import React from "react";
import { DollarSign, Video, Calendar, MoreHorizontal } from "lucide-react";

const StudentCard = () => {
    return (
        <div className="wrapper border border-gray-200 w-[380px] h-[270px] rounded-lg shadow-md bg-white">
            {/* Header */}
            <div className="head p-4 flex justify-between items-center pb-4">
                <div className="person flex items-center gap-4">
                    <img
                        className="w-12 h-12 rounded-full"
                        src="https://picsum.photos/200/300"
                        alt="user icon"
                    />
                    <span className="flex w-32 flex-col text-[16px] font-semibold">
                        Pennywise
                        <p className="text-[14px] text-[#808080] font-normal">Toshkent</p>
                    </span>
                </div>
                <button className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* Hero Section */}
            <div className="hero py-2  p-4 border-t border-b space-y-2">
                {/* Sale Section */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full">
                        <DollarSign className="text-green-600" size={20} />
                    </div>
                    <p className="text-gray-700 text-[14px]">To'lov</p>
                    <p className="ml-auto text-gray-700 font-medium text-[14px]">
                        200 000 so'm
                    </p>
                </div>

                {/* Video Section */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                        <Video className="text-blue-600" size={20} />
                    </div>
                    <p className="text-gray-700 text-[14px]">Video kurslar soni</p>
                    <p className="ml-auto text-gray-700 font-medium text-[14px]">15</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-[6px]">
                    <div
                        className="bg-black h-[6px] rounded-full"
                        style={{ width: "47%" }}
                    ></div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer p-4 pt-4 flex items-center gap-2 text-gray-500 text-[14px]">
                <Calendar size={16} />
                <p>Qo'shilgan sana:</p>
                <p className="font-medium">29.09.2023</p>
            </div>
        </div>
    );
};

export default StudentCard;
