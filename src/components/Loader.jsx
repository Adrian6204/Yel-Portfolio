import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={onComplete}
        >
            <motion.div
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
            >
                <motion.img
                    src="/logo.png"
                    alt="Loading..."
                    className="w-24 h-24 object-contain"
                    animate={{
                        rotate: [0, 0, 360, 360],
                        scale: [1, 1.2, 1, 1]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.8, 1],
                        repeat: 0
                    }}
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                    className="h-1 bg-accent-orange mt-8 rounded-full"
                />
            </motion.div>
        </motion.div>
    );
};

export default Loader;
