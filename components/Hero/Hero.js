import classes from "./Hero.module.css";
export default function Hero({ scrollContact }) {
  return (
    <>
      <div className={classes.about}>
        <div className={classes.about_top}>
          <div className={classes.about_info}>
            <span className={classes.info_name}> Hello!</span>
            <br /> I am Bernard, <br />a{" "}
            <span className={classes.job_title}>software developer</span> in
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
                "https://raw.githubusercontent.com/WebDevBernard/Portfolio/48b9f22660231fc9dfa6e2c7f20f00a91a0998af/docs/programming-animate.svg"
              }
              alt="programmer guy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
