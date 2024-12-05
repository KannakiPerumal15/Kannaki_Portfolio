import React from 'react';
import './Projects.css';
import SolarPlant from '../../assets/SolarPlant.png';
import OmsWater from '../../assets/OmsWater.png';
import Gym from '../../assets/Gym.png';
import CRM from '../../assets/CRM.png';
import Clinical from '../../assets/Clinical.jpg';

const Projects = () => {
    const projects = [
        {
            title: "OMSGFS Water Management",
            description: "This Web Application is a sophisticated platform utilizing MQTT services to deliver real-time data visualization and monitoring. It features advanced alarm systems, automated Excel report generation, and a comprehensive dashboard, empowering users with actionable insights for efficient water resource management.",
            tags: ["React", "Nodejs", "MongoDB", "PostgreSQL", "MQTT", "Leaflet"],
            image: OmsWater 
        },
        {
            title: "Gym Management System",
            description: "This Application streamlines gym operations with features for managing staff, members, attendance, and personalized fitness plans. It also includes membership package management, offering a user-friendly interface with secure, real-time data handling for both online and offline use.",
            tags: ["Electron", "React", "Nodejs","Prisma", "PostgreSQL"],
            image: Gym
        },
        {
            title: "Solar Plant Web Application",
            description: "This Application uses MQTT to capture and stream real-time data from IoT devices installed at solar plants. It features a comprehensive dashboard, automated report generation, and critical event alarms, providing users with detailed performance insights and efficient plant management.",
            tags: ["React","Nodejs", "MongoDB", "MQTT", "GIS Mapping"],
            image: SolarPlant
        },
        {
            title: "Course Management System",
            description: "CMS streamlines the administration of academic courses by offering tools for course creation, enrollment, content delivery, and assessment management. It enhances the learning experience by facilitating communication between instructors and students, while ensuring efficient management of academic processes.",
            tags: ["React", "Nodejs", "MongoDB"],
            image: CRM
        },
        {
            title: "MAC - Clinical Management",
            description: "The MAC (Meena Acupuncture Clinic) Clinical Management System is an integrated platform designed to optimize clinic operations by efficiently managing patient records, appointment scheduling, and treatment progress. It streamlines workflows, ensures seamless patient care, and enhances overall administrative efficiency in a clinical setting.",
            tags: ["Nodejs", "React", "MongoDB"],
            image: Clinical
        },
    ];

    return (
        <div id='projects' className="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-card-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span className="project-tag" key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
