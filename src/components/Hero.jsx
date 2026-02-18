import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="text-center px-4 max-w-5xl mx-auto z-10 w-full">
                <p className="text-accent-yellow font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
                    Multimedia Designer & Creative
                </p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                    YEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-accent-orange">BEJOC</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                    Crafting bold visual identities and digital experiences that leave a mark.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-accent-yellow text-black font-bold text-lg rounded-full hover:bg-white transition-colors duration-300 hover:scale-105 transform shadow-lg shadow-accent-yellow/20"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-full hover:border-accent-orange hover:text-accent-orange transition-colors duration-300 hover:scale-105 transform backdrop-blur-sm"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
