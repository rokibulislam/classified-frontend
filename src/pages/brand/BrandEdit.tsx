import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { updateBrandmutation } from '../../mutations/Brands' 

import AdminLayout from '../../layout/AdminLayout'
import { QueryBrand, QueryBrands } from '../../query/brand'

const BrandEdit = ( props  ) => {
    const [name, setName] = useState('');
    const [ description, setDescription ] = useState('');

    const [ updateBrand, mutationResult ] = useMutation( updateBrandmutation, {
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/brands')
            console.log( response );
        }
    } );

    let { id } = useParams();

    const { loading, error, data } = useQuery(QueryBrand, {
        variables: { id },
        onCompleted: ( data ) => {
            setName( data.brand.name ) 
            setDescription( data.brand.description ) 
        }
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        updateBrand({
            variables: {
                name: name,
                description: description,
                id: id
            }
        })
    }

    if (loading) return null;
    if (error) return `Error! ${error}`;

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
                        <label> Description  </label>
                        <input type="text" className="form-control" name="description" placeholder="Enter Description" 
                            value={description} onChange={ (e) => setDescription( e.target.value ) } 
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Brand </button> 
                    </div> 
                </form> 
            </AdminLayout>
        </>
    )
}

export default BrandEdit