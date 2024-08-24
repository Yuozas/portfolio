import React from 'react';
import {
    Box,
    VStack,
} from '@chakra-ui/react';
import { FaCode, FaVideo, FaServer, FaDatabase, FaTools} from 'react-icons/fa';
import {
    SiCsharp, SiJavascript, SiReact, SiHtml5, SiDocker, SiNodedotjs,
    SiUnity, SiPhp, SiPython, SiElasticsearch, SiLinux,
    SiGit, SiAdobepremierepro, SiAdobephotoshop, SiAutodesk, SiAdobeaftereffects
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import {SkillCategory, SkillProps} from "../components/Skills";

const Skills: React.FC = () => {
    const programmingSkills: SkillProps[] = [
        { name: 'C# & .NET', level: 9, description: 'Expert in C# and .NET framework, with extensive experience in building complex web applications and services.', icon: SiCsharp },
        { name: 'JavaScript & TypeScript', level: 9, description: 'Proficient in modern JavaScript and TypeScript, with a strong focus on React and other front-end technologies.', icon: SiJavascript },
        { name: 'React', level: 9, description: 'Advanced skills in React, including state management, hooks, and performance optimization.', icon: SiReact },
        { name: 'HTML & CSS', level: 9, description: 'Mastery of HTML5 and CSS3, including responsive design and CSS preprocessors like SASS.', icon: SiHtml5 },
        { name: 'SQL (MariaDB, PostgreSQL)', level: 8, description: 'Extensive experience with relational databases, complex queries, and performance tuning.', icon: FaDatabase },
        { name: 'Docker & Containerization', level: 7, description: 'Proficient in containerizing applications and managing deployments with Docker.', icon: SiDocker },
        { name: 'Node.js', level: 7, description: 'Strong skills in server-side JavaScript, including building RESTful APIs and real-time applications.', icon: SiNodedotjs },
        { name: 'Unity & C# for Game Dev', level: 4, description: 'Developing expertise in game development using Unity engine and C#, currently working on innovative game projects while continuously enhancing my skills.', icon: SiUnity },
        { name: 'PHP', level: 7, description: 'Skilled in PHP development, particularly with frameworks like Laravel and content management systems like WordPress.', icon: SiPhp },
        { name: 'Python', level: 6, description: 'Proficient in Python for various applications, including data processing and AI/ML projects.', icon: SiPython },
        { name: 'Java', level: 6, description: 'Solid understanding of Java, used for Android development and backend services.', icon: DiJava },
        { name: 'Elasticsearch', level: 6, description: 'Experience in implementing and optimizing search functionality using Elasticsearch.', icon: SiElasticsearch },
    ];

    const infrastructureSkills: SkillProps[] = [
        { name: 'Linux Server Administration', level: 8, description: 'Proficient in managing and maintaining Linux servers, particularly Ubuntu.', icon: SiLinux },
        { name: 'CI/CD Pipelines', level: 7, description: 'Experience in setting up and managing continuous integration and deployment pipelines.', icon: FaServer },
        { name: 'Cloud Services (Digital Ocean)', level: 7, description: 'Skilled in deploying and managing applications on cloud platforms, particularly Digital Ocean.', icon: FaServer },
        { name: 'Network Security', level: 6, description: 'Knowledge of implementing security best practices, including work with Cloudflare for DDoS protection.', icon: FaServer },
    ];

    const databaseSkills: SkillProps[] = [
        { name: 'Database Design', level: 8, description: 'Experienced in designing efficient and scalable database schemas.', icon: FaDatabase },
        { name: 'Query Optimization', level: 7, description: 'Skilled in optimizing database queries for performance.', icon: FaDatabase },
        { name: 'NoSQL Databases', level: 6, description: 'Familiarity with NoSQL databases like MongoDB for specific use cases.', icon: FaDatabase },
    ];

    const multimediaSkills: SkillProps[] = [
        { name: 'Video Editing', level: 9, description: 'Expert in video editing using Sony Vegas and Adobe Premiere Pro, with years of experience.', icon: SiAdobepremierepro },
        { name: 'Adobe Photoshop', level: 8, description: 'Advanced skills in photo editing and digital art creation using Photoshop.', icon: SiAdobephotoshop },
        { name: '3D Modeling', level: 2, description: 'Competent in 3D modeling using tools like Maya and ZBrush, with a strong desire to further develop my skills and expertise.', icon: SiAutodesk },
        { name: 'Adobe After Effects', level: 6, description: 'Skilled in creating motion graphics and visual effects.', icon: SiAdobeaftereffects },
    ];

    const methodologySkills: SkillProps[] = [
        { name: 'Agile & Scrum', level: 8, description: 'Experienced in working with Agile methodologies and Scrum frameworks.', icon: FaTools },
        { name: 'Version Control (Git)', level: 9, description: 'Expert in Git version control, including advanced branching strategies.', icon: SiGit },
        { name: 'API Design', level: 8, description: 'Skilled in designing and implementing RESTful APIs and working with various third-party APIs.', icon: FaTools },
        { name: 'Test-Driven Development', level: 7, description: 'Experience in writing and maintaining unit tests and practicing TDD.', icon: FaTools },
    ];

    return (
        <Box maxWidth="container.xl" margin="auto" p={8}>
            <VStack spacing={12} align="stretch">
                <SkillCategory
                    title="Programming Skills"
                    icon={FaCode}
                    emoji="💻"
                    skills={programmingSkills}
                    colorScheme="blue"
                />
                <SkillCategory
                    title="Infrastructure & DevOps"
                    icon={FaServer}
                    emoji="🚀"
                    skills={infrastructureSkills}
                    colorScheme="green"
                />
                <SkillCategory
                    title="Database Skills"
                    icon={FaDatabase}
                    emoji="🗄️"
                    skills={databaseSkills}
                    colorScheme="purple"
                />
                <SkillCategory
                    title="Multimedia Skills"
                    icon={FaVideo}
                    emoji="🎨"
                    skills={multimediaSkills}
                    colorScheme="pink"
                />
                <SkillCategory
                    title="Methodologies & Tools"
                    icon={FaTools}
                    emoji="🛠️"
                    skills={methodologySkills}
                    colorScheme="orange"
                />
            </VStack>
        </Box>
    );
};

export default Skills;