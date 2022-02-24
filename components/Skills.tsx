import { skillsData } from "../data/skills-data";

const Skills = () => {
  return (
    <div className="relative overflow-hidden flex justify-center items-center border-t border-b border-slate-600 py-8">
      <div className="no-scrollbar flex overflow-x-auto text-xl font-bold text-indigo-900">
        {skillsData.map((skill: any) => {
          return (
            <li
              className="list-none px-3 flex justify-center items-center"
              key={skill.id}
            >
              <i className={`mr-2 ${skill.icon}`} title="dev icon" />
              <label>{skill.name}</label>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
