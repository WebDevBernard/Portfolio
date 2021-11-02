import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "./Form.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Full name field is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email field is required"),
  message: yup.string().required("Message field is required"),
});

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      name="contact"
      className={classes.form}
      data-netlify="true"
      method="POST"
    >
      <input type="hidden" name="form" value="contact" />

      <div className={classes.control}>
        <input
          id="form"
          placeholder="Name*"
          name="name"
          {...register("name", { required: true })}
          required
        />

        <p className={classes.errors}>{errors.name?.message}</p>
      </div>
      <div className={classes.control}>
        <input
          type="email"
          name="email"
          placeholder="Email*"
          {...register("email", { required: true })}
          required
        />
        <p className={classes.errors}>{errors.email?.message}</p>
      </div>
      <div className={classes.control}>
        <textarea
          name="message"
          placeholder="Message*"
          rows="5"
          {...register("message", { required: true })}
          required
        ></textarea>
        <p className={classes.errors}>{errors.message?.message}</p>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
