import classes from "./Skills.module.css";
import { skills } from "../../data/skills-data";
export default function Skills() {
  return (
    <div className={classes.skills_container}>
      {skills.map((skill) => {
        return (
          <div key={skill.id} className={classes.skill_card}>
            <div className={classes.skill_icon}>{skill.icon}</div>
            <label className={classes.skill_name}>{skill.name}</label>
          </div>
        );
      })}
    </div>
  );
}
