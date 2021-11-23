import classes from "./Hero.module.css";
export default function Hero({ scrollContact }) {
  return (
    <>
      <div className={classes.about}>
        <div className={classes.about_top}>
          <div className={classes.about_info}>
            Hello! I am
            <br />
            <span className={classes.info_name}>Bernard</span>
            <br /> a{" "}
            <span className={classes.job_title}>front end developer</span> in
            Vancouver
            <div className={classes.hero_buttons}>
              <button onClick={scrollContact}>CONTACT ME</button>

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
                "https://raw.githubusercontent.com/WebDevBernard/Portfolio/d1228b41f206f9c0e7adaa7052cb248cf0138c38/docs/programming-animate.svg"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
