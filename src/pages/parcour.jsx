import React from 'react'
import { getParcour } from '../utils/utils'

function Parcour() {
    const parcour = getParcour()

    return <>
        <h1>Parcour</h1>
        <div className='grid grid-cols-3 gap-4'>
            {parcour.map((parcour) => <>
                <div className='bg-gray-500'>
                    <p>{parcour.id}</p>
                    <p>{parcour.date}</p>
                    <p>{parcour.description}</p>
                </div>
            </>)}
        </div>

    </>
}

export default Parcour