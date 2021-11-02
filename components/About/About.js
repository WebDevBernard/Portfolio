import classes from "./About.module.css";
import image from "../../docs/Typing-bro.png";
export default function About() {
  return (
    <>
      <h1 id="about" className={classes.about}>
        <em> Hello there, I am</em> <br />
        Bernard Yang,
        <br /> a web developer in Vancouver
      </h1>
      <a href="#form">
        <button>contact me</button>
      </a>
      <div>
        <img src={image} />
      </div>
    </>
  );
}
