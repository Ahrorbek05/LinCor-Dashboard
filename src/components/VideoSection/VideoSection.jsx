import { useEffect, useState } from "react";
import { Plus, Search, Bell, Play, Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import Workbooks from "../../components/workbook/Workbook";
import API from "../../api";
import VideoModal from "../videomodal/videoModal";
import Loader from "../loader/Loader";

const VideoSection = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await API.get("/video");
                setVideos(response.data || []);
            } catch {
                setError("Ma'lumotlarni yuklashda xatolik yuz berdi."); // Xato xabarini o'rnatish
                setVideos([]); // Videolarni tozalash
            } finally {
                setLoading(false); // Yuklashni tugatish
            }
        };

        fetchVideos();
    }, []);

    const handleVideoClick = (video_path) => {
        setSelectedVideo(video_path);
    };

    const handleCloseModal = () => {
        setSelectedVideo(null);
    };

    if (loading) {
        return (
            <motion.div
                className="flex justify-center items-center h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Loader />
            </motion.div>
        );
    }

    // Agar xatolik bo'lsa, uni ko'rsatish
    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <motion.div
            className="p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex items-center justify-between mb-8">
                <motion.div
                    className="flex items-center border p-3 rounded-md w-[700px] bg-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Search size={20} className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Qidirish"
                        className="w-full outline-none"
                    />
                </motion.div>

                <motion.div
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
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
                </motion.div>
            </div>

            <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
            >
                <h1 className="text-2xl font-bold text-gray-800">Boshlangich daraja</h1>
            </motion.div>

            <motion.div
                className="flex items-center justify-between mb-6 border-t pt-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h2 className="text-[20px] font-semibold text-gray-800">Video darslik yuklash</h2>
                <button className="flex items-center gap-2 text-md font-medium text-gray-700 bg-gray-200 py-1 px-4 rounded-md hover:bg-gray-300 transition">
                    <Plus className="w-5 h-5" /> Video dars qoshish
                </button>
            </motion.div>

            <motion.div
                className="bg-white p-4 rounded-lg border"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="h-[230px] overflow-y-auto space-y-3">
                    {videos?.data && Array.isArray(videos.data) && videos.data.map((video, index) => (
                        <motion.div
                            key={video.id}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow-md transition"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <div className="flex items-center gap-4">
                                <button
                                    className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                    onClick={() => handleVideoClick(video.video_path)}
                                >
                                    <Play size={20} />
                                </button>
                                <span className="text-gray-800 font-medium text-sm">
                                    {video.title}
                                </span>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="text-gray-500 text-sm">{video.id}</span>
                                <button className="p-2 text-gray-400 hover:text-blue-500 transition">
                                    <Pencil size={20} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-500 transition">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <Workbooks />
            <VideoModal video_path={selectedVideo} onClose={handleCloseModal} />
        </motion.div>
    );
};

export default VideoSection;