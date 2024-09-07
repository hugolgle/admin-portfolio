import { useParams } from "react-router-dom";
import { useCareersById } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteCareers,
  editCareers,
  // getCareer,
  getCareers,
} from "../../redux/actions/careers.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function Career() {
  const { id } = useParams();
  const leCareers = useCareersById(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(leCareers?.date);
  const [selectedDescription, setSelectedDescription] = useState(
    leCareers?.description
  );

  const handleDate = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDescription = (event) => {
    setSelectedDescription(event.target.value);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      id: leCareers?._id,
      date: selectedDate,
      description: selectedDescription,
    };

    try {
      await dispatch(editCareers(postData));
      dispatch(getCareers());
    } catch (err) {
      console.log("Une erreur s'est produite lors de l'ajout du careers", err);
    }
  };

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    await dispatch(deleteCareers(id));
    dispatch(getCareers());
    navigate("/careers");
  };

  // Ajouter un rendu conditionnel si `leCareers` n'est pas encore chargé
  if (!leCareers) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <h2>Le careers {leCareers._id}</h2>
      <BtnReturn />
      <form
        onSubmit={handleEditSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10 w-1/2"
      >
        <div className="flex w-full items-center">
          <label htmlFor="date" className="w-1/6">
            Date :{" "}
          </label>
          <input
            className="w-5/6 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedDate}
            type="text"
            name=""
            id="date"
            placeholder="Date"
            onChange={(e) => handleDate(e)}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="description" className="w-1/6">
            Description :{" "}
          </label>
          <input
            className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedDescription}
            type="text"
            name=""
            id=""
            placeholder="Description"
            onChange={(e) => handleDescription(e)}
            required
          />
        </div>
        <button className="rounded-xl w-1/4 hover:border-blue-500">
          Modifier
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

export default Career;
