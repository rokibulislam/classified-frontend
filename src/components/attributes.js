import React, { Component, memo } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { QueryAttributes } from '../query/attribute'
import { deleteAttributemutation  } from '../mutations/Attributes'

const Attributes = ( props ) => {
    const { t } = useTranslation();
    const { loading, error, data }  = useQuery( QueryAttributes );
    const [ deleteAttribute ] = useMutation( deleteAttributemutation, {
        refetchQueries: [  {query: QueryAttributes} ],
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

        deleteAttribute({
            variables: { id: id }
        })
    }
    
    return (
        <>
            <Link className="btn btn-success" to="/admin/attribute/create"> create Attibute </Link>
        
        <table class="table">
            <thead>
                <tr>
                    <th> { t('name') } </th>
                    <th> { t('Action') } </th>  
                </tr>
            </thead>

            <tbody>
            {
                data.attributes.map( ( { id, name, description } ) => {
                    return (
                        <>
                            <tr key={id}>
                               <td> {name} </td>
                               <td>
                                    <button className="btn btn-danger" onClick={() => { onDelete(id)}}> { t('Delete') }  </button>
                                    <Link className="btn btn-primary" to={`/admin/attribute/${id}/edit`}> { t('Edit') } </Link>
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

export default memo( Attributes );