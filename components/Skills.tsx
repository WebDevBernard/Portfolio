import { skillsData } from "../data/skills-data";

const Skills = () => {
  return (
    <div className="flex flex-col items-start md:items-center space-y-8 border-y-[1px] py-6 border-black">
      <h2 className="text-lg font-serif font-bold">My Toolkit:</h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        {skillsData.map((skill) => {
          return (
            <li
              key={skill.id}
              className="list-none font-bold items-center text-md font-serif"
            >
              <i className={`mr-2 ${skill.icon}`} title="dev icon" />
              <span>{skill.name}</span>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
