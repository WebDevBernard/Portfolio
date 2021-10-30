import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <a href="mailto:ybernard@gmail.com" blanktarget="_blank">
          <li>EMAIL</li>
        </a>
        <a href="https://www.linkedin.com/in/bernard-yang/" target="_blank">
          <li>LINKEDIN</li>
        </a>
        <a href="https://www.github.com/webdevbernard" target="_blank">
          <li>GITHUB</li>
        </a>
        <a href="https://www.twitter.com/WebDevBernard" target="_blank">
          <li>TWITTER</li>
        </a>
      </ul>
    </footer>
  );
}
