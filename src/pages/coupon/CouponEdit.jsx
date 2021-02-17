import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import { updateCouponmutation } from '../../mutations/coupons' 
import AdminLayout from '../../layout/AdminLayout'
import { QueryCoupons, QueryCoupon } from '../../query/coupon'
const CouponEdit = ( props ) => {
    const [name, setName] = useState('');

    const [updateCoupon, mutationResult ] = useMutation( updateCouponmutation, {
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/coupon')
            console.log( response );
        }
    } );

    let { id } = useParams();

    const { loading, error, data } = useQuery(QueryCoupon, {
        variables: { id },
        onCompleted: ( data ) => {
            setName( data.coupon.name ) 
        }
    });


    const handleSubmit = ( e ) => {
        e.preventDefault();

        updateCoupon({
            variables: { name: name, id: id }
        })
    }

    return (
        <>  
            <AdminLayout>  
                <form className="loginform"> 
                    
                    <div className="form-group">
                        <label> Name  </label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Name" 
                            value={name} onChange={ (e) => setName( e.target.value ) } 
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Brand </button> 
                    </div> 
                </form>
            </AdminLayout>
        </>
    )
}

export default CouponEdit;