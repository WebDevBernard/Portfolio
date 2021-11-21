import classes from "./Form.module.css";

export default function Form({ contactRef }) {
  return (
    <form
      name="contact"
      className={classes.form}
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      // data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form" value="contact" />
      <p className={classes.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <p className={classes.control}>
        <input
          autoComplete="off"
          ref={contactRef}
          placeholder="Name*"
          name="name"
          required
        />
      </p>
      <p className={classes.control}>
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
      </p>
      <p className={classes.control}>
        <textarea
          autoComplete="off"
          name="message"
          placeholder="Message*"
          rows="5"
          required
        ></textarea>
      </p>
      <p className={classes.actions}>
        <button className={classes.button} type="submit">
          SUBMIT
        </button>
      </p>
    </form>
  );
}
