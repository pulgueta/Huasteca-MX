import React, { useContext } from 'react'
import { UserContext } from '../contexts/AuthProvider'

import { Navigate } from 'react-router-dom'


const RequireAuth = ({ children }) => {

    const { authUser } = useContext(UserContext)
    // console.log({authUser})

    if (!authUser) {
        return <Navigate to={'/inicio-sesion'} />
    }

    return children;
}

export default RequireAuth