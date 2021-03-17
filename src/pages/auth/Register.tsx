import React from 'react'
import AuthLayout from '../../layout/authLayout'
import RegisterForm from '../../components/registerForm'

const RegisterPage: React.FC<{}> = () => {
    return (
        <AuthLayout>
            <RegisterForm/>
        </AuthLayout>
    )
}

export default RegisterPage