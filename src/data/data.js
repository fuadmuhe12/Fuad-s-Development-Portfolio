import React from "react";
import { IoLogoWordpress } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import {
  SiDjango,
  SiReact,
  SiTypescript,
  SiDocker,
  SiJenkins,
  SiDotnet,
  SiDigitalocean,
  SiFlutter,
  SiStrapi,
  SiMicrosoftsqlserver,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";
// react icons
import { FiGrid, FiLinkedin } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { RiContactsLine, RiReactjsLine } from "react-icons/ri";
import { SiSass, SiJquery, SiExpress, SiRedux } from "react-icons/si";

import { GrGithub, GrTwitter, GrInstagram } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript, IoLogoGameControllerB } from "react-icons/io";
import { FaNodeJs, FaGit } from "react-icons/fa";

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: "Home",
    icon: <FiGrid className="link-icon" />,
    url: "/",
  },
  {
    text: "About",
    icon: <BsPersonLinesFill className="link-icon" />,
    url: "/about",
  },
  {
    text: "Projects",
    icon: <VscProject className="link-icon" />,
    url: "/project",
  },
  {
    text: "Contacts",
    icon: <RiContactsLine className="link-icon" />,
    url: "/contact",
  },
];
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: "https://github.com/fuadmuhe12",
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: "https://www.linkedin.com/in/fuadmuhe/",
  },
  {
    icon: <SiLeetcode className="icon switch__color" />,
    url: "https://leetcode.com/u/fuad_M/",
  },
];
// programming lanuages (spanText), icons and url
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: "SASS",
    url: "https://sass-lang.com/documentation",
  },
  {
    icon: <SiTailwindcss className="skills-icon switch__color" />,
    spanText: "TAILWIND CSS",
    url: "https://tailwindcss.com/docs",
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: "JAVASCRIPT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },
  // typescript
  {
    icon: <SiTypescript className="skills-icon switch__color" />,
    spanText: "TYPESCRIPT",
    url: "https://www.typescriptlang.org/docs/",
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: "REACT JS",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    icon: <SiNextdotjs className="skills-icon switch__color" />,
    spanText: "NEXT JS",
    url: "https://nextjs.org/docs",
  },
  {
    icon: <SiFlutter className="skills-icon switch__color" />,
    spanText: "FLUTTER",
    url: "https://flutter.dev/docs",
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: "GIT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: "GITHUB",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <SiDotnet className="skills-icon switch__color" />,
    spanText: ".NET",
    url: "https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet",
  },
  {
    icon: <SiStrapi className="skills-icon switch__color" />,
    spanText: "STRAPI",
    url: "https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html",
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: "EXPRESS JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express",
  },
  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: "MONGO DB",
    url: "",
  },
  {
    icon: <SiMicrosoftsqlserver className="skills-icon switch__color" />,
    spanText: "SQL SERVER",
    url: "https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15",
  },
  {
    icon: <SiDocker className="skills-icon switch__color" />,
    spanText: "DOCKER",
    url: "https://docs.docker.com/get-started/",
  },
  {
    icon: <SiJenkins className="skills-icon switch__color" />,
    spanText: "CI/CD",
    url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
  },
  {
    icon: <BsGoogle className="skills-icon switch__color" />,
    spanText: "Googling",
    url: "https://google.com",
  },
  {
    icon: <SiDigitalocean className="skills-icon switch__color" />,
    spanText: "Digital Ocean",
    url: "https://www.digitalocean.com/docs/",
  },
];

export { sideBarMenu, socialIcons, skillSet };
