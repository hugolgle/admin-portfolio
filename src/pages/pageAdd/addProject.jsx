import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProject,
  getAllProjects,
} from "../../redux/actions/projects.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function AddProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedMission, setSelectedMission] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedContext, setSelectedContext] = useState("");
  const [links, setLinks] = useState([{ url: "", text: "" }]); // Met à jour l'état des liens
  const [skills, setSkills] = useState([""]);
  const [technologies, setTechnologies] = useState([""]);
  const [image, setImage] = useState(""); // Ajouter un état pour l'image

  const handleTitle = (event) => setSelectedTitle(event.target.value);
  const handleMission = (event) => setSelectedMission(event.target.value);
  const handleDate = (event) => setSelectedDate(event.target.value);
  const handleContext = (event) => setSelectedContext(event.target.value);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Crée l'URL blob
      setImage(imageUrl);
    }
  };

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

  // Gestion des skills
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title: selectedTitle,
      date: selectedDate,
      context: selectedContext,
      link: links, // Met à jour pour inclure l'URL et le texte
      mission: selectedMission,
      skills: skills,
      technology: technologies,
      img: image, // URL blob de l'image
    };

    try {
      await dispatch(addProject(postData));
      dispatch(getAllProjects());
      navigate("/projects");
    } catch (err) {
      console.log("Une erreur s'est produite lors de l'ajout du projet", err);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-thin">Ajouter un projet</h1>
      <BtnReturn />
      <form
        onSubmit={handleSubmit}
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

        {/* Gestion des skills */}
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
            <label htmlFor={`tech-${index}`} className="w-1/6">
              Technologie {index + 1} :
            </label>
            <input
              className="w-4/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
              value={tech}
              type="text"
              id={`tech-${index}`}
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

        {/* Gestion de l'image */}
        <div className="flex w-full items-center">
          <label htmlFor="image" className="w-1/6">
            Image :
          </label>
          <input
            className="w-5/6"
            type="file"
            id="image"
            accept="image/*" // Accepter uniquement les fichiers image
            onChange={handleImageChange}
          />
        </div>

        {/* Affichage de l'image sélectionnée */}
        {image && (
          <div className="flex w-full items-center">
            <img src={image} alt="Prévisualisation" className="w-1/2 mt-4" />
          </div>
        )}

        <button className="rounded-xl w-1/4 hover:border-blue-500">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default AddProject;
