import React, { useState } from "react";
import "./Css/projects.css";
import  projectDetails  from "./ProjectsDetail";

const Projects = () => {
    const [selectedType, setSelectedType] = useState("Project");

    const filteredProjects = projectDetails.filter(
        (project) => project.type === selectedType
    );

    return (
        <section className="project-section" id="projects">

            <h1 className="project-heading">
                My <span>Projects</span>
            </h1>

            <div className="project-filter">

                <button
                    className={selectedType === "Project" ? "active" : ""}
                    onClick={() => setSelectedType("Project")}
                >
                    Projects
                </button>

                <button
                    className={selectedType === "Vibe Coding" ? "active" : ""}
                    onClick={() => setSelectedType("Vibe Coding")}
                >
                    Vibe Coding
                </button>

            </div>

            <div className="project-container">

                {filteredProjects.map((project, index) => (

                    <div className="project-card" key={index}>

                        <h2 className="project-title">
                            {project.heading}
                        </h2>

                        <div className="project-img-box">

                            <img
                                src={project.image}
                                alt={project.heading}
                                className="project-image"
                            />

                        </div>

                        <div className="project-content">

                            <div className="project-tech">

                                <h3>Technologies Used</h3>

                                <p>{project.uses}</p>

                            </div>

                            <div className="project-info">

                                <h3>About Project</h3>

                                <p>{project.info}</p>

                            </div>

                        </div>

                        <div className="project-btns">

                            <a
                                href={project.githubUrl || "#"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button>GitHub</button>
                            </a>

                            <a
                                href={project.deployUrl || "#"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="live-btn">
                                    Live Demo
                                </button>
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Projects;