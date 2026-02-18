import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
                    }`}
            >
                <div className="mx-auto max-w-7xl px-6 md:px-12 flex justify-between items-center text-gray-900">
                    <a href="#" className="relative z-50 flex items-center gap-2 group">
                        <img src="/logo.png" alt="YelCreatives Logo" className="w-10 h-10 object-contain transform group-hover:rotate-12 transition-transform" />
                        <span className="text-xl font-extrabold tracking-tight">YelCreatives</span>
                    </a>

                    {/* Desktop Menu - Clean */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['Projects', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-bold text-gray-600 hover:text-accent-orange transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            className="px-5 py-2.5 bg-accent-orange text-white text-sm font-bold rounded-full shadow-lg hover:shadow-accent-orange/40 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button - Dark */}
                    <button
                        className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`block w-8 h-0.5 bg-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-8 h-0.5 bg-gray-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - White */}
            <div
                className={`fixed inset-0 z-40 bg-white flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col space-y-6 text-center">
                    {['Projects', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-extrabold text-gray-900 hover:text-accent-orange transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
