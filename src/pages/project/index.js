import { GrGithub } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";

import {
  prog1,
  prog2,
  prog3,
  prog4,
  prog5,
  prog6,
  prog7,
  prog8,
  prog9,
  prog10,
} from "../../assets/images";

// projects data
export const projects = [
  {
    id: 1,
    name: "Tufan Pharmacy",
    desc: "A professional website buile to boost companines online presence and increase sales",
    stack:
      "Html, Css, Javascript, Tailwindcss,Strapi CMS,Express js, google analytics, Twak.to",
    imgUrl: prog7,
  
    website: {
      icon: <TbWorld />,
      url: "https://seashell-app-nwtre.ondigitalocean.app/",
    },
  },
  {
    id: 4,
    name: "Auu Connectify",
    desc: "AAU Connectify is a project aimed at creating a centralized platform for the Addis Ababa University (AAU) community to enhance communication and connection.",
    stack: "Flutter, Mongodb, Nest JS",
    imgUrl: prog4,
    website: {
      icon: <TbWorld />,
      url: "https://github.com/AAUConnectify/flutter-2024-AAUConnectify",
    },
  },
  {
    id: 2,
    name: "Artai Amharic Spell Checker",
    desc: "The Artai Amharic Spell Checker is an advanced Chrome extension that enhances Amharic writing by providing real-time spell-checking across any website with a text area.",
    stack: "Javascript, Chrome Extension API, Python, Tailwindcss",
    imgUrl: prog2,
    website: {
      icon: <TbWorld />,
      url: "https://github.com/fuadmuhe12/Artai-Amharic-spell-checker",
    },
  },
  {
    id: 3,
    name: "Library Management System",
    desc: "A library management system is software for tracking library records, including book availability, issuance, returns, renewals, and late fines.",
    stack: "ASP.NET, SQL Server, Entity Framework, Hangfire, Serilog, Swagger",
    imgUrl: prog3,
    website: {
      icon: <TbWorld />,
      url: "https://github.com/fuadmuhe12/Library-Management-System-BackEnd",
    },
  },
  {
    id: 5,
    name: "Financail Stock",
    desc: "The Financial Stock Backend is a .NET API that provides functionalities for managing financial stocks, comments, and user portfolios.",
    stack: "ASP.NET, SQL Server, Entity Framework, Serilog, Swagger",
    imgUrl: prog5,

    website: {
      icon: <TbWorld />,
      url: "https://wonders-of-ethiopia.vercel.app/",
    },
  },
/*   {
    id: 6,
    name: "Game Oasis",
    desc: "a game discovery website with search and filter functionality",
    stack: "React JS, Typescript, external Api",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/47thommy/game-oasis.git",
    },
    website: {
      icon: <TbWorld />,
      url: "https://game-oasis.vercel.app/",
    },
    imgUrl: prog6,
  },

  {
    id: 7,
    name: "Advanced dashboard App",
    desc: "Advanced dashboard application with dynamic data,charts,calendars etc",
    stack: "React JS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/advanced-dashboard-app",
    },
    website: {
      icon: <TbWorld />,
      url: "https://advanced-dashboard-app.netlify.app",
    },
    imgUrl: prog1,
  },
  {
    id: 8,
    name: "Class Room",
    desc: "Classroom is a one-stop shop for education and learning instructors manage, measure and enrich their learning experience",
    stack: "React JS expressjs Node js Mongodb",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/47thommy/classroom.git",
    },
    website: {
      icon: <TbWorld />,
      url: "https://classroom-blue-six.vercel.app/",
    },
    imgUrl: prog10,
  },
  {
    id: 10,
    name: "Realstate Website",
    desc: "online realstate selling and renting website with google auth, rensing,buying or selling places contacting the house owner directly",
    stack: "React JS, Express JS Mongodb",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/Pizzashop-in-newyork",
    },
    website: {
      icon: <TbWorld />,
      url: "https://pizzashop-in-newyork.vercel.app/",
    },
    imgUrl: prog8,
  },
  {
    id: 9,
    name: "The Quiditch Fitnessclub",
    desc: "workout tracking website that with user authentication, where each user can track their workout load, rep, sets to progressively overload",
    stack: "React JS Express JS Node JS mongodb",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/47thommy/The-Quidditch-Fitness-Club.git",
    },
    website: {
      icon: <TbWorld />,
      url: "https://the-quidditch-fitness-club.vercel.app/",
    },
    imgUrl: prog9,
  }, */
];
