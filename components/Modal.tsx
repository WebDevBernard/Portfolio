import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import useClickedOutside from "../hooks/useClickedOutside";

const modalAnimation = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: { opacity: 0, scale: 0 },
};

const Backdrop: FC<{ onClose: () => boolean }> = (props) => (
  <div
    className="fixed top-0 left-0 h-screen w-full z-20 opacity-20 transition  bg-black ease-out duration-75"
    onClick={props.onClose}
  />
);

const ModalOverlay: FC<{ className: string }> = (props) => {
  return (
    <div className="z-30 flex justify-center items-center inset-0 fixed">
      <div className={` ${props.className}`}>{props.children}</div>{" "}
    </div>
  );
};

const Modal: FC<{
  onClose: () => boolean;
  className: string;
}> = (props) => {
  const domNode = useClickedOutside(() => {
    props.onClose();
  });

  return (
    <>
      {typeof window === "object"
        ? ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            document.getElementById("modal")!
          )
        : null}
      {typeof window === "object"
        ? ReactDOM.createPortal(
            <ModalOverlay {...props}>
              <motion.div
                ref={domNode}
                variants={modalAnimation}
                initial={{ scale: 0, opacity: 0 }}
                animate="visible"
                exit="exit"
                className={`relative w-auto mx-w-3xl p-4 shadow-md bg-white border-[1px] border-black  ${props.className}`}
              >
                <svg
                  onClick={props.onClose}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute right-3 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {props.children}
              </motion.div>
            </ModalOverlay>,
            document.getElementById("modal")!
          )
        : null}
    </>
  );
};

export default Modal;
