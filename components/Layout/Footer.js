import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <br />
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
      <br />
    </div>
  );
}
