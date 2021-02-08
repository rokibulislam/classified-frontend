import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createComplainmutation } from '../../mutations/Complain' 

const ComplainCreate = ( props  ) => {
    const [description, setDescription] = useState('');
    const [ createComplain, { data }] = useMutation( createComplainmutation );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createComplain({
            variables: {
                description: description
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
                    <input type="text" className="form-control" name="description" placeholder="Enter Name" 
                        value={description} onChange={ (e) => setDescription( e.target.value ) } 
                    />
                </div>

                <div class="form-group">
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Complain </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default ComplainCreate;