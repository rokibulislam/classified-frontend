import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Categories from '../../components/categories'

const AdminCategories: React.FC<{}> = (props) => {
    
    return (
        <>
            <AdminLayout>
                <Categories/>
            </AdminLayout>
        </>
    )
}


export default AdminCategories;