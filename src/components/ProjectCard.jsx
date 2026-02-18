import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-video hover:rotate-1 transition-transform duration-300 ease-out cursor-pointer">
            <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent-yellow text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.title}
                </h3>
                <p className="text-gray-300 mt-2 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 opacity-0 group-hover:opacity-100">
                    {project.description}
                </p>
            </div>

            <div className="absolute inset-0 border-2 border-accent-orange opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
        </div>
    );
};

export default ProjectCard;
