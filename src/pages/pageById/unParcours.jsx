import React from 'react'
import { useParams } from 'react-router-dom'
import { getParcoursById } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteParcours, editParcours, getParcours } from '../../redux/actions/parcours.action'
import { useNavigate } from 'react-router-dom'
import BtnReturn from '../../components/button/btnReturn'

function UnParcours() {

    const { id } = useParams()

    const leParcours = getParcoursById(id)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedDate, setSelectedDate] = useState(leParcours.date);

    const [selectedDescription, setSelectedDescription] = useState(leParcours.description);

    const handleDate = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleDescription = (event) => {
        setSelectedDescription(event.target.value);
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            id: leParcours.id,
            date: selectedDate,
            description: selectedDescription
        };

        try {
            await dispatch(editParcours(postData));
            dispatch(getParcours());

        } catch (err) {
            console.log("Une erreur s'est produite lors de l'ajout du parcours", err);
        }
    };

    const handleDeleteSubmit = async (event) => {
        event.preventDefault();
        await dispatch(deleteParcours(id))
        dispatch(getParcours());
        navigate("/parcours")
    };

    return <>
        <h2>Le parcours {leParcours.id}</h2>
        <BtnReturn />
        <form onSubmit={handleEditSubmit} className='flex flex-col justify-center items-center gap-5 px-36 py-10'>
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedDate} type="text" name="" id="" placeholder="Date" onChange={(e) => { handleDate(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedDescription} type="text" name="" id="" placeholder="Description" onChange={(e) => { handleDescription(e); }} required />
            <button variant="outline" className="rounded-xl w-1/4 hover:border-blue-500">Modifier</button>
        </form>
        <button variant="outline" className="rounded-xl w-1/4 hover:border-red-500" onClick={handleDeleteSubmit}>Supprimer</button>

    </>
}

export default UnParcours