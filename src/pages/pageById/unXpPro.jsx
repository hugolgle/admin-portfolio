import React from 'react'
import { useParams } from 'react-router-dom'
import { getXpProById } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteXpPro, editXpPro, getXpPros } from '../../redux/actions/xpPro.action'
import { useNavigate } from 'react-router-dom'
import BtnReturn from '../../components/button/btnReturn'

function UnXpPro() {

    const { id } = useParams()

    const leXpPro = getXpProById(id)

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
            mission: selectedMission
        };

        try {
            await dispatch(editXpPro(postData));
            dispatch(getXpPros());

        } catch (err) {
            console.log("Une erreur s'est produite lors de l'ajout du projet", err);
        }
    };

    const handleDeleteSubmit = async (event) => {
        event.preventDefault();
        await dispatch(deleteXpPro(id))
        dispatch(getXpPros());
        navigate("/xppro")
    };

    return <>
        <h2>Le xpPro {leXpPro.id}</h2>
        <BtnReturn />
        <form onSubmit={handleEditSubmit} className='flex flex-col justify-center items-center gap-5 px-36 py-10'>
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedContrat} type="text" name="" id="" placeholder="Contrat" onChange={(e) => { handleContrat(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedDomaine} type="text" name="" id="" placeholder="Domaine" onChange={(e) => { handleDomaine(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedAnnee} type="text" name="" id="" placeholder="Annee" onChange={(e) => { handleAnnee(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedTitre} type="text" name="" id="" placeholder="Titre" onChange={(e) => { handleTitre(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedMission} type="text" name="" id="" placeholder="Mission" onChange={(e) => { handleMission(e); }} required />
            <button variant="outline" className="rounded-xl w-1/4 hover:border-blue-500">Modifier</button>
        </form>
        <button variant="outline" className="rounded-xl w-1/4 hover:border-red-500" onClick={handleDeleteSubmit}>Supprimer</button>

    </>
}

export default UnXpPro