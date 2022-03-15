import { FC } from "react";
import Modal from "./Modal";

const Description: FC<{ onClose: any; description: string }> = (props) => {
  return (
    <Modal onClose={props.onClose} className="w-[400px] min-h-[300px]">
      <h1 className="text-lg font-bold text-indigo-900 mb-2 border-b-[1px] border-b-slate-900">
        About
      </h1>
      <p className=" leading-tighter font-serif">{props.description}</p>
    </Modal>
  );
};

export default Description;
