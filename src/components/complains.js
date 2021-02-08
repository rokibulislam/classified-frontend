import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryComplains } from '../query/complain'
import { deleteComplainmutation } from '../mutations/Complain'

const Complains = () => {
    const { loading, error, data } = useQuery(QueryComplains);
    const [ deleteComplain ] = useMutation( deleteComplainmutation)
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {

        console.log( id );

        deleteComplain({
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
            <Link to="/admin/complains/create"> create Complain </Link>
            {
                data.complains.map( ( complain ) => {
                    const { id, description }  = complain
                    return (
                        <>
                            <div key={id}>
                                {description} 
                                <button onClick={() => { onDelete(id)}}> Delete </button>
                                <Link to={`/admin/complains/${id}/edit`}> Edit </Link>
                            </div> 
                        </>
                    )
                })
            } 
        </>
    )
}

export default Complains;