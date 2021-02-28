import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ResetPassForm = props => {
    const { t } = useTranslation()
    const [ state, setState ] = useState( {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    const handleChange = e => {

    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            console.log( state )
        } catch( ex ) {

        }
    }

    return (
        <>
            <form className="loginform"> 

                <div className="form-group">
                    <label> { t('Current Password') }  </label>
                    <input type="password" className="form-control" name="currentPassword" placeholder="Enter Your Password"   
                        value={state.currentPassword} onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label> { t('New Password') }  </label>
                    <input type="password" className="form-control" name="newPassword" placeholder="Enter Your Password"   
                        value={state.newPassword} onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label> { t('New Password')}  </label>
                    <input type="password" className="form-control" name="confirmNewPassword" placeholder="Enter Your Password"   
                        value={state.confirmNewPassword} onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">
                        { t('Change Password') } 
                    </button>
                </div>
            </form>
        </>
    )
}

export default ResetPassForm;