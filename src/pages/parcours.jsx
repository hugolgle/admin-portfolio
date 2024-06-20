import React from 'react'
import { getParcours } from '../utils/utils'
import { Link } from 'react-router-dom'

function Parcours() {
    const parcours = getParcours()

    return <>
        <h1>Parcours</h1>
        <Link to="add">Ajouter</Link>
        <div className='grid grid-cols-3 gap-4'>
            {parcours.map((parcours) => <>
                <div className='bg-gray-500'>
                    <p>{parcours.id}</p>
                    <p>{parcours.date}</p>
                    <p>{parcours.description}</p>
                </div>
            </>)}
        </div>

    </>
}

export default Parcours