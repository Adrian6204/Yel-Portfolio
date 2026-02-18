import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projects.json';

const ProjectGrid = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Selected <span className="text-accent-orange">Works</span>
                </h2>
                <div className="h-1 w-20 bg-accent-yellow rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
