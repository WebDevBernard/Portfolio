import { useRef } from "react";
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

const Home: NextPage = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);

  const scrollProjects = () => {
    projectsRef.current!.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const scrollContact = () => {
    contactRef.current!.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const scrollAbout = () => {
    aboutRef.current!.scrollIntoView({ block: "start", behavior: "smooth" });
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
      <div className="bg-hero-pattern bg-cover font-body selection:bg-[#c7d2fe]">
        <Header
          scrollAbout={scrollAbout}
          scrollContact={scrollContact}
          scrollProjects={scrollProjects}
        />
        <Layout>
          <Hero scrollContact={scrollContact} />
          <ProjectList projectsRef={projectsRef} />
          <About aboutRef={aboutRef} />
          <Skills />
          <Contact contactRef={contactRef} />
          <Footer />
        </Layout>
      </div>
    </>
  );
};

export default Home;
