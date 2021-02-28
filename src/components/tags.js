import React, { Component, memo } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { QueryTags } from '../query/tag'
import { deleteTagsmutation } from '../mutations/Tags'

const Tags = () => {
    const { t } = useTranslation();
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
                        <th> { t('name') } </th>
                        <th> { t('description') } </th>
                        <th> { t('Action') } </th>  
                    </tr>
                </thead>

                <tbody>
                    {
                        data.tags.map( ( { id, name, description } ) => {
                            return (
                                <>
                                    <tr key={id}>
                                        <td> {name} </td>
                                        <td> {description} </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => { onDelete(id)}}> { t('Delete') } </button>
                                            <Link className="btn btn-primary" to={`/admin/tags/${id}/edit`}> { t('Edit') } </Link>
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

export default memo( Tags );