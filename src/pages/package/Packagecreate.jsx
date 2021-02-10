import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createPackagemutation } from '../../mutations/Package' 
import { QueryPackages } from '../../query/package'

const PackageCreate = ( props  ) => {
    const [name, setName] = useState('');
    
    const [createPackage, { data }] = useMutation( createPackagemutation, {
        refetchQueries: [ { query: QueryPackages } ],
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/packages');
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createPackage({
            variables: {
                name: name
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
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Package </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default PackageCreate;