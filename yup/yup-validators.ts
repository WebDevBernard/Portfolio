import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Not a valid email address"
    )
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});
