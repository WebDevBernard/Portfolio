import classes from "./Header.module.css";
export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>BERNARD YANG</div>
      <nav className={classes.web}>
        <div className={classes.web_option}>
          <a href="#about">About</a>
        </div>
        <div className={classes.web_option}>
          <a href="#about">Projects</a>
        </div>
        <div className={classes.web_option}>
          <a href="#about">Contact</a>
        </div>
      </nav>
    </div>
  );
}
