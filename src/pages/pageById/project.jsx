import { useParams } from "react-router-dom";
import { useProjectById } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  deleteProject,
  editProject,
  getAllProjects,
} from "../../redux/actions/projects.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function Project() {
  const { id } = useParams();
  const leProject = useProjectById(id); // Fonction utilitaire pour charger les données d'un projet

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedContext, setSelectedContext] = useState("");
  const [selectedMission, setSelectedMission] = useState("");
  const [links, setLinks] = useState([]);
  const [skills, setSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  // Charger les données du projet dans le state à l'initialisation
  useEffect(() => {
    if (leProject) {
      setSelectedTitle(leProject.title);
      setSelectedDate(leProject.date);
      setSelectedContext(leProject.context);
      setSelectedMission(leProject.mission);
      setLinks(leProject.link || []);
      setSkills(leProject.skills || []);
      setTechnologies(leProject.technology || []);
    }
  }, [leProject]);

  const handleTitle = (event) => setSelectedTitle(event.target.value);
  const handleDate = (event) => setSelectedDate(event.target.value);
  const handleContext = (event) => setSelectedContext(event.target.value);
  const handleMission = (event) => setSelectedMission(event.target.value);

  // Gestion des liens
  const handleLinkChange = (index, event) => {
    const { name, value } = event.target;
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [name]: value };
    setLinks(newLinks);
  };

  const handleAddLink = () => setLinks([...links, { url: "", text: "" }]);
  const handleRemoveLink = (index) =>
    setLinks(links.filter((_, i) => i !== index));

  // Gestion des compétences
  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => setSkills([...skills, ""]);
  const handleRemoveSkill = (index) =>
    setSkills(skills.filter((_, i) => i !== index));

  // Gestion des technologies
  const handleTechnologyChange = (index, event) => {
    const newTechnologies = [...technologies];
    newTechnologies[index] = event.target.value;
    setTechnologies(newTechnologies);
  };

  const handleAddTechnology = () => setTechnologies([...technologies, ""]);
  const handleRemoveTechnology = (index) =>
    setTechnologies(technologies.filter((_, i) => i !== index));

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      id: leProject._id,
      title: selectedTitle,
      date: selectedDate,
      context: selectedContext,
      mission: selectedMission,
      link: links, // Mise à jour pour inclure l'URL et le texte
      skills: skills,
      technology: technologies,
    };

    try {
      await dispatch(editProject(postData));
      dispatch(getAllProjects());
      navigate("/projects");
    } catch (err) {
      console.log(
        "Une erreur s'est produite lors de la modification du projet",
        err
      );
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
      <h2>Modifier le projet {leProject.id}</h2>
      <BtnReturn />
      <form
        onSubmit={handleEditSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10 w-1/2"
      >
        <div className="flex w-full items-center">
          <label htmlFor="title" className="w-1/6">
            Titre :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedTitle}
            type="text"
            id="title"
            placeholder="Titre"
            onChange={handleTitle}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="date" className="w-1/6">
            Date :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedDate}
            type="text"
            id="date"
            placeholder="Date"
            onChange={handleDate}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="context" className="w-1/6">
            Contexte :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedContext}
            type="text"
            id="context"
            placeholder="Contexte"
            onChange={handleContext}
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
            id="mission"
            placeholder="Mission"
            onChange={handleMission}
            required
          />
        </div>

        {/* Gestion des liens */}
        {links.map((link, index) => (
          <div key={index} className="flex w-full items-center">
            <label htmlFor={`link-url-${index}`} className="w-1/6">
              Lien {index + 1} URL :
            </label>
            <input
              className="w-2/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
              name="url"
              value={link.url}
              type="url"
              id={`link-url-${index}`}
              placeholder={`URL ${index + 1}`}
              onChange={(e) => handleLinkChange(index, e)}
            />
            <label htmlFor={`link-text-${index}`} className="w-1/6">
              Texte :
            </label>
            <input
              className="w-2/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
              name="text"
              value={link.text}
              type="text"
              id={`link-text-${index}`}
              placeholder={`Texte ${index + 1}`}
              onChange={(e) => handleLinkChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveLink(index)}>
              Retirer
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddLink}>
          Ajouter un lien
        </button>

        {/* Gestion des compétences */}
        {skills.map((skill, index) => (
          <div key={index} className="flex w-full items-center">
            <label htmlFor={`skill-${index}`} className="w-1/6">
              Compétence {index + 1} :
            </label>
            <input
              className="w-4/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
              value={skill}
              type="text"
              id={`skill-${index}`}
              placeholder={`Compétence ${index + 1}`}
              onChange={(e) => handleSkillChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveSkill(index)}>
              Retirer
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddSkill}>
          Ajouter une compétence
        </button>

        {/* Gestion des technologies */}
        {technologies.map((tech, index) => (
          <div key={index} className="flex w-full items-center">
            <label htmlFor={`technology-${index}`} className="w-1/6">
              Technologie {index + 1} :
            </label>
            <input
              className="w-4/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
              value={tech}
              type="text"
              id={`technology-${index}`}
              placeholder={`Technologie ${index + 1}`}
              onChange={(e) => handleTechnologyChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveTechnology(index)}>
              Retirer
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddTechnology}>
          Ajouter une technologie
        </button>

        <div className="flex gap-10">
          <button type="submit" className="btn btn-primary">
            Modifier
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteSubmit}
          >
            Supprimer
          </button>
        </div>
      </form>
    </>
  );
}

export default Project;
