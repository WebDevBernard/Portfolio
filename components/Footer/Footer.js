import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <a
          href="https://www.canva.com/design/DAEkU6w_4cQ/8HufPu__iW0icX1ofHSiUg/view?utm_content=DAEkU6w_4cQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
        >
          <li className={classes.colour}>VIEW MY RESUME</li>
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
        {/* <a href="mailto:ybernard@gmail.com" blanktarget="_blank">
          <li>EMAIL</li>
        </a> */}
      </ul>
    </footer>
  );
}
