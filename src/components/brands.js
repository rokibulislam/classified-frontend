import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { QueryBrands } from '../query/brand'
import { deleteBrandmutation } from '../mutations/Brands'

const Brands = ( props ) => {
    const { t } = useTranslation();
    const { loading, error, data }  = useQuery(QueryBrands);
    const [ deleteBrand ] = useMutation( deleteBrandmutation, {
        refetchQueries: [  {query: QueryBrands} ],
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            console.log( 'Delete' );
            console.log( response );
        }  
    } );
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {

        deleteBrand({
            variables: { id: id }
        })
    }
    
    return (
        <>
            <Link className="btn btn-success" to="/admin/brands/create"> create Brand </Link>
        
        <table class="table">
            <thead>
                <tr>
                    <th> { t('name') } </th>
                    <th> { t('description') } </th>
                    <th> { t('Action') } </th>  
                </tr>
            </thead>

            <tbody>
            {
                data.brands.map( ( { id, name, description } ) => {
                    return (
                        <>
                            <tr key={id}>
                               <td> {name} </td>
                               <td> { description } </td>
                               <td>
                                    <button className="btn btn-danger" onClick={() => { onDelete(id)}}> { t('Delete') }  </button>
                                    <Link className="btn btn-primary" to={`/admin/brands/${id}/edit`}> { t('Edit') } </Link>
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

export default withRouter( Brands );