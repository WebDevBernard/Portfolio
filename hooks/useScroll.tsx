import { AnimationControls, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// https://fettblog.eu/typescript-react-typeing-custom-hooks/
const useScroll = (): [() => void, AnimationControls] => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  if (inView) {
    controls.start("visible");
  } else {
    controls.start("hidden");
  }
  return [ref, controls];
  // return [ref, controls] as const;
};

export default useScroll;
