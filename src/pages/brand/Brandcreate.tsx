import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createBrandmutation } from '../../mutations/Brands' 
import { QueryBrands } from '../../query/brand'

const BrandCreate: React.FC<{}> = ( props  ) => {
    const [name, setName] = useState('');
    const [ description, setDescription ] = useState('');

    const [createBrand, { data }] = useMutation( createBrandmutation, {
        // refetchQueries: [ { query: QueryBrands } ],
        onError: (error) => {
            console.log('error');
        },

        update: (cache, { data: { createBrand } } ) => {
            const result = cache.readQuery({
                query: QueryBrands
            })
            console.log( result );
            // props.history.push('/admin/brands')
            // console.log( response );
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createBrand({
            variables: { name: name, description: description }
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
                    <label> Description  </label>
                    <input type="text" className="form-control" name="description" placeholder="Enter Description" 
                        value={description} onChange={ (e) => setDescription( e.target.value ) } 
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