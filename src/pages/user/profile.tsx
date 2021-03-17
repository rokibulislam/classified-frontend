import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import ProfileForm from '../../components/profileForm'

const Profile: React.FC<{}> = ( props ) => {
    return (
        <AdminLayout>
            <ProfileForm/>
        </AdminLayout>
    )
}

export default Profile;