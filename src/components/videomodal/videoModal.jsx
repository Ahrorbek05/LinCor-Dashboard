import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import PropTypes from 'prop-types';

const VideoModal = ({ video_path, onClose }) => {
    const videoRef = useRef(null);
    const modalRef = useRef(null);

    console.log("Video manbasi:", video_path);

    useEffect(() => {
        if (video_path) {
            modalRef.current?.showModal();

            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.play().catch(err => console.log("Autoplay error:", err));
                }
            }, 300);
        } else if (modalRef.current?.open) {
            modalRef.current.close();
        }
    }, [video_path]);

    const playVideo = () => {
        if (videoRef.current) {
            console.log("Video tayyor:", videoRef.current.currentSrc);
            videoRef.current.play().catch((error) => {
                console.log("Autoplay error:", error);
            });
        }
    };

    return (
        <dialog ref={modalRef} className="modal rounded-md shadow-xl">
            <div className="modal-box relative w-[800px] p-6 bg-white rounded-lg shadow-lg border">
                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-red-500 focus:outline-none text-xl font-bold"
                    aria-label="Close modal"
                    onClick={() => {
                        modalRef.current?.close();
                        onClose();
                    }}
                >
                    <X size={24} />
                </button>
                <div className="mt-4">
                    <video
                        ref={videoRef}
                        key={video_path}
                        controls
                        autoPlay
                        muted
                        className="w-full rounded-lg"
                        onCanPlay={playVideo}
                    >
                        <source src={video_path} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </dialog>
    );
};

// **PropTypes qo‘shildi**
VideoModal.propTypes = {
    video_path: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default VideoModal;