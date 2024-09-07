import { useParams } from "react-router-dom";
import { getXpProById } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteXpPro,
  editXpPro,
  getXpPro,
} from "../../redux/actions/xpPro.action";
import { useNavigate } from "react-router-dom";
import BtnReturn from "../../components/button/btnReturn";

function XpPro() {
  const { id } = useParams();

  const leXpPro = getXpProById(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedContrat, setSelectedContrat] = useState(leXpPro.contrat);
  const [selectedDomaine, setSelectedDomaine] = useState(leXpPro.domaine);
  const [selectedAnnee, setSelectedAnnee] = useState(leXpPro.annee);
  const [selectedTitre, setSelectedTitre] = useState(leXpPro.titre);
  const [selectedMission, setSelectedMission] = useState(leXpPro.mission);

  const handleContrat = (event) => {
    setSelectedContrat(event.target.value);
  };

  const handleDomaine = (event) => {
    setSelectedDomaine(event.target.value);
  };

  const handleAnnee = (event) => {
    setSelectedAnnee(event.target.value);
  };

  const handleTitre = (event) => {
    setSelectedTitre(event.target.value);
  };

  const handleMission = (event) => {
    setSelectedMission(event.target.value);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      id: leXpPro.id,
      contrat: selectedContrat,
      domaine: selectedDomaine,
      annee: selectedAnnee,
      titre: selectedTitre,
      mission: selectedMission,
    };

    try {
      await dispatch(editXpPro(postData));
      dispatch(getXpPro());
    } catch (err) {
      console.log("Une erreur s'est produite lors de l'ajout du projet", err);
    }
  };

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    await dispatch(deleteXpPro(id));
    dispatch(getXpPro());
    navigate("/xppro");
  };

  return (
    <>
      <h2>Le xpPro {leXpPro.id}</h2>
      <BtnReturn />
      <form
        onSubmit={handleEditSubmit}
        className="flex flex-col justify-center items-center gap-5 px-36 py-10"
      >
        <div className="flex w-full items-center">
          <label htmlFor="contrat" className="w-1/6">
            Contrat :{" "}
          </label>
          <input
            className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedContrat}
            type="text"
            name=""
            id="contrat"
            placeholder="Contrat"
            onChange={(e) => {
              handleContrat(e);
            }}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="domaine" className="w-1/6">
            Domaine :{" "}
          </label>
          <input
            className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedDomaine}
            type="text"
            name=""
            id="domaine"
            placeholder="Domaine"
            onChange={(e) => {
              handleDomaine(e);
            }}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="annee" className="w-1/6">
            Année :{" "}
          </label>
          <input
            className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedAnnee}
            type="text"
            name=""
            id="annee"
            placeholder="Annee"
            onChange={(e) => {
              handleAnnee(e);
            }}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="titre" className="w-1/6">
            Titre :{" "}
          </label>
          <input
            className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
            value={selectedTitre}
            type="text"
            name=""
            id="titre"
            placeholder="Titre"
            onChange={(e) => {
              handleTitre(e);
            }}
            required
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="mission" className="w-1/6">
            Mission :{" "}
          </label>
          <input
            className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300"
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

export default XpPro; // Assurez-vous d'exporter le composant correctement
