import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return <>
        <div className='flex h-full w-full items-center justify-center'>
            <h1 className='w-3/4 italic'>Bienvenue sur la plateforme administrateur du <a href="http://hugodv.vercel.app/" target="_blank" className='underline hover:text-portfolio transition-all'>Portfolio du Hugo</a> !</h1>
        </div>

    </>
}

export default Home