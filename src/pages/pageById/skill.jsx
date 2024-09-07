import { useParams } from "react-router-dom";
import { useSkillsById } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  deleteSkill,
  editSkill,
  getSkills,
} from "../../redux/actions/skills.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function Skill() {
  const { id } = useParams();
  const leSkill = useSkillsById(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedName, setSelectedName] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    if (leSkill) {
      setSelectedName(leSkill.name);
      setSelectedImg(leSkill.img);
    }
  }, [leSkill]);

  const handleName = (event) => setSelectedName(event.target.value);
  const handleImg = (event) => setSelectedImg(event.target.value);

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      id: leSkill._id,
      name: selectedName,
      img: selectedImg,
    };

    try {
      await dispatch(editSkill(postData));
      dispatch(getSkills());
      navigate("/skills");
    } catch (err) {
      console.log(
        "Une erreur s'est produite lors de la modification de la compétence",
        err
      );
    }
  };

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    await dispatch(deleteSkill(id));
    dispatch(getSkills());
    navigate("/skills");
  };

  return (
    <>
      <h2>Modifier la compétence {leSkill._id}</h2>
      <BtnReturn />
      <form
        onSubmit={handleEditSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10 w-1/2"
      >
        <div className="flex w-full items-center">
          <label htmlFor="title" className="w-1/6">
            Nom :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedName}
            type="text"
            id="title"
            placeholder="Titre"
            onChange={handleName}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="date" className="w-1/6">
            Image :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedImg}
            type="text"
            id="date"
            placeholder="Date"
            onChange={handleImg}
            required
          />
        </div>

        <button className="rounded-xl w-1/4 hover:border-blue-500">
          Enregistrer les modifications
        </button>
      </form>
      <button
        className="rounded-xl w-1/4 hover:border-red-500"
        onClick={handleDeleteSubmit}
      >
        Supprimer la compétence
      </button>
    </>
  );
}

export default Skill;
