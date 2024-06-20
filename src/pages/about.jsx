import React from 'react'
import { getAbout } from '../utils/utils'

function About() {
    const about = getAbout()

    return <>
        <h1>Présentation</h1>
        <div className='grid grid-cols-3 gap-4'>
            {about[0].text}
        </div>

    </>
}

export default About