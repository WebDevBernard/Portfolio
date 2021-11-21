import { useRef, useEffect, useState } from "react";
import Header from "./Layout/Header";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Form from "./Form/Form";
import Footer from "./Layout/Footer";
import Layout from "./Layout/Layout";
import classes from "./button.module.css";
export default function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollProjects = () => {
    projectsRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const scrollContact = () => {
    contactRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const scrollAbout = () => {
    aboutRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const [showButton, setShowButton] = useState();
  const toggleVisibility = () => {
    if (window.scrollY >= 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // makes the animation smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <Layout>
        <Header
          scrollAbout={scrollAbout}
          scrollContact={scrollContact}
          scrollProjects={scrollProjects}
        />
        <section>
          <Hero scrollContact={scrollContact} />
        </section>
        <section>
          <Projects projectsRef={projectsRef} />
        </section>
        <section>
          <About aboutRef={aboutRef} />
        </section>
        <section>
          <Form contactRef={contactRef} />
        </section>
        <Footer />
        <img
          onClick={scrollToTop}
          className={showButton ? classes.button : classes.hide}
          src="https://img.icons8.com/fluency/96/000000/up.png"
        />
      </Layout>
    </>
  );
}
