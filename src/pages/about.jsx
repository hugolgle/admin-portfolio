import { useAbout } from "../utils/utils";
import { getAbout } from "../redux/actions/about.action";
import { updateAbout } from "../redux/actions/about.action";
import { useState } from "react";
import { useDispatch } from "react-redux";

function About() {
  const about = useAbout(); // Données actuelles de "about"

  // Initialisation des états pour chaque champ
  const [selectedAbout, setSelectedAbout] = useState(about[0].text);
  const [selectedCv, setSelectedCv] = useState(about[0].cv);
  const [selectedSituation, setSelectedSituation] = useState(
    about[0].situation
  );

  // Gestion des états pour le mode modification
  const [update, setUpdate] = useState(false);
  const [updateButton, setUpdateButton] = useState(false);

  const dispatch = useDispatch();

  // Handlers pour gérer les changements des champs
  const handleAbout = (event) => setSelectedAbout(event.target.value);
  const handleCv = (event) => setSelectedCv(event.target.files[0]); // Gestion des fichiers pour le CV
  const handleSituation = (event) => setSelectedSituation(event.target.value);

  // Gestion du passage en mode modification
  const handleUpdate = () => {
    setUpdate(!update);
    setUpdateButton(false);
  };

  // Active le bouton d'envoi lorsqu'il y a un changement dans les inputs
  const handleInputChange = () => setUpdateButton(true);

  // Fonction pour envoyer les modifications
  const handleEditAbout = async () => {
    // Création de l'objet contenant les données à envoyer
    const editData = {
      id: about[0]._id,
      text: selectedAbout,
      cv: selectedCv, // Assurez-vous que cv est une chaîne, pas un fichier
      situation: selectedSituation,
    };

    // Envoi des données au backend via dispatch
    await dispatch(updateAbout(editData)); // Envoie l'objet JSON
    dispatch(getAbout()); // Rafraîchit les données après l'update
    setUpdate(!update); // Quitte le mode modification
  };

  return (
    <>
      <h1>Présentation</h1>
      <section className="flex flex-col justify-center w-full items-center gap-4">
        {update ? (
          <>
            {/* Champ de texte modifiable */}
            <textarea
              className="w-1/2 h-44 p-4 rounded-xl bg-transparent border-2 border-zinc-300"
              value={selectedAbout}
              onChange={(e) => {
                handleAbout(e);
                handleInputChange();
              }}
            />

            {/* Champ pour la situation */}
            <input
              className="w-1/2 p-2 rounded-xl bg-transparent border-2 border-zinc-300"
              value={selectedSituation}
              onChange={(e) => {
                handleSituation(e);
                handleInputChange();
              }}
            />

            {/* Champ pour le fichier CV */}
            <input
              className="p-2"
              type="file"
              onChange={(e) => {
                handleCv(e);
                handleInputChange();
              }}
            />
          </>
        ) : (
          <>
            {/* Affichage des données lorsque non en mode édition */}
            <p className="w-1/2 p-4 rounded-xl bg-zinc-200 text-left">
              {about[0]?.text || "Pas de texte disponible"}
            </p>
            <p className="w-1/2 p-4 rounded-xl bg-zinc-200 text-left">
              Situation: {about[0]?.situation || "Pas de situation disponible"}
            </p>
          </>
        )}

        {update ? (
          <div className="flex gap-4">
            {/* Boutons pour annuler ou envoyer les modifications */}
            {updateButton && (
              <button
                className="rounded-xl hover:border-blue-500"
                onClick={handleEditAbout}
              >
                Envoyer
              </button>
            )}
            <button
              className="rounded-xl hover:border-blue-500"
              onClick={handleUpdate}
            >
              Annuler
            </button>
          </div>
        ) : (
          <button
            className="rounded-xl hover:border-blue-500"
            onClick={handleUpdate}
          >
            Modifier
          </button>
        )}
      </section>
    </>
  );
}

export default About;
