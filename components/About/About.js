import classes from "./About.module.css";
export default function About() {
  return (
    <>
      <h1>Hi! I'm Bernard Yang, a web developer in Vancouver</h1>
      <div className={classes.actions}>
        <button>contact me</button>
      </div>
    </>
  );
}
