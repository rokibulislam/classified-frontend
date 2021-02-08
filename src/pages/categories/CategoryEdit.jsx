import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { updateCategorymutation } from '../../mutations/Categories' 
import { QueryCategory } from '../../query/category'

const CategoryEdit = ( props  ) => {
    const [name, setName] = useState('');
    let { id } = useParams();


    const { loading, error, data } = useQuery(QueryCategory, {
        variables: { id },
    });

    const handleSubmit = () => {

    }

    if (loading) return null;
    if (error) return `Error! ${error}`;

    console.log( data );

    return (
        <>
            <AdminLayout>
                <form className="loginform">     
                    <div class="form-group">
                        <label> Name  </label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Name" 
                            value={name} onChange={ (e) => setName( e.target.value ) } 
                        />
                    </div>

                    <div class="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Category </button> 
                    </div> 
                </form> 
            </AdminLayout>
        </>
    )
}

export default CategoryEdit