import React from 'react';
import './Experience.css'; // Import the CSS file

const Experience = () => {
    const experiences = [
        {
            date: '2024 - Present',
            role: 'Junior Full Stack Developer',
            company: 'M2 Data Studio',
            description:
                'Developed and optimized full-stack applications using React.js for front-end and Node.js with PostgreSQL for back-end. Focused on creating responsive user interfaces, integrating APIs, and ensuring efficient data management and secure system architecture.',
            tags: ['React', 'Node.js','PostgreSQL','Prisma', 'Electron', 'Figma', 'Jira', 'SQLite'],
        },
        {
            date: 'July 2023 - Dec 2023',
            role: 'MEAN Developer Intern',
            company: 'Digerati Software Development and Services',
            description:
                'Assisted in developing and debugging responsive web applications using the MEAN stack, contributing to streamlined development processes and optimized performance.',
            tags: ['HTML', 'CSS', 'Node.js', 'MongoDB', 'Express', 'Angular', 'mySQL'],
        },
    ];

    return (
        <div id='experience' className="experience-container">
            <h2 className="experience-title">Experience</h2>
            {experiences.map((exp, index) => (
                <div className="experience-item" key={index}>
                    <div className="experience-date">{exp.date}</div>
                    <div className="experience-details">
                        <h3 className="experience-role">
                            {exp.role} - <span className="experience-company">{exp.company}</span>
                        </h3>
                        <p className="experience-description">{exp.description}</p>
                        <div className="experience-tags">
                            {exp.tags.map((tag, tagIndex) => (
                                <span className="tag" key={tagIndex}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
