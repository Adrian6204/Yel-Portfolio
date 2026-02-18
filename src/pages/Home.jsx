import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <ProjectGrid />

            {/* About Section Teaser */}
            <section id="about" className="py-24 bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                                Bold Ideas.<br />
                                <span className="text-accent-orange">Real Impact.</span>
                            </h2>
                            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                                I specialize in creating visual narratives that resonate. Whether it's branding, digital design, or multimedia art, my goal is to help businesses stand out in a crowded market.
                            </p>
                            <a href="/resume.pdf" className="inline-block px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-accent-orange transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                                {/* Placeholder for Profile Image */}
                                <img src="https://placehold.co/800x800/222/FFF?text=Yel+Bejoc" alt="Yel Bejoc" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 bg-accent-yellow text-black text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start a project?</h2>
                    <p className="text-xl mb-10 text-black/80">Let's collaborate and build something amazing together.</p>
                    <a href="mailto:contact@yelbejoc.com" className="inline-block px-10 py-5 bg-black text-white text-xl font-bold rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
                        Let's Talk
                    </a>
                </div>
            </section>

        </Layout>
    );
};

export default Home;
