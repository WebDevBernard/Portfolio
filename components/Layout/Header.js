import classes from "./Header.module.css";
export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <a href="https://www.bernardyang.com/" target="_blank" rel="noreferrer">
          BERNARD YANG
        </a>
      </div>
      <nav className={classes.web}>
        <div className={classes.web_option}>
          <a href="#about">About</a>
        </div>
        <div className={classes.web_option}>
          <a href="#projects">Projects</a>
        </div>
        <div className={classes.web_option}>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
}
