import React from 'react'
import { getAbout } from '../utils/utils'
import { updateAbout } from '../redux/actions/about.action';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function About() {
    const about = getAbout()

    const [selectedAbout, setSelectedAbout] = useState(about[0].text);
    const dispatch = useDispatch()

    const handleAbout = (event) => {
        setSelectedAbout(event.target.value);
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
        <div className='grid grid-cols-3 gap-4'>
            {about[0].text}
        </div>
        <textarea className="h-max w-full bg-slate-500 text-center text-xl p-4 rounded-2xl" value={selectedAbout} name="" id="" onChange={(e) => { handleAbout(e) }} />
        <button className="bg-slate-300 hover:bg-slate-400 transition-all" onClick={handleEditAbout}>Envoyer</button>
    </>
}

export default About