import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'

const PackageEdit = ( props  ) => {

    let { id } = useParams();
    
    return (
        <>
            <AdminLayout>
                Package Edit
            </AdminLayout>
        </>
    )
}

export default PackageEdit