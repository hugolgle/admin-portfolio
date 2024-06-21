import React from 'react'
import { useParams } from 'react-router-dom'

function UnXpPRo() {

    const { id } = useParams()

    return (
        <div>L'expérience pro {id}</div>
    )
}

export default UnXpPRo