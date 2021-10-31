import classes from "./ProjectItem.module.css";
export default function ProjectItem({
  image,
  title,
  description,
  github,
  link,
}) {
  return (
    <li className={classes.card}>
      <div className={classes.container}>
        <img src={image} alt={title} />
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <button>view live</button>
          </a>
        )}
      </div>
      <div className={classes.content}>
        <h3>
          <em>{title}:</em>
          <br /> {description}
        </h3>
      </div>
      <a href={github} target="_blank" rel="noreferrer">
        VIEW GITHUB REPO
      </a>
    </li>
  );
}
