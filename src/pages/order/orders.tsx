import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Orders from '../../components/orders'

const AdminOrders: React.FC<{}> = ( props ) => {
    return (
        <AdminLayout>
            <Orders />
        </AdminLayout>
    )
}

export default AdminOrders;