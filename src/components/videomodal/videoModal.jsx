import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import PropTypes from "prop-types";

const VideoModal = ({ video_path, onClose }) => {
    const videoRef = useRef(null);
    const modalRef = useRef(null);

    const computedVideoPath = video_path ? `https://api.lincor.uz/video${video_path}` : "";

    useEffect(() => {
        if (computedVideoPath && videoRef.current) {
            const videoElement = videoRef.current;

            videoElement.muted = true;
            videoElement.play()
                .then(() => {
                    videoElement.muted = false;
                })
                .catch((error) => console.warn("Video play error:", error));
        }
    }, [computedVideoPath]);

    const handleClose = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    };

    if (!computedVideoPath) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="bg-white p-6 rounded-lg shadow-lg w-[800px] relative"
            >
                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-red-500 focus:outline-none text-xl font-bold"
                    onClick={handleClose}
                >
                    <X size={24} />
                </button>
                <div className="mt-4">
                    <video ref={videoRef} controls className="w-full rounded-lg">
                        <source src={computedVideoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

VideoModal.propTypes = {
    video_path: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default VideoModal;
