import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={classes.title}>
        <Skills />
        <span>
          <h2>About me</h2> I love making apps that are intuitive to use. Right
          now I am learning React front-end and smart contracts with Solidity.
          In my free time, I enjoy running, watching movies, and playing
          videogames.
        </span>
      </div>
    </div>
  );
}
