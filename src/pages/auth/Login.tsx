import React from 'react'
import AuthLayout from '../../layout/authLayout'
import LoginForm from '../../components/loginForm'

const LoginPage: React.FC<{}> = () => {
    return (
        <AuthLayout>
            <LoginForm/>
        </AuthLayout>
    )
}

export default LoginPage