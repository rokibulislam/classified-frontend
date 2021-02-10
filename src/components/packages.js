import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryPackages } from '../query/package'
import { deletePackagemutation } from '../mutations/Package'

const Packages = () => {
    const { loading, error, data }  = useQuery(QueryPackages);
    const [ deletePackage ] = useMutation( deletePackagemutation, {
        refetchQueries: [ { query: QueryPackages } ],
        
        onError: (error) => {
            console.log('error');
        },

        update: (store, response) => {
            console.log( response );
        }
    } )
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const onDelete = (id) => {
        
        deletePackage({
            variables: {
                id: id
            }
        })
    }

    return (
        <>
            <Link className="btn btn-success" to="/admin/packages/create"> create Package </Link>

            <table class="table">
                <thead>
                    <tr>
                        <th> name </th>
                        <th> Action </th>  
                    </tr>
                </thead>

                <tbody>
            
                    {
                        data.packages.map( ( { id, name } ) => {
                            return (
                                <>
                                    <tr key={id}>
                                       <td> {name}  </td>
                                       <td>
                                            <button className="btn btn-danger" onClick={() => { onDelete(id)}}> Delete </button>
                                            <Link className="btn btn-primary" to={`/admin/packages/${id}/edit`}> Edit </Link>
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

export default Packages;