// https://dev.to/ataparvinghods/react-portals-and-how-to-use-them-next-js-and-cra-2dic

import { useEffect, useState, FC } from "react";
import { createPortal } from "react-dom";

const Portal: FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById("modal")!)
    : null;
};

export default Portal;
