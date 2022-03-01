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
    <div className="space-y-4 mx-auto flex flex-col  md:w-4/5">
      {!submitted && (
        <span className="col-span-2 flex self-start items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="self-start text-lg font-bold text-indigo-900">
            Message Me
          </h2>
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
            className="input"
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
          animate={controls}
          variants={skillsUpAnimation}
          className=" p-4 rounded-full self-center text-lg font-bold text-indigo-900 underline decoration-4 underline-offset-8"
        >
          Thank you! I will reply to you shortly.
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
