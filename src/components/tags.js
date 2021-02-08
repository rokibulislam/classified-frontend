import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryTags } from '../query/tag'
import { deleteTagsmutation } from '../mutations/Tags'

const Tags = () => {
    const { loading, error, data } = useQuery(QueryTags);
    const [ deleteTag ] = useMutation( deleteTagsmutation )
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {

        deleteTag(
            {
                variables: {
                    id: id
                }
            }).then( (response) => {
                console.log(response);

            }).catch(function(error) {
                console.log(error);
            });
    }
    
        
    return (
        <>
            <Link to="/admin/tags/create"> create Tag </Link>
            {
                data.tags.map( ( { id, name } ) => {
                    return (
                        <>
                            <div key={id}>
                                {name} 
                                <button onClick={() => { onDelete(id)}}> Delete </button>
                                <Link to={`/admin/tags/${id}/edit`}> Edit </Link>
                            </div> 
                        </>
                    )
                })
            } 
        </>
    )
}

export default Tags;