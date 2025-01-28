import React from 'react';
import { Play, X } from 'lucide-react';

const VideoModal = ({ videoUrl, onClose }) => {
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
                    <video controls className="w-full rounded-lg">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </dialog>
    );
};

export default VideoModal;