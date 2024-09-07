import { useProjects } from "../utils/utils";
import { Link } from "react-router-dom";
import BtnAdd from "../components/button/btnAdd";

function Projects() {
  const projects = useProjects();
  return (
    <>
      <h1>Réalisations</h1>
      <BtnAdd />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <>
            <Link
              to={`${project.id}`}
              className="flex flex-row items-center bg-zinc-300 overflow-hidden rounded hover:scale-95 transition-all"
            >
              <p className="flex items-center px-5 bg-zinc-400 h-full">
                {project.id}
              </p>
              <div className="p-4 w-full">
                <p>{project.ecole}</p>
                <p>{project.title}</p>
                <p>{project.mission}</p>
                <p>{project.link}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

export default Projects;
