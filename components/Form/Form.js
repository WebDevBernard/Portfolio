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
      className={classes.form}
      onSubmit={submitHandler}
      data-netlify="true"
      action="/success"
    >
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
        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
