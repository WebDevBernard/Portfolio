import Link from "next/link";
import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <Link href="www.google.com">
          <li>LinkedIn</li>
        </Link>
        <li>Resume</li>
        <li>Github</li>
        <li>Twitter</li>
      </ul>
    </footer>
  );
}
