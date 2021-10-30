import classes from "./Form.module.css";
export default function Form() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <input placeholder="Name" />
      </div>
      <div className={classes.control}>
        <input placeholder="Email" />
      </div>
      <div className={classes.control}>
        <textarea placeholder="Message" rows="5"></textarea>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
