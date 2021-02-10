import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createComplainmutation } from '../../mutations/Complain' 
import { QueryComplains } from '../../query/complain'

const ComplainCreate = ( props  ) => {
    const [description, setDescription] = useState('');
    
    const [ createComplain, { data }] = useMutation( createComplainmutation, {
        refetchQueries: [ { query: QueryComplains } ],
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/complains')
            console.log( response );
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createComplain({
            variables: {
                description: description
            }
        })
    }

    return (
        <AdminLayout>  
            <form className="loginform">     
                <div className="form-group">
                    <label> Name  </label>
                    <input type="text" className="form-control" name="description" placeholder="Enter Name" 
                        value={description} onChange={ (e) => setDescription( e.target.value ) } 
                    />
                </div>

                <div className="form-group">
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Complain </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default ComplainCreate;