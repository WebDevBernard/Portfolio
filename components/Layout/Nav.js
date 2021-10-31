import classes from "./Nav.module.css";
export default function Nav() {
  return (
    <header className={classes.header}>
      <br />
      <nav>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#form">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
