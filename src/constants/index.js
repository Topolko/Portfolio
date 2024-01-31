import { prehnit, conscius, morh } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    mingor,
    ENA,
    prehnitLogo,
    peces,
    react,
    tailwindcss,
    typescript,
    eurohop,
    angular,
    sql,
    net,
    gimp,
    bootstrap,
    blender,
    csharp,
    figma,
    photoshop
} from "../assets/icons";

export const skills = [
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: net,
        name: ".NET",
        type: "Backend",
    },    
    {
        imageUrl: sql,
        name: "SQL",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D modeling",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Photo editor",
    },
    {
        imageUrl: gimp,
        name: "Gimp",
        type: "Photo editor",
    },    
];

export const experiences = [
    {
        title: "Full-stack Developer",
        company_name: "Conscius",
        icon: conscius,
        iconBg: "#fff3d1",
        date: "August 2022 - ",
        points: [
            "Developing and maintaining web applications using Angular, C#, .Net and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Prehnit",
        icon: prehnit,
        iconBg: "#d7de7f",
        date: "January 2022 - August 2022 ",
        points: [
            "Developing and maintaining web applications using React, typescript and other related technologies.",
            "Designing web apps, and rapid prototypeing components using figma",
            "Made printable 3D models using blender and point cloud"
        ],
    },
    {
        title: "Squad Leader",
        company_name: "Ministarstvo obrane Republike Hrvatske",
        icon: morh,
        iconBg: "#9f9b68",
        date: "2013 - 2019 ",
        points: [
            "Commanding the team, coordinating with platoon",
            "Training the platoon, organizing and conducting lectures on military expertise and skills",
            "Evaluating, advising, and mentoring company members"
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Topolko',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/luka-topolko-b69968190/',
    }
];

export const projects = [
    {
        iconUrl: mingor,
        theme: 'btn-back-green',
        name: 'Registar opreme pod tlakom',
        description: 'Developed a web application that tracks and notifies users of equipment under high pressures of impending and due inspections.',
        link: 'https://pressing.conscius.hr/',
    },
    {
        iconUrl: mingor,
        theme: 'btn-back-green',
        name: 'IndustryHelpdesk',
        description: 'Developed a web application that provides FAQ to users and connects users to government workers via live chat.',
        link: 'https://helpdesk.azo.hr/',
    },    
    {
        iconUrl: ENA,
        theme: 'btn-back-red',
        name: 'Evidencija nekretnina',
        description: 'Worked on a web application that provides the ability to determine the actual state of surfaces and purposes of real estates for the purpose of charging a municipal fee based on aerial surveying and field work.',
        link: '',
    },
    {
        iconUrl: prehnitLogo,
        theme: 'btn-back-blue',
        name: 'Geo',
        description: 'Internal project of Prehnit within which all functionalities related to map manipulation from other projects are implemented.',
        link: '',
    },
    {
        iconUrl: peces,
        theme: 'btn-back-pink',
        name: 'Pitomača Pécs Outdoor',
        description: 'Through the application, you can get all necessary information regarding hiking and cycling trails, as well as points of interest in this area. All trails and locations can be viewed in the interactive map or in the list of most important features.',
        link: 'https://play.google.com/store/apps/details?id=hr.prehnit.pitomaca.eagle',
    },
    {
        iconUrl: eurohop,
        theme: 'btn-back-black',
        name: 'Eurohop',
        description: 'Simple and fast rental of buses, minibuses, and vans for transfer, tours, excursions for groups or individuals.',
        link: 'https://eurohop.com/hr/',
    },


];