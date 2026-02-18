import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden bg-white">

            {/* Background Blobs - Organic & Vibrant */}
            {/* Background Blobs - Organic & Vibrant */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-accent-orange/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-teal/20 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Floating Glass Element */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/30 backdrop-blur-xl border border-white/50 rounded-full z-0 hidden lg:block"
            />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left: Typography */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-sans text-xl md:text-2xl font-bold text-accent-orange mb-4">Hi! I am</p>
                    <h1 className="font-extrabold text-6xl md:text-8xl lg:text-9xl text-gray-900 tracking-tighter leading-[0.9] mb-4">
                        Yel <br /> Bejoc
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                        Your <span className="text-accent-orange relative inline-block">
                            Creative Partner
                            <svg className="absolute w-full h-3 bottom-1 left-0 text-accent-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                            </svg>
                        </span>.
                    </h2>

                    <div className="flex gap-3 mb-10 flex-wrap">
                        {['UX/UI', 'Branding', 'Graphic Design'].map((tag, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-gray-100 text-gray-900 font-bold text-sm uppercase tracking-wide border border-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="font-sans text-lg text-gray-600 max-w-lg leading-relaxed mb-10">
                        I'm a graphic designer passionate about turning ideas into bold, memorable visuals. From concept to execution, I deliver custom, high-quality designs aimed at elevating your brand.
                    </p>

                    <a href="#contact" className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-accent-orange hover:shadow-accent-orange/30 transition-all transform hover:-translate-y-1">
                        Let's Work Together
                    </a>
                </motion.div>

                {/* Right: Visual/Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                        {/* Abstract Shape Behind */}
                        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] text-accent-orange" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFD600" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.2C59,40.9,47.1,47.4,36.1,53.6C25.1,59.8,15,65.7,3.5,60.8C-8,55.9,-20.9,40.2,-31.6,28.2C-42.3,16.2,-50.8,7.9,-54.2,-2.2C-57.6,-12.3,-55.9,-24.1,-49.6,-34.9C-43.3,-45.7,-32.4,-55.5,-20.2,-64.3C-8,-73.1,5.5,-80.9,18.7,-80.9C31.9,-80.9,44.7,-73.1,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
                        </svg>

                        {/* Image Placeholder */}
                        <div className="absolute inset-4 rounded-2xl overflow-hidden bg-gray-100 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://placehold.co/400x500/eee/333?text=Thinking..."
                                alt="Yel Bejoc"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
