import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const AuthProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(localStorage.getItem('user') ?? "")

    return (
        <UserContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthProvider