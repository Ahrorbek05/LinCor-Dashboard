import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <motion.div
                className="relative w-16 h-16 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <motion.div
                    className="absolute w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <motion.div
                    className="absolute w-16 h-16 border-4 border-gray-300 border-b-transparent rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
            </motion.div>
        </div>
    );
};

export default Loader;
