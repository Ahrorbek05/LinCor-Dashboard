import React, { useEffect, useState } from 'react';
import { Plus, Search, Bell, Play, Pencil, Trash2 } from 'lucide-react';
import Workbooks from '../../components/workbook/Workbook';
import API from '../../api';
import VideoModal from '../videomodal/videoModal';

const VideoSection = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await API.get('/video');
                setVideos(response.data || []);
            } catch (err) {
                setError('Ma\'lumotlarni yuklashda xatolik yuz berdi.');
                setVideos([]);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const handleCloseModal = () => {
        setSelectedVideo(null);
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64">Yuklanmoqda...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

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
                    {videos.length > 0 ? (
                        videos.map((video) => (
                            <div
                                key={video.id}
                                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-4">
                                    <button
                                        className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                        onClick={() => handleVideoClick(video.videoUrl)}
                                    >
                                        <Play size={20} />
                                    </button>
                                    <span className="text-gray-800 font-medium text-sm">
                                        {video.title}
                                    </span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <span className="text-gray-500 text-sm">{video.trackNumber}</span>
                                    <span className="text-gray-500 text-sm">{video.duration}</span>
                                    <button className="p-2 text-gray-400 hover:text-blue-500 transition">
                                        <Pencil size={20} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-red-500 transition">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">Video darsliklar mavjud emas.</div>
                    )}
                </div>
            </div>
            <Workbooks />
            <VideoModal videoUrl={selectedVideo} onClose={handleCloseModal} />
        </div>
    );
};

export default VideoSection;