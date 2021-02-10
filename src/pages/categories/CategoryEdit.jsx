import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { updateCategorymutation } from '../../mutations/Categories' 
import { QueryCategories, QueryCategory } from '../../query/category'

const CategoryEdit = ( props  ) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    let history = useHistory();
    
    const [ updateCategory, mutationResult ] = useMutation( updateCategorymutation, {
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/categories');
        }
    } );
    
    let { id } = useParams();

    const { loading, error, data } = useQuery( QueryCategory, {
        variables: { id },
        onCompleted: ( data ) => {
            setName( data.category.name ) 
            setDescription( data.category.description )
        }
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        updateCategory({
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
                        <input type="text" className="form-control" name="description" placeholder="Enter description" 
                            value={description} onChange={ (e) => setDescription( e.target.value ) } 
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Category </button> 
                    </div> 
                </form> 
            </AdminLayout>
        </>
    )
}

export default CategoryEdit