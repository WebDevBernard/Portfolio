import { useRef } from "react";
import About from "./About/About";
import ProjectList from "./Projects/ProjectList";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

export default function App() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();
  const submitHandler = (e) => {
    // e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const projectData = {
      name: enteredName,
      email: enteredEmail,
      description: enteredDescription,
    };
    console.log(projectData);
  };

  return (
    <>
      <About />
      <ProjectList />
      <Form
        nameInputRef={nameInputRef}
        emailInputRef={emailInputRef}
        descriptionInputRef={descriptionInputRef}
        submitHandler={submitHandler}
      />
      <Footer />
    </>
  );
}
