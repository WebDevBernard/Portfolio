import classes from "./Hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={classes.about}>
        <div className={classes.about_top}>
          <div className={classes.about_info}>
            Hi there 👋, I am
            <br />
            <span className={classes.info_name}>Bernard Yang </span>
            <br /> a web developer in Vancouver
            <div className={classes.hero_buttons}>
              <a href="#form">
                <button>CONTACT ME</button>
              </a>
              <a
                href="/resume.pdf"
                // target="_blank" rel="noreferrer"
              >
                <button className={classes.resume_button}>VIEW RESUME</button>
              </a>
            </div>
          </div>

          <div className={classes.about_photo}>
            <img
              className={classes.picture}
              src={
                "https://raw.githubusercontent.com/WebDevBernard/Portfolio/71091abbc5a90a59bcc196e253f41022ed6b21c2/docs/programming-animate.svg"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
