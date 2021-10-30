import classes from "./About.module.css";
export default function About() {
  return (
    <>
      <h1 className={classes.about}>
        <em> Hi!</em> <br />
        I'm Bernard Yang,
        <br /> a web developer in Vancouver
      </h1>
      <button>contact me</button>
    </>
  );
}
