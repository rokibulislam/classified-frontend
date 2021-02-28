import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom'
import { loginmutation, useLoginMutation } from '../mutations/Login' 
import authService from '../services/authService'

const LoginForm = ( props ) => {
    let history = useHistory();
    const { t } = useTranslation()

    const [state , setState] = useState({
        email : "",
        password : "",
        error: {}
    })

    const [login, { data }] = useMutation( loginmutation, {
        onError: ( error ) => {
            setState(prevState => ({
                ...prevState,
                error: error.message,
            }))
        },
        update: ( store, response ) => {
            let token = response.data.login.token 
            authService.setJwt( token )
            history.push('/');
        }
    });

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit =  ( e ) => {
        e.preventDefault();
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
        <div className="row justify-content-md-center mt-5">
            <div className="col-md-offset-4 col-md-4">

                <div className="row">

                    <div className="col-md-6">
                        { t('login') }
                    </div>

                    <div className="col-md-6">
                        <Link to="/register"> { t('create an account') } </Link>
                    </div>

                </div>

                <form className="loginform"> 
                    
                    <div class="form-group">
                        <label> { t('email') }  </label>
                        <input type="email" className="form-control" name="email" placeholder="Enter Your Email" 
                            value={state.email} onChange={handleChange}
                        />
                        { error.name && (
                            <span className='text-danger'> {error.email} </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label> { t('password') }  </label>
                        <input type="password" className="form-control" name="password" placeholder="Enter Your Password"   
                            value={state.password} onChange={handleChange}
                        />
                        { error.password && (
                            <span className='text-danger'> {error.password} </span>
                        )}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/forget-password"> { t('Forget Password?') } </Link>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary mt-3 btn-block" onClick={handleSubmit}> { t( 'Login') } </button> 
                    </div> 
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginForm;