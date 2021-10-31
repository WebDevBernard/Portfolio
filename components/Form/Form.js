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
    >
      <input type="hidden" name="form" value="contact" />
      <div className={classes.control}>
        <input
          id="form"
          placeholder="Name"
          name="name"
          ref={nameInputRef}
          required
        />
      </div>
      <div className={classes.control}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailInputRef}
          required
        />
      </div>
      <div className={classes.control}>
        <textarea
          name="message"
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
