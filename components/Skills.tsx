import { skillsData } from "../data/skills-data";

const Skills = () => {
  return (
    <div className="flex justify-start md:justify-center items-center border-t border-b border-slate-400">
      <div className="flex no-scrollbar overflow-x-scroll text-xl font-bold text-indigo-900 py-8 ">
        {skillsData.map((skill: { id: string; icon: string; name: string }) => {
          return (
            <div
              key={skill.id}
              className="list-none px-3 flex justify-center items-center"
            >
              <i className={`mr-2 ${skill.icon}`} title="dev icon" />
              <label>{skill.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
