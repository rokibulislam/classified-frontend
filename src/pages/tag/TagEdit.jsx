import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { QueryTag } from '../../query/tag'

const TagEdit = ( props  ) => {
    
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
                Tag Edit { id }
            </AdminLayout>
        </>
    )
}

export default TagEdit