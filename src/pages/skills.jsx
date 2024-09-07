import { useSkills } from "../utils/utils";
import { Link } from "react-router-dom";
import BtnAdd from "../components/button/btnAdd";

function Skills() {
  const skills = useSkills();

  return (
    <>
      <h1>Compétences</h1>
      <BtnAdd />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {skills.map((skill) => (
          <>
            <Link
              to={skill._id}
              className="flex flex-row items-center bg-zinc-300 overflow-hidden rounded hover:scale-95 transition-all"
            >
              <p className="flex items-center px-5 bg-zinc-400 h-full">
                {skill._id}
              </p>
              <div className="p-4 w-full">
                <p>{skill.name}</p>
                <p>{skill.img}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

export default Skills;
