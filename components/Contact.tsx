import React from "react";
import { Formik, Field, Form } from "formik";

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

const Contact = () => {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="mx-auto flex flex-col  md:w-4/5">
      <h2 className="mb-4 text-2xl font-serif font-bold">Message Me</h2>

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
              setSubmitting(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        render={({ touched, errors, handleSubmit, isSubmitting }) => (
          <Form
            className=" mx-auto w-full flex flex-col space-y-4 "
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <Field type="hidden" name="form-name" value="contact" />
            <Field
              className="input"
              autoComplete="off"
              placeholder="Enter your first name"
              name="name"
              disabled={isSubmitting}
            />

            <Field
              className="input"
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Enter your email address"
              disabled={isSubmitting}
            />

            <Field
              className="input resize-none"
              autoComplete="off"
              name="message"
              placeholder="Enter your message"
              component="textarea"
              spellcheck="false"
              rows={5}
              disabled={isSubmitting}
            />
            <div className="relative ">
              <div className="text-xs text-red-500 absolute">
                {touched.name && errors.name && (
                  <p className="">{errors.name}</p>
                )}
                {touched.email && errors.email && <p>{errors.email}</p>}
                {touched.message && errors.message && (
                  <p className="">{errors.message}</p>
                )}
                {isSubmitting && (
                  <div className="text-black text-[15px] font-serif font-bold border-[1px] border-indigo-500 p-[6px]">
                    Thank you. Your message was successfully sent.
                  </div>
                )}
              </div>
              <button
                className={`${
                  isSubmitting
                    ? "bg-zinc-400"
                    : "bg-black hover:bg-white hover:border-black hover:text-black cursor-pointer"
                } btn-primary float-right`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitted" : "Submit"}
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};

export default Contact;
