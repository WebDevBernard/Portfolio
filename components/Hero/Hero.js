import classes from "./Hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={classes.about}>
        <div className={classes.about_top}>
          <div className={classes.about_info}>
            Hello there 👋, I am
            <br />
            <span className={classes.info_name}>Bernard Yang </span>
            <br /> a web developer in Vancouver
          </div>
          <div className={classes.about_photo}>
            <img
              className={classes.picture}
              src={
                "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/Typing-bro.png"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
