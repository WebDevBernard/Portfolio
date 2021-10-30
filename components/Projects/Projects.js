import { useContext, useEffect, useState } from "react";
const projects = [
  {
    id: "m1",
    title: "Make My Day",
    image: "",
    description: "A trello clone / task board built with React Hooks.",
  },
  {
    id: "m2",
    title: "Scheduler",
    image: "",
    description: "Scheduling App: schedule, edit or cancel interviews. ",
  },
  {
    id: "m3",
    title: "Smart-to-do",
    image: "",
    description: "A todo list that utilizes external APIs to organize tasks",
  },
];
export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => {
          return (
            <li key={projects.id}>
              {project.title}
              {project.description}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
