import classes from "./Form.module.css";

export default function Form() {
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
        <input id="form" placeholder="Name*" name="name" required />
      </p>
      <p className={classes.control}>
        <input type="email" name="email" placeholder="Email*" required />
      </p>
      <p className={classes.control}>
        <textarea
          name="message"
          placeholder="Message*"
          rows="5"
          required
        ></textarea>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p className={classes.actions}>
        <button type="submit">SUBMIT</button>
      </p>
    </form>
  );
}
