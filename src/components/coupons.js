import React, { Component, memo } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { QueryCoupons } from '../query/coupon'
import { deleteCouponmutation  } from '../mutations/coupons'

const Coupons = ( props ) => {
    const { t } = useTranslation();
    const { loading, error, data }  = useQuery( QueryCoupons );
    const [ deleteCoupon ] = useMutation( deleteCouponmutation, {
        refetchQueries: [  {query: QueryCoupons} ],
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

        deleteCoupon({
            variables: { id: id }
        })
    }
    
    return (
        <>
            <Link className="btn btn-success" to="/admin/coupon/create"> create Coupon </Link>
        
        <table class="table">
            <thead>
                <tr>
                    <th> { t('name') } </th>
                    <th> { t('Action') } </th>  
                </tr>
            </thead>

            <tbody>
            {
                data.coupons.map( ( { id, name, description } ) => {
                    return (
                        <>
                            <tr key={id}>
                               <td> {name} </td>
                               <td>
                                    <button className="btn btn-danger" onClick={() => { onDelete(id)}}> { t('Delete') }  </button>
                                    <Link className="btn btn-primary" to={`/admin/coupon/${id}/edit`}> { t('Edit') } </Link>
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

export default memo( Coupons );