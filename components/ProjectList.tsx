import ProjectItem from "./ProjectItem";
import { projects } from "../data/project-data";

const Project = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
      <span className="md:col-span-2 flex self-start items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h2 className="text-lg font-bold text-indigo-900">My Projects</h2>
      </span>
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
