import { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
import Skills from "../components/Skills";
import Portal from "../components/Portal";
const Home: NextPage = () => {
  const projectRef = useRef<HTMLHeadingElement | HTMLDivElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  // to manage unloaded or mismatched props with SSR
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  const scrollProjects = () => {
    projectRef.current!.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const scrollContact = () => {
    contactRef.current!.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  const scrollAbout = () => {
    aboutRef.current!.scrollIntoView({ block: "center", behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Bernard Yang</title>
        <meta name="author" content="Bernard Yang" />
        <meta name="keywords" content="Bernard Yang" />
        <meta
          name="description"
          content="Hi there, I am Bernard Yang, a software engineer in Vancouver."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Portal>
        <main className="bg-hero-pattern bg-cover font-body overflow-x-hidden selection:bg-[#c7d2fe]">
          <Header
            scrollProjects={scrollProjects}
            scrollAbout={scrollAbout}
            scrollContact={scrollContact}
          />
          <Hero scrollContact={scrollContact} scrollProjects={scrollProjects} />
          <Layout>
            <ProjectList projectRef={projectRef} />

            <About aboutRef={aboutRef} />
            <Skills />
            <Contact />
            <Footer contactRef={contactRef} />
          </Layout>
        </main>
      </Portal>
    </>
  );
};

export default Home;
