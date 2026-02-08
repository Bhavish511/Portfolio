import React from 'react';
import {
    FaReact, FaJs, FaNode, FaMobile,
    FaCode, FaPalette, FaPaintBrush,
    FaPlug,
    FaGithub, FaLinkedin,
    FaPython, FaJava,
    FaAws, FaDocker, FaJenkins, FaLinux, FaStripe
} from 'react-icons/fa';
import {
    SiMongodb, SiNodedotjs, SiReact, SiTypescript,
    SiNestjs, SiExpress, SiKubernetes, SiMysql,
    SiPostgresql, SiRedis, SiSequelize, SiTypeorm, SiMongoose,
    SiPostman, SiSwagger, SiTrello, SiGithubactions,
    SiGo, SiCplusplus, SiJson, SiLeetcode
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';


export const personalInfo = {
    name: "Bhavish Kumar",
    title: "Software Engineer",
    email: "Bhavishsindhi3@gmail.com",
    summary: [
        "Passionate Full-Stack Developer with expertise in building scalable web applications using the MERN stack.",
        "Experienced in React, Node.js, and modern CSS frameworks to deliver high-performance user interfaces.",
        "Committed to writing clean, maintainable code and staying updated with the latest industry trends."
    ],
    heroTypedStrings: ['Software Development', 'Web Development', 'Frontend Development', 'Backend Development', 'DevOps', 'Problem Solving'],
    socialLinks: [
        { icon: <FaGithub />, url: 'https://github.com/Bhavish511', name: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/bhavish-kumar', name: 'LinkedIn' },
        { icon: <SiLeetcode />, url: 'https://leetcode.com/Bhavish511', name: 'LeetCode' },
        // { icon: <FaTwitter />, url: 'https://twitter.com/Bhavish511', name: 'Twitter' },
        // { icon: <FaFacebook />, url: 'https://facebook.com/bhavish.kumar', name: 'Facebook' },
    ]
};


export const skills = [
    // Languages
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'Languages' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'Languages' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', category: 'Languages' },
    { name: 'Java', icon: <FaJava />, color: '#007396', category: 'Languages' },
    { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C', category: 'Languages' },
    { name: 'Go', icon: <SiGo />, color: '#00ADD8', category: 'Languages' },

    // Frameworks & Libraries
    { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'Frameworks & Libraries' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933', category: 'Frameworks & Libraries' },
    { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E', category: 'Frameworks & Libraries' },
    { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', category: 'Frameworks & Libraries' },
    { name: 'REST APIs', icon: <FaPlug />, color: '#00D1B2', category: 'Frameworks & Libraries' },

    // Cloud & DevOps
    { name: 'AWS', icon: <FaAws />, color: '#FF9900', category: 'Cloud & DevOps' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED', category: 'Cloud & DevOps' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5', category: 'Cloud & DevOps' },
    { name: 'Jenkins', icon: <FaJenkins />, color: '#D24939', category: 'Cloud & DevOps' },
    { name: 'CI/CD', icon: <SiGithubactions />, color: '#2088FF', category: 'Cloud & DevOps' },

    // Databases & ORMs
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', category: 'Databases & ORMs' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', category: 'Databases & ORMs' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', category: 'Databases & ORMs' },
    { name: 'Redis', icon: <SiRedis />, color: '#DC382D', category: 'Databases & ORMs' },
    { name: 'Sequelize', icon: <SiSequelize />, color: '#52B0E7', category: 'Databases & ORMs' },
    { name: 'TypeORM', icon: <SiTypeorm />, color: '#e535ab', category: 'Databases & ORMs' },
    { name: 'Mongoose', icon: <SiMongoose />, color: '#880000', category: 'Databases & ORMs' },

    // Developer Tools
    { name: 'Stripe', icon: <FaStripe />, color: '#635BFF', category: 'Developer Tools' },
    { name: 'JWT Auth', icon: <SiJson />, color: '#ffffff', category: 'Developer Tools' },
    { name: 'GitHub', icon: <FaGithub />, color: '#ffffff', category: 'Developer Tools' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', category: 'Developer Tools' },
    { name: 'Swagger', icon: <SiSwagger />, color: '#85EA2D', category: 'Developer Tools' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624', category: 'Developer Tools' },
    { name: 'Trello', icon: <SiTrello />, color: '#0079BF', category: 'Developer Tools' },
    { name: 'VS Code', icon: <VscVscode />, color: '#007ACC', category: 'Developer Tools' },
];

export const projects = [
    {
        title: 'Mazdoor Connect',
        description: 'A hyper-local service marketplace designed to bridge the gap between skilled workers and customers in Pakistan. Features police verification and secure payments.',
        tech: ['React', 'NestJS', 'MySQL', 'REST API', 'Bootstrap'],
        liveLink: 'https://mazdoor-connect-ruby.vercel.app',
        githubLink: 'https://github.com/Bhavish511/Mazdoor-Connect',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Tixify',
        description: 'A comprehensive Ticket Booking web Application designed for seamless event reservations with real-time availability updates.',
        tech: ['React', 'NestJS', 'MySQL', 'REST API', 'Bootstrap'],
        liveLink: '#',
        githubLink: 'https://github.com/Bhavish511/Tixify',
        image: 'https://images.unsplash.com/photo-1539193143244-c83d9436d633?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'iNoteBook',
        description: 'A full-stack cloud notebook for securing your notes. Features JWT authentication and multi-device sync.',
        tech: ['React', 'NodeJs', 'Express', 'MySQL', 'REST API', 'Bootstrap'],
        liveLink: '#',
        githubLink: 'https://github.com/Bhavish511/iNoteBook',
        image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2069&auto=format&fit=crop'
    },
    {
        title: 'React NewsApp',
        description: 'Real-time news aggregator that provides the latest updates across various categories using News API.',
        tech: ['React', 'NodeJs', 'Express', 'MySQL', 'REST API', 'Bootstrap'],
        liveLink: '#',
        githubLink: 'https://github.com/Bhavish511/React-NewsApp',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: "Volunteer-Connect",
        description: "A full-stack web application for managing volunteer requests, organization dashboards, and user profiles.",
        tech: ['React', 'NodeJs', 'Express', 'MySQL', 'REST API', 'Bootstrap'],
        liveLink: '#',
        githubLink: "https://github.com/Bhavish511/Volunteer-Connect",
        image: 'https://images.unsplash.com/photo-1540914120281-17c6a99ee56a?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: "Pakistani E-commerce",
        description: "A comprehensive e-commerce platform featuring product management, shopping cart, and secure checkout integration.",
        tech: ['React', 'NodeJs', 'Express', 'MongoDB', 'REST API', 'Tailwind'],
        liveLink: '#',
        githubLink: "https://github.com/Bhavish511/Ecommerce-MERN",
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop'
    },
];


export const experience = [
    // {
    //     title: 'Frontend Developer',
    //     company: 'Freelance / Personal Projects',
    //     location: 'Remote',
    //     period: '2023 - Present',
    //     description: 'Developing high-performance React applications and contributing to open-source projects on GitHub.',
    //     type: 'current'
    // },
    {
        title: 'Backend Developer',
        company: 'The Coding Buzz',
        location: 'Karachi, Pakistan',
        period: 'June 2025 - Present',
        description: `Backend Developer focused on architectural improvements and feature development.
        • Developed a Real-time Social Media Comment Automation System integrating Facebook, Instagram, and YouTube APIs.
        • Architected a Club Management System with 40+ RESTful APIs, RBAC, and automated reporting.
        • Enhanced existing ERP systems and maintained legacy applications through refactoring and module development.`,
        type: 'current'
    },
];

export const services = [
    {
        icon: <FaCode />,
        title: 'Software Development',
        description: 'Building modern, responsive web applications with clean code and best practices.'
    },
    {
        icon: <FaPalette />,
        title: 'Web Application Design',
        description: 'Creating intuitive and visually appealing designs that enhance user experience.'
    },
    {
        icon: <FaReact />,
        title: 'React Development',
        description: 'Developing scalable React applications with component-based architecture.'
    },
    {
        icon: <FaPaintBrush />,
        title: 'UI/UX-based Development',
        description: 'Implementing user-centered designs that are both functional and beautiful.'
    },
    {
        icon: <FaMobile />,
        title: 'Responsive Development',
        description: 'Ensuring applications work seamlessly across all devices and screen sizes.'
    },
    {
        icon: <FaPlug />,
        title: 'API Integration',
        description: 'Connecting frontend applications with backend services and third-party APIs.'
    },
];

export const team = [
    {
        icon: <SiReact />,
        title: 'Frontend Development',
        description: 'Building interactive and responsive user interfaces with React, modern CSS, and Framer Motion.',
        color: '#61DAFB'
    },
    {
        icon: <SiNodedotjs />,
        title: 'Backend Development',
        description: 'Designing scalable server-side systems using Node.js, NestJS, and Express for high performance.',
        color: '#339933'
    },
    {
        icon: <FaMobile />,
        title: 'Mobile App Development',
        description: 'Crafting cross-platform mobile experiences with React Native for seamless iOS and Android apps.',
        color: '#61DAFB'
    },
    {
        icon: <FaAws />,
        title: 'Cloud & Hosting',
        description: 'Managing infrastructure with AWS and Docker to ensure maximum uptime and lightning-fast delivery.',
        color: '#FF9900'
    },
    {
        icon: <SiPostman />,
        title: 'API Architecture',
        description: 'Architecting robust RESTful and GraphQL APIs with comprehensive documentation using Swagger/Postman.',
        color: '#FF6C37'
    },
    {
        icon: <SiSequelize />,
        title: 'Database Management',
        description: 'Optimizing data storage with SQL/NoSQL databases and advanced ORM strategies for integrity.',
        color: '#52B0E7'
    },
];

export const emailConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_kv7nvmf',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_oi52ajb',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '6Myzso-3P2xZh_xSY'
};

export const stats = {
    yearsExperience: "2+",
    projectsCompleted: "10+",
    technologies: "5+"
};
