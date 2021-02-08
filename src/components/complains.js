import React, { Component } from 'react'
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryComplains } from '../query/complain'

const Complains = () => {
    const { loading, error, data } = useQuery(QueryComplains);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        
    return (
        <>
            <Link to="/admin/create-complain"> create Complain </Link>
            {
                data.complains.map( ( { id, name } ) => <div key={id}>{name} </div> )
            } 
        </>
    )
}

export default Complains;