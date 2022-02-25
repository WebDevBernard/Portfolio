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
      className="flex flex-col justify-between bg-indigo-50
     rounded-lg shadow-xl overflow-hidden "
    >
      <div>
        <img
          className="w-full h-[10rem] object-cover "
          src={props.image}
          alt="project image"
        />
        <div className="p-4">
          <h1 className=" text-lg font-bold text-indigo-900 ">{props.title}</h1>
          <p className=" text-gray-600 leading-tight  mt-2">
            {props.description}
          </p>
        </div>
      </div>
      <div className="px-4">
        <footer className=" flex justify-between border-t border-slate-600 py-4">
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
        </footer>
      </div>
    </div>
  );
};

export default ProjectItem;
