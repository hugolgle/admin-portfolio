import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux"

import { addParcours, getParcours } from '../../redux/actions/parcours.action';

function AddParcours() {

    const dispatch = useDispatch()

    const [selectedDate, setSelectedDate] = useState("");

    const [selectedDescription, setSelectedDescription] = useState('');

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
            date: selectedDate
        };

        try {
            await dispatch(addParcours(postData));
            dispatch(getParcours());

        } catch (err) {
            console.log("Une erreur s'est produite lors de l'ajout du parcours", err);
        }
    };

    return <>
        <h1 className="text-5xl font-thin">Ajouter un parcours</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 px-36 py-10'>
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedDate} type="text" name="" id="" placeholder="Date" onChange={(e) => { handleDate(e); }} required />
            <input className="w-96 h-10 px-2 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedDescription} type="text" name="" id="" placeholder="Description" onChange={(e) => { handleDescription(e); }} required />
            <button variant="outline" className="rounded-xl w-1/4 hover:border-blue-500">Envoyer</button>
        </form>
    </>
}

export default AddParcours