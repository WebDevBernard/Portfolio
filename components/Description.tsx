import Link from "next/link";
import { FC } from "react";
import Modal from "./Modal";

const Description: FC<{
  onClose: any;
  description: string;
  title: string;
  github: string;
  link: string;
}> = (props) => {
  console.log(props);
  return (
    <Modal onClose={props.onClose} className="w-[400px] min-h-[300px]">
      <h1 className="text-md font-serif font-bold mb-2 border-b-[1px] border-b-slate-900">
        {props.title}
      </h1>
      <p className="text-sm tracking-tight leading-7">{props.description}</p>
      <footer className=" flex items-start divide-x divide-slate-600 mt-2">
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
    </Modal>
  );
};

export default Description;
