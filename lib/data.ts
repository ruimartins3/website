import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "E-learning",
    location: "Online",
    description:
      "After 6 months of studying, I decided to pursue Freelancing to hone my skills.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2022 - December 2022",
  },
  {
    title: "Freelancing",
    location: "Lisbon, Portugal",
    description: "After a month of freelancing, I got a job at Nestlé!",
    icon: React.createElement(FaReact),
    date: "January 2023 - Febuary 2023",
  },
  {
    title: "Web Developer Specialist at Nestlé",
    location: "Lisbon, Portugal",
    description:
      "Web Developer at Nestlé, specializing in the implementation of web solutions using a diverse stack that encompassed HTML5, CSS3, JavaScript, and SAP CDC.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - January 2024",
  },

  {
    title: "Technology Consultant at SAP",
    location: "Lisbon, Portugal",
    description: "Technology Consultant at SAP",
    icon: React.createElement(CgWorkAlt),
    date: "Febuary 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Comfy Store",
    description: "An E-commerce store with authentication and payment system!",
    tags: ["React", "Redux", "MongoDB", "Styled-components", "Auth0", "Stripe"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Github User Search",
    description: "A Github user search app made with React!",
    tags: ["React", "Redux", "MongoDB", "Auth0"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Mini-Wiki Search",
    description: "A mini search engine that allows you to search websites!",
    tags: ["HTML", "CSS", "SQL", "JavaScript", "Express"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Artificial Intelligence (AI)",
  "Generative AI",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Next.js",
  "JQuery",
  "Git",
  "Python",
  "SAP Cloud",
] as const;
