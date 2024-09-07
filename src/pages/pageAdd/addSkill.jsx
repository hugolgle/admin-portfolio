import { useState } from "react";
import { useDispatch } from "react-redux";

import { addSkill, getSkills } from "../../redux/actions/skills.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function AddSkill() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedName, setSelectedName] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  const handleName = (event) => setSelectedName(event.target.value);
  const handleImg = (event) => setSelectedImg(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      name: selectedName,
      img: selectedImg,
    };

    try {
      await dispatch(addSkill(postData));
      dispatch(getSkills());
      navigate("/skills");
    } catch (err) {
      console.log(
        "Une erreur s'est produite lors de l'ajout de la compétence",
        err
      );
    }
  };

  return (
    <>
      <h1 className="text-5xl font-thin">Ajouter une compétence</h1>
      <BtnReturn />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10 w-1/2"
      >
        <div className="flex w-full items-center">
          <label htmlFor="type" className="w-1/6">
            Nom :
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedName}
            type="text"
            id="name"
            placeholder="Nom"
            onChange={handleName}
            required
          />
        </div>

        <div className="flex w-full items-center">
          <label htmlFor="domaine" className="w-1/6">
            Image :
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedImg}
            type="text"
            id="domaine"
            placeholder="Image"
            onChange={handleImg}
            required
          />
        </div>

        <button className="rounded-xl w-1/4 hover:border-blue-500">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default AddSkill;
