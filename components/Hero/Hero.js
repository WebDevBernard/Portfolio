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
              <a href="#contact">
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
                "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/programming-animate(1).svg"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
