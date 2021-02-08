import React, { Component } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryCategories } from '../query/category'

const Categories = () => {
    const { loading, error, data } = useQuery(QueryCategories);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <Link to="/admin/create-category"> create Categories </Link>
            {
                data.categories.map( ( { id, name } ) => <div key={id}>{name} </div> )
            } 
        </>
    )
}

export default withRouter(Categories);