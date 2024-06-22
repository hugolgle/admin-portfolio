import React from 'react'
import { getProjects } from '../utils/utils'
import { Link } from 'react-router-dom'
import { CirclePlus } from 'lucide-react'

function Project() {
    const projects = getProjects()
    return <>
        <h1>Project</h1>
        <Link className='absolute top-2 right-2' to="add"><CirclePlus className="hover:scale-125 ease-in-out duration-300" /></Link>

        <div className='grid grid-cols-3 gap-4 mt-4'>
            {projects.map((project) => <>
                <Link to={`${project.id}`} className='flex flex-row items-center bg-zinc-300 overflow-hidden rounded hover:scale-95 transition-all'>
                    <p className='flex items-center px-5 bg-zinc-400 h-full'>{project.id}</p>
                    <div className='p-4 w-full'>
                        <p>{project.ecole}</p>
                        <p>{project.title}</p>
                        <p>{project.mission}</p>
                    </div>

                </Link>
            </>)}
        </div >

    </>
}

export default Project