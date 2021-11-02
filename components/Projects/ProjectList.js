import { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";
const projects = [
  {
    id: "m1",
    title: "Make My Day",
    image:
      "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/kanban.png",
    description:
      "A trello clone built with React.  NodeJS backend connected to Postgres database.",
    github: "https://github.com/WebDevBernard/MakeMyDay",
    link: "https://makemydaydemo.netlify.app/",
  },
  {
    id: "m2",
    title: "Scheduler",
    image:
      "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/Scheduler.png",
    description: "An interview scheduling app",
    github: "https://github.com/WebDevBernard/scheduler",
    link: "",
  },
  {
    id: "m3",
    title: "Smart-to-do",
    image:
      "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/smart-to-do.png",
    description:
      "A smart todo list that utilizes external APIs to organize tasks",
    github: "https://github.com/WebDevBernard/smart-to-do",
    link: "",
  },
];
export default function ProjectList() {
  return (
    <section>
      {/* <h1 className={classes.title}>Projects</h1> */}
      <ul id="projects" className={classes.wrapper}>
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              github={project.github}
              link={project.link}
            />
          );
        })}
      </ul>
    </section>
  );
}
