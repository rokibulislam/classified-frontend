import React, { SyntheticEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom'
import { loginmutation, useLoginMutation } from '../mutations/Login' 
import authService from '../services/authService'

const LoginForm: React.FC<{}> = ( props ) => {
    let history = useHistory();
    const { t } = useTranslation()

    const [state , setState] = useState({
        email : "",
        password : "",
        error: {}
    })

    const [login, { data }] = useMutation( loginmutation, {
        onError: ( error ) => {
            console.log( error );
            setState(prevState => ({
                ...prevState,
                error: error.message,
            }))
        },
        update: ( store, response ) => {
            console.log( response );
            let token = response.data.login.token 
            authService.setJwt( token )
            history.push('/');
        }
    });

    const handleChange = ( e ) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit =  ( e ) => {
        e.preventDefault();
        console.log( state.email );
        console.log( state.password );
        console.log( login() );

        login({
            variables: {
                email: state.email, 
                password: state.password 
            }
        })
    }

    const { email, password, error } = state;

    return (
        <>
            {
                ( error && error.length  ? <div className="alert alert-danger"> { error } </div> : null )
            }
        <div className="login-form login-signin">
            <form className="form" novalidate="novalidate" id="kt_login_signin_form">
                <div className="pb-13 pt-lg-0 pt-5">
                    <span className="text-muted font-weight-bold font-size-h4">New Here?
                        <Link to="/register" id="kt_login_signup" className="text-primary font-weight-bolder"> Create an Account </Link>
                    </span>
                </div>
                <div className="form-group">
                    <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
                    <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" type="text" name="email" autocomplete="off" value={state.email} onChange={handleChange} />
                    { error.name && (
                        <span className='text-danger'> {error.email} </span>
                    )}
                </div>
                <div className="form-group">
                    <div className="d-flex justify-content-between mt-n5">
                        <label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                        <Link to="/forget-password" className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5" id="kt_login_forgot"> { t('Forget Password?') } </Link>
                        { error.password && (
                            <span className='text-danger'> {error.password} </span>
                        )}
                    </div>
                    <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" type="password" name="password" autocomplete="off" value={state.password} onChange={handleChange} />
                </div>
                <div className="pb-lg-0 pb-5">
                    <button type="sumit" id="kt_login_signin_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3" onClick={handleSubmit}>  { t( 'Login') } </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default LoginForm;