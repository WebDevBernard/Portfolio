import axios from "axios";
import classes from "./Form.module.css";
export default function Form({
  nameInputRef,
  emailInputRef,
  descriptionInputRef,
  submitHandler,
}) {
  return (
    <form
      name="contact"
      className={classes.form}
      onSubmit={submitHandler}
      data-netlify="true"
      method="POST"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form" value="contact" />
      <div className={classes.control}>
        <input id="form" placeholder="Name" ref={nameInputRef} required />
      </div>
      <div className={classes.control}>
        <input type="email" placeholder="Email" ref={emailInputRef} required />
      </div>
      <div className={classes.control}>
        <textarea
          placeholder="Message"
          rows="5"
          ref={descriptionInputRef}
          required
        ></textarea>
        <div data-netlify-recaptcha="true" ><
        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
