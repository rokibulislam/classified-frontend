import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { QueryBrand } from '../../query/brand'

const BrandEdit = ( props  ) => {
   
    let { id } = useParams();

    const { loading, error, data } = useQuery(QueryBrand, {
        variables: { id },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <>
            <AdminLayout>
                Brand Edit
            </AdminLayout>
        </>
    )
}

export default BrandEdit