import classes from "./About.module.css";
export default function About() {
  return (
    <>
      <h1 id="about" className={classes.about}>
        <em> Hi!</em> <br />
        I'm Bernard Yang,
        <br /> a web developer in Vancouver
      </h1>
      <a href="#form">
        <button>contact me</button>
      </a>
    </>
  );
}
