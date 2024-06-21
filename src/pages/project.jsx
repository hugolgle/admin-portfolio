import React from 'react'
import { getProjects } from '../utils/utils'
import { Link } from 'react-router-dom'
import { CirclePlus } from 'lucide-react'

function Project() {
    const projects = getProjects()
    return <>
        <h1>Project</h1>
        <Link className='absolute top-2 right-2' to="add"><CirclePlus className="hover:scale-125 ease-in-out duration-300" /></Link>

        <div className='grid grid-cols-3 gap-4'>
            {projects.map((project) => <>
                <Link to={`${project.id}`} className='bg-gray-500'>
                    <p>{project.id}</p>
                    <p>{project.ecole}</p>
                    <p>{project.title}</p>
                    <p>{project.mission}</p>
                </Link>

            </>)}
        </div>

    </>
}

export default Project