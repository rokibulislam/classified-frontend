import React, { Component } from 'react'
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryTags } from '../query/tag'

const Tags = () => {
    const { loading, error, data } = useQuery(QueryTags);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        
    return (
        <>
            <Link to="/admin/create-tag"> create Tag </Link>
            {
                data.tags.map( ( { id, name } ) => <div key={id}>{name} </div> )
            } 
        </>
    )
}

export default Tags;