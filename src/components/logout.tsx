import React from 'react'
import { useHistory } from 'react-router-dom'
import auth from '../services/authService'

const Logout: React.FC<{}> = ( props ) => {
    let history = useHistory();
    
    const logout = () => {
        auth.logout();
        history.push('/')
    }

    return (
        <>

        </>
    )
}