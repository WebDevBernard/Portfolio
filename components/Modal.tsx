import { FC } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import useClickedOutside from "../hooks/useClickedOutside";

const modalAnimation = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Backdrop: FC<{ onClose: () => boolean }> = (props) => (
  <div
    className="fixed top-0 left-0 h-screen w-full z-20 opacity-20 transition bg-black ease-out duration-75"
    onClick={props.onClose}
  />
);

const ModalOverlay: FC<{ className: string }> = (props) => {
  return (
    <div className="z-30 flex justify-center items-center overflow-y-auto inset-0 fixed">
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
                initial="hidden"
                animate="visible"
                exit="exit"
                className={` w-auto mx-w-3xl p-4 shadow-md bg-zinc-50 border-[1px] border-black  ${props.className}`}
              >
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
