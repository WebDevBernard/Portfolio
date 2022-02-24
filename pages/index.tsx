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
  return (
    <>
      <Head>
        <title>Bernard Yang</title>
        <meta name="author" content="Bernard Yang" />
        <meta name="keywords" content="Bernard Yang" />
        <meta
          name="description"
          content="Hi there, I am Bernard Yang, a software developer in Vancouver"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        ></link>
      </Head>
      <body className="bg-hero-pattern bg-cover font-body selection:bg-[#c7d2fe]">
        <Header />
        <Layout>
          <Hero />
          <ProjectList />
          <About />
          <Skills />
          <Contact />

          <Footer />
        </Layout>
      </body>
    </>
  );
};

export default Home;
