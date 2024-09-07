import { useParams } from "react-router-dom";
import { useProjectById } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteProject,
  editProject,
  getAllProjects,
} from "../../redux/actions/projects.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function Project() {
  const { id } = useParams();

  const leProject = useProjectById(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedEcole, setSelectedEcole] = useState(leProject.ecole);

  const [selectedTitle, setSelectedTitle] = useState(leProject.title);

  const [selectedMission, setSelectedMission] = useState(leProject.mission);

  const [selectedLink, setSelectedLink] = useState(leProject.link);

  const handleEcole = (event) => {
    setSelectedEcole(event.target.value);
  };

  const handleTitle = (event) => {
    setSelectedTitle(event.target.value);
  };

  const handleMission = (event) => {
    setSelectedMission(event.target.value);
  };

  const handleLink = (event) => {
    setSelectedLink(event.target.value);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      id: leProject.id,
      ecole: selectedEcole,
      title: selectedTitle,
      mission: selectedMission,
      link: selectedLink,
    };

    try {
      await dispatch(editProject(postData));
      dispatch(getAllProjects());
    } catch (err) {
      console.log("Une erreur s'est produite lors de l'ajout du projet", err);
    }
  };

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    await dispatch(deleteProject(id));
    dispatch(getAllProjects());
    navigate("/projects");
  };

  return (
    <>
      <h2>Le projet {leProject.id}</h2>
      <BtnReturn />
      <form
        onSubmit={handleEditSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10 w-1/2"
      >
        <div className="flex w-full items-center">
          <label htmlFor="ecole" className="w-1/6">
            École :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedEcole}
            type="text"
            name=""
            id="ecole"
            placeholder="Ecole"
            onChange={(e) => {
              handleEcole(e);
            }}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="title" className="w-1/6">
            Titre :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedTitle}
            type="text"
            name=""
            id="title"
            placeholder="Titre"
            onChange={(e) => {
              handleTitle(e);
            }}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="mission" className="w-1/6">
            Mission :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedMission}
            type="text"
            name=""
            id="mission"
            placeholder="Mission"
            onChange={(e) => {
              handleMission(e);
            }}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="link" className="w-1/6">
            Lien :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedLink}
            type="url"
            name=""
            id="link"
            placeholder="Lien"
            onChange={(e) => {
              handleLink(e);
            }}
            required
          />
        </div>
        <button className="rounded-xl w-1/4 hover:border-blue-500">
          Envoyer
        </button>
      </form>
      <button
        className="rounded-xl w-1/4 hover:border-red-500"
        onClick={handleDeleteSubmit}
      >
        Supprimer
      </button>
    </>
  );
}

export default Project;
