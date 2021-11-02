import { useRef } from "react";
import About from "./About/About";
import ProjectList from "./Projects/ProjectList";
import Form from "./Form/Form";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <ProjectList />
      <Form />
      <Footer />
    </>
  );
}
