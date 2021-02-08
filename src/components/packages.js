import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryPackages } from '../query/package'
import { deletePackagemutation } from '../mutations/Package'

const Packages = () => {
    const { loading, error, data }  = useQuery(QueryPackages);
    const [ deletePackage ] = useMutation( deletePackagemutation )
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const onDelete = (id) => {

        deletePackage({
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
            <Link to="/admin/packages/create"> create Package </Link>
            {
                data.packages.map( ( { id, name } ) => {
                    return (
                        <>
                            <div key={id}>
                                {name} 
                                <button onClick={() => { onDelete(id)}}> Delete </button>
                                <Link to={`/admin/package/${id}/edit`}> Edit </Link>
                            </div> 
                        </>
                    )
                })
            } 
        </>
    )
}

export default Packages;