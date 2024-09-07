import { useState } from "react";
import { useDispatch } from "react-redux";

import { addXpPro, getXpPro } from "../../redux/actions/xpPro.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function AddXpPro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("");
  const [selectedDomaine, setSelectedDomaine] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedMission, setSelectedMission] = useState("");
  const [selectedContext, setSelectedContext] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [skills, setSkills] = useState([""]);
  const [links, setLinks] = useState([{ url: "", text: "" }]);
  const [images, setImages] = useState([]);

  const handleType = (event) => setSelectedType(event.target.value);
  const handleDomaine = (event) => setSelectedDomaine(event.target.value);
  const handleTitle = (event) => setSelectedTitle(event.target.value);
  const handleMission = (event) => setSelectedMission(event.target.value);
  const handleContext = (event) => setSelectedContext(event.target.value);
  const handleText = (event) => setSelectedText(event.target.value);
  const handleDate = (event) => setSelectedDate(event.target.value);

  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => setSkills([...skills, ""]);
  const handleRemoveSkill = (index) =>
    setSkills(skills.filter((_, i) => i !== index));

  const handleLinkChange = (index, field, event) => {
    const newLinks = [...links];
    newLinks[index][field] = event.target.value;
    setLinks(newLinks);
  };

  const handleAddLink = () => setLinks([...links, { url: "", text: "" }]);
  const handleRemoveLink = (index) =>
    setLinks(links.filter((_, i) => i !== index));

  const handleImageChange = (event) => {
    setImages(Array.from(event.target.files));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      type: selectedType,
      domaine: selectedDomaine,
      title: selectedTitle,
      mission: selectedMission,
      context: selectedContext,
      text: selectedText,
      skills: skills,
      links: links, // Updated to include both URL and text
      date: selectedDate, // Assuming date is set to current date
      img: images.map((file) => URL.createObjectURL(file)), // Temporary URLs for preview
    };

    try {
      await dispatch(addXpPro(postData));
      dispatch(getXpPro());
      navigate("/xppro");
    } catch (err) {
      console.log("Une erreur s'est produite lors de l'ajout du projet", err);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-thin">Ajouter une expérience pro</h1>
      <BtnReturn />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10 w-1/2"
      >
        <div className="flex w-full items-center">
          <label htmlFor="type" className="w-1/6">
            Type :
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedType}
            type="text"
            id="type"
            placeholder="Type"
            onChange={handleType}
            required
          />
        </div>

        <div className="flex w-full items-center">
          <label htmlFor="domaine" className="w-1/6">
            Domaine :
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedDomaine}
            type="text"
            id="domaine"
            placeholder="Domaine"
            onChange={handleDomaine}
            required
          />
        </div>

        <div className="flex w-full items-center">
          <label htmlFor="title" className="w-1/6">
            Titre :
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
            Date :
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
            Mission :
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
            Contexte :
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
          <label htmlFor="text" className="w-1/6">
            Texte :
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedText}
            type="text"
            id="text"
            placeholder="Texte"
            onChange={handleText}
            required
          />
        </div>

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

        {/* Gestion des liens */}
        {links.map((link, index) => (
          <div key={index} className="flex w-full items-center">
            <label htmlFor={`url-${index}`} className="w-1/6">
              Lien {index + 1} :
            </label>
            <input
              className="w-4/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
              value={link.url}
              type="url"
              id={`url-${index}`}
              placeholder={`URL du lien ${index + 1}`}
              onChange={(e) => handleLinkChange(index, "url", e)}
            />
            <input
              className="w-4/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300 mt-2"
              value={link.text}
              type="text"
              id={`text-${index}`}
              placeholder={`Texte du lien ${index + 1}`}
              onChange={(e) => handleLinkChange(index, "text", e)}
            />
            <button type="button" onClick={() => handleRemoveLink(index)}>
              Retirer
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddLink}>
          Ajouter un lien
        </button>

        {/* Gestion des images */}
        <div className="flex w-full items-center">
          <label htmlFor="images" className="w-1/6">
            Images :
          </label>
          <input
            className="w-5/6"
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <button className="rounded-xl w-1/4 hover:border-blue-500">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default AddXpPro;
