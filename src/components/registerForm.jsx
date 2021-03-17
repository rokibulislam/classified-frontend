import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gql, useMutation } from '@apollo/client';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { signupmutation } from '../mutations/Signup'

const RegisterForm = ( props ) => {
    const history = useHistory();
    const { t } = useTranslation()

    const [state , setState] = useState({
        name: "",
        email : "",
        password : "",
        error: {}
    })

    const [signup, { data }] = useMutation( signupmutation, {
        onError: ( error ) => {
            setState(prevState => ({
                ...prevState,
                error: error.message,
            }))
        },
        update: ( store, response ) => {
            history.push('/login');
        }
    });

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        signup({
            variables: {
                name: state.name, 
                email: state.email, 
                password: state.password 
            }
        })
    }

    const { email, password, error } = state;

    return (
        <>
            { ( error && error.length  ? <div className="alert alert-danger"> { error } </div> : null ) }

            <div class="login-form login-signup">
                <form class="form" novalidate="novalidate" id="kt_login_signup_form">
                    <div class="pb-13 pt-lg-0 pt-5">
                        <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Sign Up</h3>
                        <p class="text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
                    </div>
                    <div class="form-group">
                        <input class="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="text" placeholder={ t('name') } name="name" autocomplete="off" value={state.name} onChange={handleChange} />
                        {error.name && (
                            <span className='text-danger'> {error.name} </span>
                        )}
                    </div>
                    <div class="form-group">
                        <input class="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autocomplete="off" value={state.email} onChange={handleChange}/>
                        {error.email && (
                            <span className='text-danger'> {error.email} </span>
                        )}
                    </div>
                    <div class="form-group">
                        <input class="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="password" placeholder="Password" name="password" autocomplete="off" value={state.password} onChange={handleChange}/>
                        {error.password && (
                            <span className='text-danger'> {error.password} </span>
                        )}
                    </div>
                    {/* <div class="form-group">
                        <input class="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="password" placeholder="Confirm password" name="cpassword" autocomplete="off" />
                    </div> */}
                    {/* <div class="form-group">
                        <label class="checkbox mb-0">
                            <input type="checkbox" name="agree" />
                            <span></span>
                            <div class="ml-2">I Agree the
                            <a href="#">terms and conditions</a>.</div>
                        </label>
                    </div> */}
                    <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                        <button type="button" id="kt_login_signup_submit" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4" onClick={handleSubmit}> { t('Register') } </button>
                        <Link to="/login" id="kt_login_signup_submit" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"> { t('Login') } </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;