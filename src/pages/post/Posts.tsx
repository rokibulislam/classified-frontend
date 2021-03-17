import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Posts from '../../components/posts'

const AdminPosts: React.FC<{}> = () => {
    return (
        <>
            <AdminLayout>
                <Posts/>
            </AdminLayout>
        </>
    )
}


export default AdminPosts;