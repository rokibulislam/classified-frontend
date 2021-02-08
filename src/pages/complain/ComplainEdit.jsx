import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { QueryComplain } from '../../query/complain'

const ComplainEdit = ( props  ) => {

    let { id } = useParams();
    
    const { loading, error, data } = useQuery(QueryComplain, {
        variables: { id },
    });


    if (loading) return null;
    if (error) return `Error! ${error}`;

    console.log( data );


    return (
        <>
            <AdminLayout>
                Complain Edit
            </AdminLayout>
        </>
    )
}

export default ComplainEdit