import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";
import { projects } from "../../data/project-data";
export default function Projects({ projectsRef }) {
  return (
    <>
      <div></div>
      <p ref={projectsRef} className={classes.title}>
        <img src="https://img.icons8.com/cotton/64/000000/code.png" />
        Projects
      </p>
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
