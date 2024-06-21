import React from 'react'
import { useParams } from 'react-router-dom'

function UnProject() {

    const { id } = useParams()

    return (
        <div>Le project {id}</div>
    )
}

export default UnProject