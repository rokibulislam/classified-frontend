import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryTags } from '../query/tag'
import { deleteTagsmutation } from '../mutations/Tags'

const Tags = () => {
    const { loading, error, data } = useQuery(QueryTags);
    const [ deleteTag ] = useMutation( deleteTagsmutation, {
        refetchQueries: [  {query: QueryTags } ],
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            console.log( 'Delete' );
            console.log( response );
        }
    } )
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {
        deleteTag({
            variables: { id: id }
        })
    }
    
        
    return (
        <>
            <Link className="btn btn-success" to="/admin/tags/create"> create Tag </Link>

            <table class="table">
                <thead>
                    <tr>
                        <th> name </th>
                        <th> Action </th>  
                    </tr>
                </thead>

                <tbody>
                    {
                        data.tags.map( ( { id, name } ) => {
                            return (
                                <>
                                    <tr key={id}>
                                        <td> {name} </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => { onDelete(id)}}> Delete </button>
                                            <Link className="btn btn-primary" to={`/admin/tags/${id}/edit`}> Edit </Link>
                                        </td>
                                    </tr> 
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Tags;