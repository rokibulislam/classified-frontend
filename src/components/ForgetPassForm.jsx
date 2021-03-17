import React from 'react'
import { useTranslation } from 'react-i18next'
const ForgetPassForm = ( props ) => {
    const { t } = useTranslation();

    const handleSubmit = e => {
        e.preventDefault();

        try {

        } catch( ex ) {

        }
    }

    return (
    <>
        <div className="login-form login-forgot">
            <form className="form" novalidate="novalidate" id="kt_login_forgot_form">
                <div className="pb-13 pt-lg-0 pt-5">
                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Forgotten Password ?</h3>
                    <p className="text-muted font-weight-bold font-size-h4">Enter your email to reset your password</p>
                </div>
                <div className="form-group">
                    <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="email" placeholder={ t('email') } name="email" autocomplete="off" />
                </div>
                <div className="form-group d-flex flex-wrap pb-lg-0">
                    <button type="submit" id="kt_login_forgot_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4" onClick={handleSubmit}> { t('Submit') }  </button>
                </div>
            </form>
        </div>
      </>  
    )
}

export default ForgetPassForm