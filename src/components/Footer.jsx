import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Yel Bejoc. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <SocialLink href="#" label="LinkedIn" />
                    <SocialLink href="#" label="Instagram" />
                    <SocialLink href="#" label="Behance" />
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, label }) => (
    <a
        href={href}
        className="text-gray-400 hover:text-accent-orange transition-colors duration-200"
    >
        {label}
    </a>
);

export default Footer;
