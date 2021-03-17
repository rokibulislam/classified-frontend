import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Coupons from '../../components/coupons'

const AdminCoupon: React.FC<{}> = ( props ) => {
    return (
        <>
            <AdminLayout>
                <Coupons/>
            </AdminLayout>
        </>
    )
}

export default AdminCoupon;