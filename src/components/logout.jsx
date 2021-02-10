import React from 'react'
import { useHistory } from 'react-router-dom'
import auth from '../services/authService'

const Logout = ( props ) => {
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