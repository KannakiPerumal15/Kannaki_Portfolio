import React from "react";
import "./Skills.css";
import Nodejs from '../../assets/NodeJs.png';
import JavaScript from '../../assets/JavaScript.png';
import Java from '../../assets/Java.png';
import ExpressJs from '../../assets/ExpressJs.png';
import NestJs from '../../assets/NestJs.png';
import Html from '../../assets/Html.png';
import CSS from '../../assets/CSS.png';
import ReactJs from '../../assets/React.png';
import Angular from '../../assets/Angular.png';
import Electron from '../../assets/Electron.webp';
import PostgreSQL from '../../assets/PostgreSQL.png';
import MongoDB from '../../assets/MongoDB.png';
import MySQL from '../../assets/MySQL.png';
import Prisma from '../../assets/Prisma.png';
import DBeaver from '../../assets/Dbeaver.png';
import Figma from '../../assets/Figma.png';
import Git from '../../assets/Git.png';

const technologies = [
    { name: "JavaScript", img: JavaScript },
    { name: "Core Java", img: Java },
    { name: "HTML", img: Html },
    { name: "CSS", img: CSS },
    { name: "Node.js", img: Nodejs },
    { name: "Express.js", img: ExpressJs },
    { name: "React", img: ReactJs },
    { name: "Angular", img: Angular },
    { name: "Electron", img: Electron },
    { name: "PostgreSQL", img: PostgreSQL },
    { name: "MongoDB", img: MongoDB },
    { name: "Prisma", img: Prisma },
    { name: "Figma", img: Figma },
    { name: "Dbeaver", img: DBeaver },
    { name: "Nest.js", img: NestJs },
    { name: "mySQL", img: MySQL },
    { name: "Git", img: Git },
];

const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <h1 className="skills-title">My Skills</h1>
            <div className="skills-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="skills-card">
                        <img src={tech.img} alt={tech.name} className="skills-icon" />
                        <p className="skills-name">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
