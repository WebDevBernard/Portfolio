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
                <button>Contact me</button>
              </a>
              <a
                href="https://www.canva.com/design/DAEkU6w_4cQ/8HufPu__iW0icX1ofHSiUg/view?utm_content=DAEkU6w_4cQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                target="_blank"
                rel="noreferrer"
              >
                <button className={classes.resume_button}>
                  View my Resume
                </button>
              </a>
            </div>
          </div>

          <div className={classes.about_photo}>
            <img
              className={classes.picture}
              src={
                "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/Code%20typing-amico.png"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
