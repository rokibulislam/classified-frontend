import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { updatePackagemutation } from '../../mutations/Package'
import { QueryPackage } from '../../query/package'

const PackageEdit = ( props  ) => {
    const [ name, setName ] = useState('');
    let { id } = useParams();

    const [ updatePackage, mutationResult ] = useMutation( updatePackagemutation, {
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/packages');
        }
    })
    
    const { loading, error, data } = useQuery(QueryPackage, {
        variables: { id },
        onCompleted: ( data ) => setName(data.package.name)
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        updatePackage({
            variables: {
                name: name,
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
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Category </button> 
                    </div> 
                </form> 
            </AdminLayout>
        </>
    )
}

export default PackageEdit