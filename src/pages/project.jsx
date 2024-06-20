import React from 'react'
import { getProjects } from '../utils/utils'

function Project() {
    const projects = getProjects()

    return <>
        <h1>Project</h1>
        <div className='grid grid-cols-3 gap-4'>
            {projects.map((project) => <>
                <div className='bg-gray-500'>
                    <p>{project.id}</p>
                    <p>{project.ecole}</p>
                    <p>{project.title}</p>
                    <p>{project.mission}</p>
                </div>

            </>)}
        </div>

    </>
}

export default Project