import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vercel from "./Vercel.png";
import express from "./Express.png";
import react from "./React.png";
import node from "./Node.js.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import right_arrow_black from "./right-arrow-black.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-light.png";
import profile_img_dark from "./profile-dark.png";
import download_icon from "./download.png";
import download_icon_dark from "./download-dark.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

import { Code2, Plug, Database, Wrench } from "lucide-react";

export const assets = {
  profile_img_dark,
  user_image,
  code_icon,
  right_arrow_black,
  code_icon_dark,
  download_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vercel,
  express,
  react,
  node,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  // {
  //   title: "Quick AI",
  //   description: "Full Stack",
  //   bgImage: "/quickai.jpg",
  //   to: "https://quickai-gold.vercel.app/",
  // },
  {
    title: "My Blog",
    description: "Full Stack",
    bgImage: "/myblog.jpg",
    to: "https://myblog-mern.onrender.com/",
  },
  {
    title: "Crypto Tracker",
    description: "Full Stack",
    bgImage: "/crypto.jpg",
    to: "https://crypto-tracker-nextjs-one.vercel.app/",
  },
  {
    title: "Wanderlust",
    description: "Full Stack",
    bgImage: "/wanderlust.jpg",
    to: "https://wanderlust-sv64.onrender.com/listings",
  },
];

export const serviceData = [
  {
    icon: Code2,
    iconColor: "#FF1B6B",
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications with MERN stack, delivering responsive and scalable solutions from frontend to backend.",
    link: "",
  },
  {
    icon: Plug,
    iconColor: "#9333EA",
    title: "API Integration & Development",
    description:
      "Seamlessly integrating third-party APIs and developing custom RESTful APIs for enhanced application functionality and connectivity.",
    link: "",
  },
  {
    icon: Database,
    iconColor: "#3B82F6",
    title: "Database Design & Management",
    description:
      "Designing optimized database architectures with PostgreSQL and MongoDB, ensuring data integrity, performance, and scalability.",
    link: "",
  },
  {
    icon: Wrench,
    iconColor: "#F59E0B",
    title: "Web Application Maintenance",
    description:
      "Providing ongoing support, bug fixes, performance optimization, and feature updates to keep applications running smoothly.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "JavaScript",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor of Computer Applications",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 3 projects",
  },
];

export const toolsData = [
  assets.mongodb,
  assets.express,
  assets.react,
  assets.node,
  assets.git,
  assets.vercel,
];
