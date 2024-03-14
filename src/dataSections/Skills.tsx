import { skills } from "../assets/skillsList.json";

const Skills = () => {
  return (
    <div className="text-white self-start justify-center p-4">
      <div className="flex flex-col gap-4 justify-evenly w-3/4 border-2">
        <div className="flex flex-col gap-2 p-2">
          <p>Coding Skills</p>
          {skills["Coding Skills"]?.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#9fd7dd]"></span>
              <p>{item}</p>
            </li>
          ))}
        </div>
        <div className="flex flex-col gap-2 p-2">
          <p>Testing Skills</p>
          {skills["Testing Skills"]?.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#9fd7dd]"></span>
              <p>{item}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
