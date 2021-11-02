import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Form from "./Form/Form";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default function App() {
  return (
    <>
      <Header />
      <section>
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">...</section>
      <section id="contact">
        <Form />
      </section>
      <Footer />
    </>
  );
}
