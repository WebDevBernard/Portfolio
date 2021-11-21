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
            I am a front end developer who recently completed the Lighthouse
            Labs Web Development Program. What I enjoy the most about coding is
            making my personal projects and learning how to automate things with
            code. I am eager to learn any languages and skills that will help me
            become a better programmer. When I am not coding, I enjoying
            watching movies and playing videogames. If you would like to chat,
            leave a message below and I will respond shortly.
          </p>
        </div>
      </span>
    </div>
  );
}
