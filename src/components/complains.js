import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryComplains } from '../query/complain'
import { deleteComplainmutation } from '../mutations/Complain'

const Complains = () => {
    const { loading, error, data } = useQuery(QueryComplains);
    const [ deleteComplain ] = useMutation( deleteComplainmutation, {
        refetchQueries: [ { query: QueryComplains } ],
        onError: (error) => {
            console.log('error');
        },

        update: (store, response) => {
            console.log( response );
        }
    })
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {
        
        deleteComplain({
            variables: {
                id: id
            }
        })
    }
        
    return (
        <>
            <Link className="btn btn-success" to="/admin/complains/create"> create Complain </Link>

            <table class="table">
                <thead>
                    <tr>
                        <th> name </th>
                        <th> Action </th>  
                    </tr>
                </thead>

                <tbody>
            
                    {
                        data.complains.map( ( complain ) => {
                            const { id, description }  = complain
                            return (
                                <>
                                    <tr key={id}>
                                       <td> {description} </td>
                                       <td>
                                            <button className="btn btn-danger" onClick={() => { onDelete(id)}}> Delete </button>
                                            <Link className="btn btn-primary" to={`/admin/complains/${id}/edit`}> Edit </Link>
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

export default Complains;