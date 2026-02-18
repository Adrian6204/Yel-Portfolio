import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projects.json';

const ProjectGrid = () => {
    return (
        <>
            {projectData.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </>
    );
};

export default ProjectGrid;
