import React, { useState } from "react";
import { Formik, Field } from "formik";

import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Not a valid email address"
    )
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

interface FormPost {
  name?: string;
  email?: string;
  message?: string;
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Contact = () => {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  return (
    <div className=" space-y-4 mx-auto flex flex-col  md:w-4/5">
      <h2 className="text-2xl font-serif font-bold">Message Me</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact",
              ...values,
            }),
          })
            .then(() => {
              setIsSubmit(true);
              setSubmitting(false);
            })
            .catch((error) => {
              console.log(error);
              setSubmitting(false);
            });
        }}
        render={({
          touched,
          errors,
          isSubmitting,
          handleSubmit,
          handleReset,
        }) => (
          <form
            className=" mx-auto w-full flex flex-col space-y-4 "
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <Field type="hidden" name="form-name" value="contact" />
            <Field
              className="input"
              autoComplete="off"
              placeholder="Enter your first name"
              name="name"
            />

            <Field
              className="input"
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />

            <Field
              className="input resize-none"
              autoComplete="off"
              name="message"
              placeholder="Enter your message"
              component="textarea"
              rows={5}
            />
            <div className="flex justify-between">
              <div className="text-xs text-red-500  ">
                {touched.name && errors.name && (
                  <p className="">{errors.name}</p>
                )}
                {touched.email && errors.email && <p>{errors.email}</p>}
                {touched.message && errors.message && (
                  <p className="">{errors.message}</p>
                )}
              </div>
              <button
                className="btn btn-primary inline-block self-end uppercase mt-4 cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
            {isSubmit && (
              <div className=" p-4 self-center text-[15px] underline-offset-2 un  mb-12">
                Thank you! I will reply to you shortly.
              </div>
            )}
          </form>
        )}
      />
    </div>
  );
};

export default Contact;
