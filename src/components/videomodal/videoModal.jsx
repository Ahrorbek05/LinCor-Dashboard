import React, { useEffect } from 'react';
import { Play, X } from 'lucide-react';

const VideoModal = ({ video_path, onClose }) => {
    useEffect(() => {
        if (video_path) {
            document.getElementById("video_modal").showModal();
            setTimeout(() => {
                const video = document.getElementById("modal_video");
                if (video) {
                    video.play().catch((error) => console.log("Autoplay error:", error));
                }
            }, 300);
        } else {
            document.getElementById("video_modal").close();
        }
    }, [video_path]);

    return (
        <dialog id="video_modal" className="modal rounded-md shadow-xl">
            <div className="modal-box relative w-[800px] p-6 bg-white rounded-lg shadow-lg border">
                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-red-500 focus:outline-none text-xl font-bold"
                    aria-label="Close modal"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>
                <div className="mt-4">
                    <video id="modal_video" key={video_path} controls className="w-full rounded-lg">
                        <source src={video_path} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </dialog>
    );
};

export default VideoModal;
