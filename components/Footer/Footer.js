import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul id="contact">
        <a
          href="https://www.canva.com/design/DAEkU6w_4cQ/8HufPu__iW0icX1ofHSiUg/view?utm_content=DAEkU6w_4cQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
          rel="noreferrer"
        >
          <li className={classes.colour}>Resume</li>
        </a>
        <a
          href="https://www.linkedin.com/in/bernard-yang/"
          target="_blank"
          rel="noreferrer"
        >
          <li>Linkedin</li>
        </a>
        <a
          href="https://www.github.com/webdevbernard"
          target="_blank"
          rel="noreferrer"
        >
          <li>Github</li>
        </a>
        <a
          href="https://www.twitter.com/WebDevBernard"
          target="_blank"
          rel="noreferrer"
        >
          <li>Twitter</li>
        </a>
        {/* <a href="mailto:ybernard@gmail.com" blanktarget="_blank">
          <li>EMAIL</li>
        </a> */}
      </ul>
    </footer>
  );
}
