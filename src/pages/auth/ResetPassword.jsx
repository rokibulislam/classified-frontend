import React, { useState } from 'react'
import AuthLayout from '../../layout/authLayout'
import ResetPassForm from '../../components/ResetPassForm'

const ResetPasswordPage = () => {
    return (
        <>
            <AuthLayout>
                <div className="row">
                    <div className="col-md-4">
                        <ResetPassForm />
                    </div>
                </div>
            </AuthLayout>
        </>
    )
}

export default ResetPasswordPage;