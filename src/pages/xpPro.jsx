import React from 'react'
import { getXpPro } from '../utils/utils'
import { Link } from 'react-router-dom'
import { CirclePlus } from 'lucide-react'

function XpPro() {
    const xpPro = getXpPro()

    return <>
        <h1>Experience professionnelles</h1>
        <Link className='absolute top-2 right-2' to="add"><CirclePlus className="hover:scale-125 ease-in-out duration-300" /></Link>

        <div className='grid grid-cols-3 gap-4 mt-4'>
            {xpPro.map((xpPro) => <>


                <Link to={`${xpPro.id}`} className='flex flex-row items-center bg-zinc-300 overflow-hidden rounded hover:scale-95 transition-all'>
                    <p className='flex items-center px-5 bg-zinc-400 h-full'>{xpPro.id}</p>
                    <div className='p-4 w-full'>
                        <p className='italic text-sm mb-4'>{xpPro.annee}</p>
                        <p>{xpPro.contrat}</p>
                        <p>{xpPro.domaine}</p>
                        <p>{xpPro.mission}</p>
                        <p>{xpPro.annee}</p>
                        <p>{xpPro.titre}</p>
                    </div>


                </Link>


            </>)}
        </div>

    </>
}

export default XpPro