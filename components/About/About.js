import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className={classes.title}>
      <Skills />

      <span>
        <p className={classes.project_title}>About me</p>
        <div>
          <p className={classes.aboutcard}>
            I am a software developer focused on full-stack web development. I
            enjoy working on projects that are more front-end focused. As I grow
            as a developer, I would like to learn more about mobile development,
            fintech, and blockchain tech. When I am not coding, I enjoy watching
            movies or playing a bit of WoW.
          </p>
        </div>
      </span>
    </div>
  );
}
