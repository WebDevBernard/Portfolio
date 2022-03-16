import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Description from "./Description";
import { FC } from "react";
interface ProjectProps {
  title: string;
  image: string;
  description: string[];
  github: string;
  link: string;
}

const ProjectItem: FC<ProjectProps> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div
      className="bg-neutral-50 shadow-md flex flex-col justify-between 
     rounded-md overflow-hidden  relative"
    >
      {openModal && (
        <Description
          description={props.description[1]}
          onClose={handleOpenModal}
        />
      )}
      <div>
        <div className="w-full h-[10rem] relative">
          <Image
            src={props.image}
            alt="project image"
            layout="fill"
            loading="eager"
          />
        </div>
        <div className="p-4">
          <h1 className=" text-lg font-bold text-indigo-900 ">{props.title}</h1>
          <span className="text-[16px] font-serif text-gray-600 leading-tight  mt-2">
            {props.description[0]}{" "}
            <p
              onClick={handleOpenModal}
              className="inline-block  text-indigo-500 cursor-pointer underline"
            >
              Read more...
            </p>
          </span>
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
                </div>
              </a>
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ProjectItem;
