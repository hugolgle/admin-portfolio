import React from 'react'
import { getXpPro } from '../utils/utils'
import { Link } from 'react-router-dom'
import { CirclePlus } from 'lucide-react'

function XpPro() {
    const xpPro = getXpPro()

    return <>
        <h1>Experience professionnelles</h1>
        <Link className='absolute top-2 right-2' to="add"><CirclePlus className="hover:scale-125 ease-in-out duration-300" /></Link>

        <div className='grid grid-cols-3 gap-4'>
            {xpPro.map((xpPro) => <>
                <Link to={`${xpPro.id}`} className='bg-gray-500'>
                    <p>{xpPro.id}</p>
                    <p>{xpPro.contrat}</p>
                    <p>{xpPro.domaine}</p>
                    <p>{xpPro.mission}</p>
                    <p>{xpPro.annee}</p>
                    <p>{xpPro.titre}</p>
                </Link>

            </>)}
        </div>

    </>
}

export default XpPro