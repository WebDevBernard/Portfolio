import React, { useState, FC } from "react";
interface FormPost {
  Name?: string;
  Email?: string;
  Message?: string;
}
interface RefObject<T> {
  readonly current: T | null;
}
const Contact: FC<{ contactRef: RefObject<HTMLHeadingElement> }> = ({
  contactRef,
}) => {
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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="space-y-6 mx-auto flex flex-col  md:w-4/5">
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
          <h2
            ref={contactRef}
            className="self-start text-lg font-bold text-indigo-900"
          >
            Work With Me
          </h2>
        </span>
      )}
      {!submitted && (
        <form
          className="mx-auto w-full flex flex-col space-y-4 md:items-center"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            className="w-full p-2 border-2 rounded-md focus:outline-none focus:border-indigo-900"
            autoComplete="off"
            placeholder="Name*"
            name="name"
            required
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border-2 rounded-md focus:outline-none focus:border-indigo-900"
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Email*"
            required
            onChange={handleChange}
          />
          <input
            className="w-full resize-none p-2 border-2 rounded-md focus:outline-none focus:border-indigo-900"
            autoComplete="off"
            name="message"
            placeholder="Message*"
            required
            onChange={handleChange}
          ></input>

          <button
            className="btn btn-primary inline-block self-end uppercase mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
      {submitted && (
        <p className="self-center text-lg font-bold text-indigo-900">
          Thanks for submitting, I will contact you shortly.
        </p>
      )}
    </div>
  );
};

export default Contact;
