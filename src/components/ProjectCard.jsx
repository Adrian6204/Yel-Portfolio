import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-900 uppercase tracking-widest rounded-full shadow-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-accent-orange transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    A short description of the project goes here. Focusing on the impact and design solution.
                </p>
                <div className="flex items-center text-accent-orange font-bold text-sm uppercase tracking-wide group-hover:gap-2 transition-all">
                    View Case Study <span className="ml-1">→</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
