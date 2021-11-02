import classes from "./Form.module.css";

export default function Form() {
  return (
    <form
      name="contact"
      className={classes.form}
      data-netlify="true"
      method="POST"
    >
      <input type="hidden" name="form" value="contact" />

      <div className={classes.control}>
        <input id="form" placeholder="Name*" name="name" required />
      </div>
      <div className={classes.control}>
        <input type="email" name="email" placeholder="Email*" required />
      </div>
      <div className={classes.control}>
        <textarea
          name="message"
          placeholder="Message*"
          rows="5"
          required
        ></textarea>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
