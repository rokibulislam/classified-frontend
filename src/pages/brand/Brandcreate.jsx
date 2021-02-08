import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createBrandmutation } from '../../mutations/Brands' 

const BrandCreate = ( props  ) => {
    const [name, setName] = useState('');
    const [createBrand, { data }] = useMutation( createBrandmutation );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createBrand(
            {
                variables: {
                    name: name
                }
            }).then( (response) => {
                console.log(response);

            }).catch(function(error) {
                console.log(error);
            });
    }

    return (
        <AdminLayout>  
            <form className="loginform"> 
                
                <div class="form-group">
                    <label> Name  </label>
                    <input type="text" className="form-control" name="name" placeholder="Enter Name" 
                        value={name} onChange={ (e) => setName( e.target.value ) } 
                    />
                </div>

                <div class="form-group">
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Brand </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default BrandCreate;