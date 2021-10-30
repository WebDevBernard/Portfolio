import classes from "./Nav.module.css";
export default function Nav() {
  return (
    <header className={classes.header}>
      <br />
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
