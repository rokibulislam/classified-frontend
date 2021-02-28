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
            {
                ( error && error.length  ? <div className="alert alert-danger"> { error } </div> : null )
            }
    <div className="row justify-content-md-center mt-5">
        <div className="col-md-offset-4 col-md-4">
            <form className="loginform"> 
                <div className="form-group">
                    <label> { t('name') }  </label>
                    <input type="name" className="form-control" name="name" placeholder="Enter Your Name" 
                        value={state.name} onChange={handleChange}
                    />
                    {error.name && (
                        <span className='text-danger'> {error.name} </span>
                    )}
                </div>
                <div className="form-group">
                    <label> { t('email') }  </label>
                    <input type="email" className="form-control" name="email" placeholder="Enter Your Email" 
                        value={state.email} onChange={handleChange}
                    />
                    {error.email && (
                        <span className='text-danger'> {error.email} </span>
                    )}
                </div>

                <div className="form-group">
                    <label> { t('password') }  </label>
                    <input type="password" className="form-control" name="password" placeholder="Enter Your Password"   
                        value={state.password} onChange={handleChange}
                    />
                    {error.password && (
                        <span className='text-danger'> {error.password} </span>
                    )}
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary"  onClick={handleSubmit}> { t('Register') }  </button>  
                </div>
            </form>

            <Link to="/login"> { t('Login') } </Link>

        </div>
    </div>
        </>
    )
}

export default RegisterForm;