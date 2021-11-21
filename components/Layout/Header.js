import { useRef } from "react";
import Link from "next/link";
import classes from "./Header.module.css";
export default function Header({ scrollAbout, scrollContact, scrollProjects }) {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link href="https://www.bernardyang.com/">Bernard Yang</Link>
      </div>

      <nav className={classes.web}>
        <div className={classes.web_option}>
          <a onClick={scrollAbout}>About</a>
        </div>
        <div className={classes.web_option}>
          <a onClick={scrollProjects}>Projects</a>
        </div>
        <div className={classes.web_option}>
          <a onClick={scrollContact}>Contact</a>
        </div>
      </nav>
    </div>
  );
}
