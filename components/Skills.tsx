import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { skillsData } from "../data/skills-data";

const Skills = () => {
  const items = skillsData.map(
    (skill: { id: string; icon: string; name: string }) => {
      return (
        <div
          key={skill.id}
          className="list-none flex justify-center items-center text-xl p-x-3 py-8 font-bold text-indigo-900"
        >
          <i className={`mr-2 ${skill.icon}`} title="dev icon" />
          <span>{skill.name}</span>
        </div>
      );
    }
  );

  return (
    <div className="justify-start md:justify-center items-center border-t border-b border-slate-400 opacity-80">
      <AliceCarousel
        ssrSilentMode
        mouseTracking
        infinite
        autoPlay
        animationDuration={4000}
        disableButtonsControls
        disableDotsControls
        responsive={{ 0: { items: 2 }, 768: { items: 5 } }}
        items={items}
      />
    </div>
  );
};

export default Skills;
