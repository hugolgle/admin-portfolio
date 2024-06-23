import React from 'react'
import { useParams } from 'react-router-dom'
import { getProjectById } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteProject, editProject, getAllProjects } from '../../redux/actions/project.action'
import { useNavigate } from 'react-router-dom'
import BtnReturn from '../../components/button/btnReturn'

function UnProject() {

    const { id } = useParams()

    const leProject = getProjectById(id)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedEcole, setSelectedEcole] = useState(leProject.ecole);

    const [selectedTitle, setSelectedTitle] = useState(leProject.title);

    const [selectedMission, setSelectedMission] = useState(leProject.mission);

    const handleEcole = (event) => {
        setSelectedEcole(event.target.value);
    };

    const handleTitle = (event) => {
        setSelectedTitle(event.target.value);
    };

    const handleMission = (event) => {
        setSelectedMission(event.target.value);
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            id: leProject.id,
            ecole: selectedEcole,
            title: selectedTitle,
            mission: selectedMission
        };

        try {
            await dispatch(editProject(postData));
            dispatch(getAllProjects());

        } catch (err) {
            console.log("Une erreur s'est produite lors de l'ajout du projet", err);
        }
    };

    const handleDeleteSubmit = async (event) => {
        event.preventDefault();
        await dispatch(deleteProject(id))
        dispatch(getAllProjects());
        navigate("/projects")
    };

    return <>
        <h2>Le projet {leProject.id}</h2>
        <BtnReturn />
        <form onSubmit={handleEditSubmit} className='flex flex-col justify-center items-center gap-5 px-36 py-10'>
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedEcole} type="text" name="" maxLength={50} id="" placeholder="Ecole" onChange={(e) => { handleEcole(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedTitle} type="text" name="" maxLength={50} id="" placeholder="Titre" onChange={(e) => { handleTitle(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedMission} type="text" name="" maxLength={50} id="" placeholder="Mission" onChange={(e) => { handleMission(e); }} required />
            <button variant="outline" className="rounded-xl w-1/4 hover:border-blue-500">Modifier</button>
        </form>
        <button variant="outline" className="rounded-xl w-1/4 hover:border-red-500" onClick={handleDeleteSubmit}>Supprimer</button>
    </>
}

export default UnProject