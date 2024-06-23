import { CirclePlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function BtnAdd() {
    return (
        <Link className='absolute top-2 left-2' to="add"><CirclePlus className="hover:scale-125 ease-in-out duration-300" /></Link>
    )
}

export default BtnAdd