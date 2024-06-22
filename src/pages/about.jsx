import React from 'react'
import { getAbout } from '../utils/utils'
import { updateAbout } from '../redux/actions/about.action';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function About() {
    const about = getAbout()

    const [selectedAbout, setSelectedAbout] = useState(about[0].text);

    const [update, setUpdate] = useState(false);

    const [updateButton, setUpdateButton] = useState(false)

    const dispatch = useDispatch()

    const handleAbout = (event) => {
        setSelectedAbout(event.target.value);
    };

    const handleUpdate = () => {
        setUpdate(!update);
        setUpdateButton(false);
    };

    const handleInputChange = () => {
        setUpdateButton(true);
    };

    const handleEditAbout = async () => {
        const editData = {
            id: about[0].id,
            text: selectedAbout
        };

        await dispatch(updateAbout(editData));
        dispatch(getAbout());

    };

    return <>
        <h1>Présentation</h1>
        <section className='flex flex-col justify-center items-center gap-4'>
            {update ? (
                <textarea className="w-1/2 h-44 p-4 rounded-xl bg-transparent border-2 border-zinc-300" value={selectedAbout} name="" id="" onChange={(e) => { handleAbout(e); handleInputChange(); }} />
            ) : (
                <p className='w-1/2 p-4 rounded-xl bg-zinc-200 text-left'>{about[0].text}</p>
            )}

            {update ? (
                <div className='flex gap-4'>
                    {updateButton && <button className="rounded-xl hover:border-blue-500" onClick={handleEditAbout}>Envoyer</button>}
                    <button className="rounded-xl hover:border-blue-500" onClick={handleUpdate}>Annuler</button>
                </div>
            ) : (
                <button className="rounded-xl hover:border-blue-500" onClick={handleUpdate}>Modifier</button>
            )}
        </section>
    </>
}

export default About