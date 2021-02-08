import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryBrands } from '../query/brand'
import { deleteBrandmutation } from '../mutations/Brands'

const Brands = ( props ) => {
    const { loading, error, data }  = useQuery(QueryBrands);
    const [ deleteBrand ] = useMutation( deleteBrandmutation );
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {

        deleteBrand(
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
            <Link to="/admin/brands/create"> create Brand </Link>
            {
                data.brands.map( ( { id, name } ) => {
                    return (
                        <>
                            <div key={id}>
                                {name} 
                                <button onClick={() => { onDelete(id)}}> Delete </button>
                                <Link to={`/admin/brands/${id}/edit`}> Edit </Link>
                            </div> 
                        </>
                    )
                })
            } 
        </>
    )
}

export default withRouter( Brands );