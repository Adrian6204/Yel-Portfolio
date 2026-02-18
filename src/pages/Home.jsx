import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <Layout>
            <Hero />

            {/* Selected Works - Clean Grid */}
            <div id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-12">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-accent-orange mb-4">Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">Selected Works</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectGrid />
                </div>
            </div>

            {/* About Section - Friendly & Professional */}
            <section id="about" className="py-32 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gray-100 rounded-full overflow-hidden relative z-10">
                            <img src="https://placehold.co/600x600/FFD600/333?text=Thinking" alt="Portrait" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative Blob */}
                        <div className="absolute top-10 -left-10 w-full h-full bg-accent-orange/10 rounded-full -z-0 blur-3xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Design that <br /> <span className="text-accent-teal">Connects.</span>
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            I believe great design is about more than just aesthetics—it's about communication. I help brands tell their stories through intuitive interfaces and striking visuals.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">5+ Years</h4>
                                <p className="text-gray-500 text-sm">Experience in Digital Design</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">100+ Projects</h4>
                                <p className="text-gray-500 text-sm">Succesfully Delivered</p>
                            </div>
                        </div>

                        <a href="/resume.pdf" className="inline-flex items-center font-bold text-gray-900 border-b-2 border-accent-orange hover:text-accent-orange transition-colors">
                            View Full Resume <span className="ml-2">→</span>
                        </a>
                    </motion.div>

                </div>
            </section>

            {/* CTA Section - Vibrant */}
            <section id="contact" className="py-32 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-orange/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to start your next project?</h2>
                    <p className="text-xl text-gray-400 mb-12">I'm currently available for freelance projects and open to full-time opportunities.</p>
                    <a href="mailto:contact@yelbejoc.com" className="inline-block px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-full shadow-lg hover:bg-accent-yellow transition-all transform hover:-translate-y-1">
                        Get in Touch
                    </a>
                </div>
            </section>

        </Layout>
    );
};

export default Home;
