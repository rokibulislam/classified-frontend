import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Users from '../../components/users'

const UserPage: React.FC<{}> = ( props ) => {
    return (
        <AdminLayout>
            UserList
            <Users/>
        </AdminLayout>
    )
}

export default UserPage