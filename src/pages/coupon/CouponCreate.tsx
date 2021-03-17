import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { createCouponmutation } from '../../mutations/coupons' 
import AdminLayout from '../../layout/AdminLayout'

import { useTranslation } from 'react-i18next'

const CouponCreate: React.FC<{}> = ( props ) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [couponamount, setCouponamount] = useState('');
    const [expirydate, setExpirydate] = useState('');

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
                        <label> { t('name') }  </label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Name" 
                            value={name} onChange={ (e) => setName( e.target.value ) } 
                        />
                    </div>

                    <div className="form-group">
                        <label> { t('description') }  </label>
                        <textarea className="form-control" name="description" onChange={ (e) => setName( e.target.value ) } > </textarea>
                    </div>

                    <div className="form-group"> 
                        <label> { t('Coupon Amount') } </label>
                        <input type="text" className="form-control" name="couponamount" placeholder="Enter Coupon Amount" 
                            value={name} onChange={ (e) => setCouponamount( e.target.value ) } 
                        />
                    </div>

                    <div className="form-group"> 
                        <label> { t('Coupon Expiry Date') } </label>
                        <input type="text" className="form-control" name="expirydate" placeholder="Enter Expiry Date" 
                            value={name} onChange={ (e) => setExpirydate( e.target.value ) } 
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Coupon </button> 
                    </div> 
                </form>
            </AdminLayout>
        </>
    )
}

export default CouponCreate;