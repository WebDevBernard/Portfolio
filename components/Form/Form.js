import classes from "./Form.module.css";
export default function Form({
  nameInputRef,
  emailInputRef,
  descriptionInputRef,
  submitHandler,
}) {
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <input placeholder="Name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <input placeholder="Email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <textarea
          placeholder="Message"
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
