import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Lenis from '@studio-freight/lenis';

const Layout = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (!target || target.origin !== window.location.origin) return;

            const href = target.getAttribute('href');

            // Handle "Back to Top" (Logo)
            if (href === '#') {
                e.preventDefault();
                lenis.scrollTo(0, { duration: 1.5 });
                return;
            }

            // Handle Section Links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    lenis.scrollTo(element, { offset: -80 }); // Adjust offset for fixed header
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
        };

    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-accent-yellow selection:text-black">
            <Navbar />
            <main className="flex-grow pt-0">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
