import { skillsData } from "../data/skills-data";
import { motion } from "framer-motion";
import { skillsUpAnimation } from "../styles/variants";
import useScroll from "../hooks/useScroll";

const Skills = () => {
  const [ref, controls] = useScroll();
  return (
    <div className="flex justify-start md:justify-center items-center border-t border-b border-slate-400">
      <div className="flex no-scrollbar overflow-x-scroll text-xl font-bold text-indigo-900 py-8 ">
        {skillsData.map((skill: { id: string; icon: string; name: string }) => {
          return (
            <motion.div
              ref={ref}
              animate={controls}
              variants={skillsUpAnimation}
              key={skill.id}
              className="list-none px-3 flex justify-center items-center"
            >
              <i className={`mr-2 ${skill.icon}`} title="dev icon" />
              <label>{skill.name}</label>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
