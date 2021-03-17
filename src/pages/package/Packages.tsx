import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Packages from '../../components/packages'

const AdminPackages: React.FC<{}> = () => {
    return (
        <>
            <AdminLayout>
                <Packages/>
            </AdminLayout>
        </>
    )
}


export default AdminPackages;