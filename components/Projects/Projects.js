import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";
import { projects } from "../../data/project-data";
export default function Projects() {
  return (
    <>
      <p className={classes.title}>Projects</p>
      <div className={classes.wrapper}>
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              github={project.github}
              link={project.link}
              tags={project.tags}
            />
          );
        })}
      </div>
    </>
  );
}
