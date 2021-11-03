import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={classes.title}>
        <Skills />
        <span>
          <h2>About me</h2>
          Having recently completed the Lighthouse Labs Web Development Program,
          I am excited to take on the next big challenge. Currently, I am
          learning more about full stack development by building apps with React
          and NodeJS. Eventually, I would like to start working on apps in the
          DeFi space. In my free time, I enjoy running outdoors, watching movies
          and playing videogames.
        </span>
      </div>
    </div>
  );
}
