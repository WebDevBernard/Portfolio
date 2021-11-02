import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={classes.title}>
        <Skills />
        <p>
          <h2>About me</h2> I love making apps that are intuitive to use. I'm
          very interested in learning more about UI/UX, and DeFi. I'm currently
          learning React Redux and Solidity.
        </p>
      </div>
    </div>
  );
}
