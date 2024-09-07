import { getCareers } from "../utils/utils";
import { Link } from "react-router-dom";
import BtnAdd from "../components/button/btnAdd";

function Careers() {
  const careers = getCareers();

  return (
    <>
      <h1>Careers</h1>
      <BtnAdd />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {careers.map((careers) => (
          <>
            <Link
              to={`${careers.id}`}
              className="flex flex-row items-center bg-zinc-300 overflow-hidden rounded hover:scale-95 transition-all"
            >
              <p className="flex items-center px-5 bg-zinc-400 h-full">
                {careers.id}
              </p>
              <div className="p-4 w-full">
                <p className="italic text-sm mb-4">{careers.date}</p>
                <p>{careers.description}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

export default Careers;
