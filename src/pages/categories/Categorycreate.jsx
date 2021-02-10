import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createCategoriesmutation } from '../../mutations/Categories' 
import { QueryCategories } from '../../query/category' 

const CategoryCreate = ( props  ) => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [createCategory, { data }] = useMutation( createCategoriesmutation, {
        refetchQueries: [ { query: QueryCategories } ],
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/categories');
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createCategory({
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
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Category </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default CategoryCreate;