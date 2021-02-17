import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { QueryPackages } from '../query/package'
import { deletePackagemutation } from '../mutations/Package'

const Packages = () => {
    const { t } = useTranslation();
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
                        <th> { t('name') } </th>
                        <th> { t('Amount') } </th>
                        <th> { t('Duration') } </th>
                        <th> { t('Allowed Post') } </th>
                        <th> { t('Action') } </th>  
                    </tr>
                </thead>

                <tbody>
            
                    {
                        data.packages.map( ( { id, name, amount, duration, allowedpost } ) => {
                            return (
                                <>
                                    <tr key={id}>
                                       <td> {name}  </td>
                                       <td> { amount } </td>
                                       <td> { duration } </td>
                                       <td> { allowedpost } </td>
                                       <td>
                                            <button className="btn btn-danger" onClick={() => { onDelete(id)}}> { t('Delete') }  </button>
                                            <Link className="btn btn-primary" to={`/admin/packages/${id}/edit`}> { t('Edit') } </Link>
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