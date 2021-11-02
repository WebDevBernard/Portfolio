import classes from "./Header.module.css";
export default function Header() {
  return (
    <header className={classes.header}>
      <br />
      <nav>
        <ul>
          <a href="#about">
            <li>Bernard Yang</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#form">
            <li>Twitter</li>
          </a>
          <a href="#form">
            <li>Linkedin</li>
          </a>
          <a href="#form">
            <li>Github</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
