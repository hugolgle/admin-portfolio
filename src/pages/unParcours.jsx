import React from 'react'
import { useParams } from 'react-router-dom'

function UnParcours() {

    const { id } = useParams()

    return (
        <div>Le parcours {id}</div>
    )
}

export default UnParcours