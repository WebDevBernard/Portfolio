import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsUpAnimation } from "../styles/variants";
import useScroll from "../hooks/useScroll";
interface FormPost {
  Name?: string;
  Email?: string;
  Message?: string;
}

const Contact = () => {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const [state, setState] = useState<FormPost>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));
    event.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const [ref, controls] = useScroll();
  return (
    <div className=" space-y-4 mx-auto flex flex-col  md:w-4/5">
      {!submitted && (
        <span className="col-span-2 flex self-start items-center space-x-2">
          <h2 className="text-xl font-serif font-bold">Message Me</h2>
        </span>
      )}
      {!submitted && (
        <form
          className=" mx-auto w-full flex flex-col space-y-4 md:items-center"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            className="input"
            autoComplete="off"
            placeholder="Enter your first name"
            name="name"
            required
            onChange={handleChange}
          />
          <input
            className="input"
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            onChange={handleChange}
          />
          <textarea
            className="input resize-none"
            autoComplete="off"
            name="message"
            placeholder="Enter your message"
            required
            onChange={handleChange}
            rows={5}
          ></textarea>

          <button
            className="btn btn-primary inline-block self-end uppercase mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
      {submitted && (
        <motion.div
          ref={ref}
          // animate={controls}
          // variants={skillsUpAnimation}
          className=" p-4 self-center text-[15px] underline decoration-2 underline-offset-8"
        >
          Thank you! I will reply to you shortly.
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
