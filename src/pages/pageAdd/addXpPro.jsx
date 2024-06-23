import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux"

import { addXpPro, getXpPros } from '../../redux/actions/xpPro.action';
import { useNavigate } from 'react-router-dom';
import BtnReturn from '../../components/button/btnReturn';

function AddXpPro() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedContrat, setSelectedContrat] = useState("");

    const [selectedDomaine, setSelectedDomaine] = useState('');

    const [selectedAnnee, setSelectedAnnee] = useState('');

    const [selectedTitre, setSelectedTitre] = useState('');

    const [selectedMission, setSelectedMission] = useState('');

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            contrat: selectedContrat,
            domaine: selectedDomaine,
            annee: selectedAnnee,
            titre: selectedTitre,
            mission: selectedMission
        };

        try {
            await dispatch(addXpPro(postData));
            dispatch(getXpPros());
            navigate("/xppro")

        } catch (err) {
            console.log("Une erreur s'est produite lors de l'ajout du projet", err);
        }
    };

    return <>
        <h1 className="text-5xl font-thin">Ajouter un projet</h1>
        <BtnReturn />
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 px-36 py-10'>
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedContrat} type="text" name="" maxLength={50} id="" placeholder="Contrat" onChange={(e) => { handleContrat(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedDomaine} type="text" name="" maxLength={50} id="" placeholder="Domaine" onChange={(e) => { handleDomaine(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedAnnee} type="text" name="" maxLength={50} id="" placeholder="Annee" onChange={(e) => { handleAnnee(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedTitre} type="text" name="" maxLength={50} id="" placeholder="Titre" onChange={(e) => { handleTitre(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedMission} type="text" name="" maxLength={50} id="" placeholder="Mission" onChange={(e) => { handleMission(e); }} required />
            <button variant="outline" className="rounded-xl w-1/4 hover:border-blue-500">Envoyer</button>
        </form>
    </>
}

export default AddXpPro