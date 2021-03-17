import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createTagsmutation } from '../../mutations/Tags' 
import { QueryTags } from '../../query/tag'

const TagCreate: React.FC<{}> = ( props  ) => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');

    const [createTags, { data }] = useMutation( createTagsmutation,{
        refetchQueries: [ { query: QueryTags } ],
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/tags');
        }
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        createTags({
            variables: {
                name: name,
                description: description,
            }
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
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Tag </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default TagCreate;