import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <a
        className={classes.slideup}
        href="https://icons8.com/icon/9d0casenOiHS/up"
        target="_blank"
        rel="noreferrer"
      >
        Up Arrow icon by Icons8
      </a>
      <div>
        <a
          href="https://www.linkedin.com/in/bernard-yang/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://www.github.com/webdevbernard"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.twitter.com/WebDevBernard"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
