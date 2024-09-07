import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCareers, getCareers } from "../../redux/actions/careers.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function AddCareers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");

  const [selectedDescription, setSelectedDescription] = useState("");

  const handleDate = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDescription = (event) => {
    setSelectedDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      description: selectedDescription,
      date: selectedDate,
    };

    try {
      await dispatch(addCareers(postData));
      dispatch(getCareers());
      navigate("/careers");
    } catch (err) {
      console.log("Une erreur s'est produite lors de l'ajout du careers", err);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-thin">Ajouter un careers</h1>
      <BtnReturn />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10"
      >
        <input
          className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
          value={selectedDate}
          type="text"
          name=""
          id=""
          placeholder="Date"
          onChange={(e) => {
            handleDate(e);
          }}
          required
        />
        <input
          className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
          value={selectedDescription}
          type="text"
          name=""
          id=""
          placeholder="Description"
          onChange={(e) => {
            handleDescription(e);
          }}
          required
        />
        <button className="rounded-xl w-1/4 hover:border-blue-500">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default AddCareers;
