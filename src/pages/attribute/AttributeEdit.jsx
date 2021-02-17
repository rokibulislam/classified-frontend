import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { updateAttributemutation } from '../../mutations/Attributes' 
import AdminLayout from '../../layout/AdminLayout'

const AttributeEdit = ( props ) => {
    const [name, setName] = useState('');

    const [updateAttribute, { data }] = useMutation( updateAttributemutation, {
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/attribute')
            console.log( response );
        }
    } );


    const handleSubmit = ( e ) => {
        e.preventDefault();

        updateAttribute({
            variables: { name: name }
        })
    }

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
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Brand </button> 
                    </div> 
                </form>
            </AdminLayout>
        </>
    )
}

export default AttributeEdit;