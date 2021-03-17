import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Tags from '../../components/tags'

const AdminTags: React.FC<{}> = () => {
    return (
        <>
            <AdminLayout>
                <Tags/>
            </AdminLayout>
        </>
    )
}


export default AdminTags;