import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from '../data/projects.json';

type Project ={
    id: number;
    title: string;
    description: string;
    image: string;
};

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(()=>{
        // Simuler un chargement
        setProjects(data)
    }, []);

    return(
        <section>
            <h2>Mes projets</h2>
            <div className="project-list">
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;