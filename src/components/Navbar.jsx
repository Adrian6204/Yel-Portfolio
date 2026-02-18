import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold tracking-tighter text-white">
                            YEL <span className="text-accent-yellow">BEJOC</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/#projects">Projects</NavLink>
                            <NavLink href="/#about">About</NavLink>
                            <NavLink href="/#contact">Contact</NavLink>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-yellow focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink href="/">Home</MobileNavLink>
                        <MobileNavLink href="/#projects">Projects</MobileNavLink>
                        <MobileNavLink href="/#about">About</MobileNavLink>
                        <MobileNavLink href="/#contact">Contact</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ href, children }) => (
    <a
        href={href}
        className="text-white hover:text-accent-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-widest"
    >
        {children}
    </a>
);

const MobileNavLink = ({ href, children }) => (
    <a
        href={href}
        className="text-white hover:text-accent-yellow block px-3 py-2 rounded-md text-base font-bold uppercase"
    >
        {children}
    </a>
);

export default Navbar;
