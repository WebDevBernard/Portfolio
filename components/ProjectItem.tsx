import { FC } from "react";
interface ProjectProps {
  title: string;
  image: string;
  description: string;
  github: string;
  link: string;
}
const ProjectItem: FC<ProjectProps> = (props) => {
  return (
    <div
      className=" bg-indigo-50
     rounded-lg shadow-xl overflow-hidden"
    >
      <img
        className="w-full h-[10rem] object-cover "
        src={props.image}
        alt="project image"
      />

      <div className="p-4 flex flex-col">
        <h1 className=" text-lg font-bold text-indigo-900 ">{props.title}</h1>
        <p className=" text-gray-600 leading-tight mb-auto flex-grow">
          {props.description}
        </p>{" "}
        <footer className=" flex justify-between border-t border-slate-600 mt-2 pt-4">
          {props.link && (
            <button className="btn btn-secondary mr-2">
              <a href={props.link} target="_blank" rel="noreferrer">
                <i
                  className="devicon-react-original mr-2"
                  title="website link icon"
                />
                Demo
              </a>
            </button>
          )}
          {props.github && (
            <button className="btn btn-secondary">
              <a href={props.github} target="_blank" rel="noreferrer">
                <i
                  className="devicon-github-original mr-2"
                  title="github link icon"
                />
                GitHub
              </a>
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ProjectItem;
