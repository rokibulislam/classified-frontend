import React from 'react'
import AuthLayout from '../../layout/authLayout'
import ForgetPassForm from '../../components/ForgetPassForm'

const ForgetPasswordPage: React.FC<{}> = ( props ) => {
    return (
        <>
            <AuthLayout> 
                <ForgetPassForm/>
            </AuthLayout>
        </>
    )
}


export default ForgetPasswordPage;