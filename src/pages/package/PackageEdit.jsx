import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { QueryPackage } from '../../query/package'

const PackageEdit = ( props  ) => {
    const [name, setName] = useState('');
    let { id } = useParams();
    
    const { loading, error, data } = useQuery(QueryPackage, {
        variables: { id },
    });

    const handleSubmit = () => {

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