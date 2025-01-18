import React from 'react';
import { Plus, Search, Bell, Play, Pencil, Trash2 } from 'lucide-react';
import Workbooks from '../../components/workbook/Workbook'

const VideoSection = () => {
    const audioTracks = [
        {
            id: 1,
            title: "Bo'g'in Oxirida Ikkitalik Undosh Bo'lsa Keyingi Bo'g'in",
            trackNumber: "01",
            duration: "12:34",
        },
        {
            id: 2,
            title: "Ikkinchi Dars: To'g'ri Talaffuz",
            trackNumber: "02",
            duration: "10:12",
        },
        {
            id: 3,
            title: "Uchinchi Dars: Qoidalar",
            trackNumber: "03",
            duration: "08:45",
        },
        {
            id: 4,
            title: "To'rtinchi Dars: Amaliy Misollar",
            trackNumber: "04",
            duration: "15:30",
        },
    ];

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center border p-3 rounded-md w-[700px] bg-white">
                    <Search size={20} className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Qidirish"
                        className="w-full outline-none"
                    />
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <img
                            className="w-12 h-12 rounded-full border"
                            src="https://picsum.photos/200"
                            alt="Admin"
                        />
                        <div>
                            <h3 className="text-gray-800 font-semibold text-sm">George Kim</h3>
                            <p className="text-gray-500 text-xs">Admin</p>
                        </div>
                    </div>
                    <button className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow hover:bg-gray-200 transition">
                        <Bell size={20} className="text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Boshlang'ich daraja</h1>
            </div>

            <div className="flex items-center justify-between mb-6 border-t pt-6">
                <h2 className="text-[20px] font-semibold text-gray-800">Video darslik yuklash</h2>
                <button className="flex items-center gap-2 text-md font-medium text-gray-700 bg-gray-200 py-1 px-4 rounded-md hover:bg-gray-300 transition">
                    <Plus className="w-5 h-5" /> Video dars qo'shish
                </button>
            </div>

            <div className="bg-white p-4 rounded-lg border">
                <div className="h-[230px] overflow-y-auto space-y-3">
                    {audioTracks.map((track) => (
                        <div
                            key={track.id}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-4">
                                <button className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                                    <Play size={20} />
                                </button>
                                <span className="text-gray-800 font-medium text-sm">
                                    {track.title}
                                </span>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="text-gray-500 text-sm">{track.trackNumber}</span>
                                <span className="text-gray-500 text-sm">{track.duration}</span>
                                <button className="p-2 text-gray-400 hover:text-blue-500 transition">
                                    <Pencil size={20} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-500 transition">
                                    <Trash2 size={20} />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <Workbooks></Workbooks>

        </div>
    );
};

export default VideoSection;
