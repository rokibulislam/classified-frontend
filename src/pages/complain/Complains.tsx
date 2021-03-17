import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Complains from '../../components/complains'

const AdminComplains: React.FC<{}> = (props) => {
    return (
        <>
            <AdminLayout>
                <Complains/>
            </AdminLayout>
        </>
    )
}

export default AdminComplains;