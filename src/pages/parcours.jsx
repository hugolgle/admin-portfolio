import React from 'react'
import { CirclePlus } from "lucide-react";

import { getParcours } from '../utils/utils'
import { Link } from 'react-router-dom'

function Parcours() {
    const parcours = getParcours()

    return <>
        <h1>Parcours</h1>
        <Link className='absolute top-2 right-2' to="add"><CirclePlus className="hover:scale-125 ease-in-out duration-300" /></Link>
        <div className='grid grid-cols-3 gap-4'>
            {parcours.map((parcours) => <>
                <Link to={`${parcours.id}`} className='bg-red-500'>
                    <p>{parcours.id}</p>
                    <p>{parcours.date}</p>
                    <p>{parcours.description}</p>
                </Link>
            </>)}
        </div>


    </>
}

export default Parcours