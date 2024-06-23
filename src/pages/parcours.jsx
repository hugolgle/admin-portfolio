import React from 'react'
import { getParcours } from '../utils/utils'
import { Link } from 'react-router-dom'
import BtnAdd from '../components/button/btnAdd';

function Parcours() {
    const parcours = getParcours()

    return <>
        <h1>Parcours</h1>
        <BtnAdd />
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {parcours.map((parcours) => <>
                <Link to={`${parcours.id}`} className='flex flex-row items-center bg-zinc-300 overflow-hidden rounded hover:scale-95 transition-all'>
                    <p className='flex items-center px-5 bg-zinc-400 h-full'>{parcours.id}</p>
                    <div className='p-4 w-full'>
                        <p className='italic text-sm mb-4'>{parcours.date}</p>
                        <p>{parcours.description}</p>
                    </div>
                </Link>
            </>)}
        </div >


    </>
}

export default Parcours