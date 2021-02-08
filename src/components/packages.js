import React, { Component } from 'react'
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryPackages } from '../query/package'

const Packages = () => {
    const { loading, error, data } = useQuery(QueryPackages);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
        <>
            <Link to="/admin/create-package"> create Package </Link>
            {
                data.packages.map( ( { id, name } ) => <div key={id}>{name} </div> )
            } 
        </>
    )
}

export default Packages;