import { useState, useEffect, FC } from "react";

interface Props {
  scrollAbout: () => void;
  scrollContact: () => void;
  scrollProjects: () => void;
}
const Header: FC<Props> = ({ scrollAbout, scrollContact, scrollProjects }) => {
  const [showHeader, setShowHeader] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY >= 50) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-10 md:py-0">
      <nav
        className={` max-w-lg m-auto px-4 py-2 flex flex-row text-[15px] justify-between fixed top-0 inset-x-1 
          ${
            showHeader &&
            "z-50 transition duration-1000  md:max-w-[868px] bg-white opacity-95 md:top-3 inset-x-0 shadow-md"
          }`}
      >
        <div>
          <img
            onClick={scrollToTop}
            className="object-scale-down w-16 h-16 inline mr-2 border-2 border-black rounded-full cursor-pointer select-none"
            src="https://avatars.githubusercontent.com/u/72034695?v=4"
            alt="profile image"
          />
          <p className="text-md font-serif font-bold hidden md:inline-block ml-2 tracking-wide">
            Bernard
          </p>
        </div>
        <div className="flex items-center cursor-pointer ">
          <a onClick={scrollAbout} className="m-2 hover:underline">
            About
          </a>
          <a onClick={scrollProjects} className="m-2 hover:underline">
            Projects
          </a>
          <a onClick={scrollContact} className="m-2 hover:underline">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
