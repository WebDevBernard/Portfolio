import Link from "next/link";
import classes from "./Nav.module.css";
export default function Nav() {
  return (
    <header className={classes.header}>
      <br />
      <nav>
        <ul>
          <a
            href="https://www.canva.com/design/DAEkU6w_4cQ/8HufPu__iW0icX1ofHSiUg/view?utm_content=DAEkU6w_4cQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
          >
            <li>VIEW MY RESUME</li>
          </a>
          {/* <li>About</li>
          <li>Projects</li>
          <li>Contact</li> */}
        </ul>
      </nav>
    </header>
  );
}
