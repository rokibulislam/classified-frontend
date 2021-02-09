import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { QueryTag } from '../../query/tag'

const TagEdit = ( props  ) => {
    const [name, setName] = useState('');
    let { id } = useParams();

    const { loading, error, data } = useQuery(QueryTag, {
        variables: { id },
    });

    const handleSubmit = () => {

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
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Category </button> 
                    </div> 
                </form> 
            </AdminLayout>
        </>
    )
}

export default TagEdit