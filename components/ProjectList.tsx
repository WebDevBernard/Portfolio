import { FC } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../data/project-data";
interface RefObject<T> {
  readonly current: T | null;
}
const Project: FC<{ projectRef: RefObject<HTMLDivElement> }> = ({
  projectRef,
}) => {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
      <h2
        ref={projectRef}
        className="text-2xl font-serif font-bold md:col-span-3"
      >
        My Projects
      </h2>

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
    </div>
  );
};

export default Project;
