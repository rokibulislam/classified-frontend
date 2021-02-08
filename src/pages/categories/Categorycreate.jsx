import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createCategoriesmutation } from '../../mutations/Categories' 

const CategoryCreate = ( props  ) => {
    const [name, setName] = useState('');
    const [createCategory, { data }] = useMutation( createCategoriesmutation );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createCategory(
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
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Category </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default CategoryCreate;