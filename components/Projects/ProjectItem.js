import classes from "./ProjectItem.module.css";
export default function Projects({
  title,
  link,
  github,
  description,
  image,
  tags,
}) {
  return (
    <div className={classes.project_info}>
      <img src={image} alt={title} className={classes.project_photo} />
      <label className={classes.project_title}>{title}</label>
      <div className={classes.project_link}>
        {link && (
          <a
            className={classes.project_link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.link_button}>
              <i className="devicon-react-original"></i>Demo
            </div>
          </a>
        )}
        {github && (
          <a
            className={classes.project_link}
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.link_button}>
              {" "}
              <i className="devicon-github-original"></i>
              Github
            </div>
          </a>
        )}
      </div>
      <p>{description}</p>
      <div className={classes.project_tag}>
        {tags.map((tag) => {
          return (
            <label key={Math.random()} className={classes.tag}>
              {tag}
            </label>
          );
        })}
      </div>
    </div>
  );
}
