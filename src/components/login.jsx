import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom'
import { loginmutation, useLoginMutation } from '../mutations/Login' 
import http from '../services/httpService'

const Login = ( props ) => {
    let history = useHistory();
    
    const [state , setState] = useState({
        email : "",
        password : "",
        error: {}
    })

    const [login, { data }] = useMutation(loginmutation);

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit =  ( e ) => {
        e.preventDefault();

        try {
            const payload = {
                "email":  state.email,
                "password":state.password,
            }

            // useLoginMutation( state.email, state.password )
 
            
            login({
                variables: {
                    email: payload.email, 
                    password: payload.password 
                }
            }).then( (response) => {
                let token = response.data.login.token 
                localStorage.setItem('auth_token', token)
                http.setAuthToken(token)
                
                history.push('/');

            }).catch(function(error) {
                setState(prevState => ({
                    ...prevState,
                    error: error.message,
                }))
            });
            
        } catch (ex) {

        }

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
                        Login
                    </div>

                    <div className="col-md-6">
                        <Link to="/register"> create an account </Link>
                    </div>

                </div>

                <form className="loginform"> 
                    
                    <div class="form-group">
                        <label> Email  </label>
                        <input type="email" className="form-control" name="email" placeholder="Enter Your Email" 
                            value={state.email} onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label> Password  </label>
                        <input type="password" className="form-control" name="password" placeholder="Enter Your Password"   
                            value={state.password} onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Link > Forget Password? </Link>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary mt-3 btn-block" onClick={handleSubmit}> Login </button> 
                    </div> 
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;