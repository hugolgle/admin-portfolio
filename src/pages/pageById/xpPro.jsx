import { useParams } from "react-router-dom";
import { useXpProById } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  deleteXpPro,
  editXpPro,
  getXpPro,
} from "../../redux/actions/xpPro.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function XpPro() {
  const { id } = useParams();
  const leXpPro = useXpProById(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("");
  const [selectedDomaine, setSelectedDomaine] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedMission, setSelectedMission] = useState("");
  const [selectedContext, setSelectedContext] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLink, setSelectedLink] = useState([]);
  const [selectedImg, setSelectedImg] = useState([]);

  useEffect(() => {
    if (leXpPro) {
      setSelectedType(leXpPro.type || "");
      setSelectedDomaine(leXpPro.domaine || "");
      setSelectedTitle(leXpPro.title || "");
      setSelectedMission(leXpPro.mission || "");
      setSelectedContext(leXpPro.context || "");
      setSelectedText(leXpPro.text || "");
      setSelectedSkills(leXpPro.skills || []);
      setSelectedLink(leXpPro.link || []);
      setSelectedImg(leXpPro.img || []);
    }
  }, [leXpPro]);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const handleSkillChange = (index, event) => {
    const newSkills = [...selectedSkills];
    newSkills[index] = event.target.value;
    setSelectedSkills(newSkills);
  };

  const handleAddSkill = () => setSelectedSkills([...selectedSkills, ""]);
  const handleRemoveSkill = (index) =>
    setSelectedSkills(selectedSkills.filter((_, i) => i !== index));

  const handleLinkChange = (index, field, event) => {
    const newLinks = [...selectedLink];
    newLinks[index][field] = event.target.value;
    setSelectedLink(newLinks);
  };

  const handleAddLink = () =>
    setSelectedLink([...selectedLink, { url: "", text: "" }]);
  const handleRemoveLink = (index) =>
    setSelectedLink(selectedLink.filter((_, i) => i !== index));

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImg(files);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      id: leXpPro._id,
      type: selectedType,
      domaine: selectedDomaine,
      title: selectedTitle,
      mission: selectedMission,
      context: selectedContext,
      text: selectedText,
      skills: selectedSkills,
      link: selectedLink, // Updated to handle both URL and text
      img: selectedImg,
    };

    try {
      await dispatch(editXpPro(postData));
      dispatch(getXpPro());
      navigate("/xppro");
    } catch (err) {
      console.error(
        "Erreur lors de la modification de l'expérience professionnelle",
        err
      );
    }
  };

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(deleteXpPro(id));
      dispatch(getXpPro());
      navigate("/xppro");
    } catch (err) {
      console.error(
        "Erreur lors de la suppression de l'expérience professionnelle",
        err
      );
    }
  };

  return (
    <>
      <h2>Modifier l&apos;expérience professionnelle {leXpPro._id}</h2>
      <BtnReturn />
      <form
        onSubmit={handleEditSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10 w-1/2"
      >
        {/* Input fields */}
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
            onChange={handleChange(setSelectedType)}
            required
          />
        </div>

        {/* ... other input fields ... */}

        {/* Skills */}
        <div className="flex w-full flex-col">
          <h3>Compétences</h3>
          {selectedSkills.map((skill, index) => (
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
              <button
                type="button"
                onClick={() => handleRemoveSkill(index)}
                className="ml-2 text-red-500"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSkill}
            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
          >
            Ajouter une compétence
          </button>
        </div>

        {/* Links */}
        <div className="flex w-full flex-col">
          <h3>Liens</h3>
          {selectedLink.map((link, index) => (
            <div key={index} className="flex w-full flex-col mb-2">
              <div className="flex w-full items-center mb-2">
                <label htmlFor={`url-${index}`} className="w-1/6">
                  URL {index + 1} :
                </label>
                <input
                  className="w-4/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
                  value={link.url}
                  type="url"
                  id={`url-${index}`}
                  placeholder={`URL ${index + 1}`}
                  onChange={(e) => handleLinkChange(index, "url", e)}
                />
              </div>
              <div className="flex w-full items-center mb-2">
                <label htmlFor={`text-${index}`} className="w-1/6">
                  Texte {index + 1} :
                </label>
                <input
                  className="w-4/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
                  value={link.text}
                  type="text"
                  id={`text-${index}`}
                  placeholder={`Texte ${index + 1}`}
                  onChange={(e) => handleLinkChange(index, "text", e)}
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveLink(index)}
                className="text-red-500"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddLink}
            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
          >
            Ajouter un lien
          </button>
        </div>

        {/* Images */}
        <div className="flex w-full flex-col">
          <h3>Images</h3>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div className="mt-2">
            {selectedImg.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`image-${index}`}
                className="w-32 h-32 object-cover mt-2"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 rounded-xl w-1/4 bg-blue-500 text-white hover:bg-blue-700"
        >
          Enregistrer les modifications
        </button>
      </form>
      <button
        className="mt-4 rounded-xl w-1/4 bg-red-500 text-white hover:bg-red-700"
        onClick={handleDeleteSubmit}
      >
        Supprimer
      </button>
    </>
  );
}

export default XpPro;
