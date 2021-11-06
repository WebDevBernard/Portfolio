import Header from "./Layout/Header";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Form from "./Form/Form";
import Footer from "./Layout/Footer";
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <>
      <Layout>
        <Header />
        <section>
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section>
          <Form />
        </section>
        <Footer />
      </Layout>
    </>
  );
}
