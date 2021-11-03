import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={classes.title}>
        <Skills />
        <span>
          <h2>About me</h2> Having recently completed the Lighthouse Labs Web
          Development Program, I am excited to take on the next big challenge. I
          am currently learning about full stack development with React and
          NodeJS. Eventually, I would like to start working on some DeFi
          projects. In my free time, I enjoy running outdoors, and watching
          movies at home.
        </span>
      </div>
    </div>
  );
}
