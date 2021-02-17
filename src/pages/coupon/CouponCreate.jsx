import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { createCouponmutation } from '../../mutations/coupons' 
import AdminLayout from '../../layout/AdminLayout'

const CouponCreate = ( props ) => {
    const [name, setName] = useState('');

    const [createCoupon, { data }] = useMutation( createCouponmutation, {
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/coupon')
            console.log( response );
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createCoupon({
            variables: { name: name }
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

export default CouponCreate;