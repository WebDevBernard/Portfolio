import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>LinkedIn</li>
        <li>Resume</li>
        <li>Github</li>
        <li>Twitter</li>
      </ul>
    </footer>
  );
}
