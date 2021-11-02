import classes from "./ProjectItem.module.css";
import { FaGlobe } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

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
              <FaGlobe />
              Demo
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
              <GoMarkGithub />
              Github
            </div>
          </a>
        )}
      </div>
      <p>{description}</p>
      <div className={classes.project_tag}>
        {tags.map((tag) => {
          return <label className={classes.tag}>{tag}</label>;
        })}
      </div>
    </div>
  );
}
