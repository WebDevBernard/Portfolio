import { useState, useEffect } from "react";

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
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setShow(!show);
  };
  return (
    <div
      className="flex flex-col justify-between 
 p-6 md:p-0 relative"
    >
      {openModal && (
        <Description
          title={props.title}
          description={props.description[1]}
          onClose={handleOpenModal}
          github={props.github}
          link={props.link}
        />
      )}
      <div>
        <h1 className="uppercase text-sm font-bold font-serif mb-6">
          {props.title}
        </h1>
        <span className="text-sm  tracking-tight leading-7 mt-2">
          {props.description[0]}{" "}
          <p
            onClick={handleOpenModal}
            className="inline-block  text-indigo-500 cursor-pointer underline mb-4"
          >
            Read more...
          </p>
        </span>
      </div>
      <footer className=" flex items-start divide-x divide-slate-600  ">
        {props.github && (
          <Link href={props.github} passHref>
            <a target="_blank" rel="noreferrer">
              <div className="pr-6  btn btn-secondary">View GitHub</div>
            </a>
          </Link>
        )}
        {props.link && (
          <Link href={props.link} passHref>
            <a target="_blank" rel="noreferrer">
              <div className="pl-6 btn btn-secondary mr-2">View Demo</div>
            </a>
          </Link>
        )}
      </footer>
    </div>
  );
};

export default ProjectItem;
