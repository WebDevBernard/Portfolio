import Link from "next/link";

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
      className=" bg-neutral-50 flex flex-col justify-between 
     rounded-md overflow-hidden  relative border-b-indigo-200 border-b-4 border-r-slate-300 border-r-4 shadow-sm"
    >
      <div>
        <img
          className="w-full h-[10rem] object-cover"
          src={props.image}
          alt="project image"
        />
        <div className="p-4">
          <h1 className=" text-lg font-bold text-indigo-900 ">{props.title}</h1>
          <p className="text-[16px] font-serif text-gray-600 leading-tight  mt-2">
            {props.description}
          </p>
        </div>
      </div>
      <div className="px-4 ">
        <footer className=" flex justify-between pb-4 ">
          {props.github && (
            <Link href={props.github} passHref>
              <a target="_blank" rel="noreferrer">
                <div className="btn btn-secondary">
                  <i
                    className="devicon-github-original mr-2"
                    title="github link icon"
                  />
                  GitHub
                </div>
              </a>
            </Link>
          )}
          {props.link && (
            <Link href={props.link} passHref>
              <a target="_blank" rel="noreferrer">
                <div className="btn btn-secondary mr-2">
                  <i
                    className="devicon-react-original mr-2"
                    title="website link icon"
                  />
                  Demo
                </div>{" "}
              </a>
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ProjectItem;
