import React from 'react'
import { getXpPro } from '../utils/utils'

function XpPro() {
    const xpPro = getXpPro()

    return <>
        <h1>Experience professionnelles</h1>
        <div className='grid grid-cols-3 gap-4'>
            {xpPro.map((xpPro) => <>
                <div className='bg-gray-500'>
                    <p>{xpPro.id}</p>
                    <p>{xpPro.contrat}</p>
                    <p>{xpPro.domaine}</p>
                    <p>{xpPro.mission}</p>
                    <p>{xpPro.annee}</p>
                    <p>{xpPro.titre}</p>
                </div>

            </>)}
        </div>

    </>
}

export default XpPro