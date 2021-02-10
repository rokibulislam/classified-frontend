import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createBrandmutation } from '../../mutations/Brands' 
import { QueryBrands } from '../../query/brand'

const BrandCreate = ( props  ) => {
    const [name, setName] = useState('');
    const [createBrand, { data }] = useMutation( createBrandmutation, {
        refetchQueries: [ { query: QueryBrands } ],
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/brands')
            console.log( response );
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createBrand({
            variables: { name: name }
        })
    }

    return (
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
    )
}

export default BrandCreate;