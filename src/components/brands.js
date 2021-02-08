import React, { Component } from 'react'
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryBrands } from '../query/brand'

const Brands = () => {
    const { loading, error, data } = useQuery(QueryBrands);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
        <>
            <Link to="/admin/create-brand"> create Brand </Link>
            {
                data.brands.map( ( { id, name } ) => <div key={id}>{name} </div> )
            } 
        </>
    )
}

export default Brands;