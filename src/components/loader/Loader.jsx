// components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <motion.div
                className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </div>
    );
};

export default Loader;
