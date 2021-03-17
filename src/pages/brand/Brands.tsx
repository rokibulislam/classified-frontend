import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Brands from '../../components/brands'

const AdminBrands: React.FC<{}> = () => {
    return (
        <>
            <AdminLayout>
                <Brands/>
            </AdminLayout>
        </>
    )
}


export default AdminBrands;