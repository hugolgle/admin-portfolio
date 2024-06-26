import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux"


import { addProject, getAllProjects } from '../../redux/actions/project.action';
import { useNavigate } from 'react-router-dom';
import BtnReturn from '../../components/button/btnReturn';

function AddProject() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedEcole, setSelectedEcole] = useState("");

    const [selectedTitle, setSelectedTitle] = useState('');

    const [selectedMission, setSelectedMission] = useState('');

    const handleEcole = (event) => {
        setSelectedEcole(event.target.value);
    };

    const handleTitle = (event) => {
        setSelectedTitle(event.target.value);
    };

    const handleMission = (event) => {
        setSelectedMission(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            ecole: selectedEcole,
            title: selectedTitle,
            mission: selectedMission
        };

        try {
            await dispatch(addProject(postData));
            dispatch(getAllProjects());
            navigate("/projects")

        } catch (err) {
            console.log("Une erreur s'est produite lors de l'ajout du projet", err);
        }
    };

    return <>
        <h1 className="text-5xl font-thin">Ajouter un projet</h1>
        <BtnReturn />
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 px-36 py-10'>
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedEcole} type="text" name="" id="" placeholder="Ecole" onChange={(e) => { handleEcole(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedTitle} type="text" name="" id="" placeholder="Titre" onChange={(e) => { handleTitle(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedMission} type="text" name="" id="" placeholder="Mission" onChange={(e) => { handleMission(e); }} required />
            <button variant="outline" className="rounded-xl w-1/4 hover:border-blue-500">Envoyer</button>
        </form>
    </>
}

export default AddProject