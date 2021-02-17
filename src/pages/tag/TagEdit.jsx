import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { QueryTag } from '../../query/tag'
import { updateTagsmutation } from '../../mutations/Tags' 

const TagEdit = ( props  ) => {
    const [ name, setName] = useState('');
    const [ description, setDescription ] = useState('');

    const [ updateTag, mutationResult ] = useMutation( updateTagsmutation, {
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/tags');
        }
    } );

    let { id } = useParams();

    const { loading, error, data } = useQuery(QueryTag, {
        variables: { id },
        onCompleted: ( data ) => {
            setName( data.tag.name ) 
            setDescription( data.tag.description ) 
        }
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        updateTag({
            variables: {
                name: name,
                description: description,
                id: id
            }
        })
    }

    if (loading) return null;
    if (error) return `Error! ${error}`;

    console.log( data );

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
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Tag </button> 
                    </div> 
                </form> 
            </AdminLayout>
        </>
    )
}

export default TagEdit