import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { loginmutation } from '../mutations/Login' 
import http from '../services/httpService'

const Login = ( props ) => {

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

    const handleSubmit = ( e ) => {
        e.preventDefault();

        try {
            const payload = {
                "email":  state.email,
                "password":state.password,
            }

            login({
                variables: {
                    email: payload.email, 
                    password: payload.password 
                }
            }).then( (response) => {
            let token = response.data.login.token 
            localStorage.setItem('auth_token', token)
            http.setAuthToken(token)
              
            props.history.push('/');

            }).catch(function(error) {
                setState(prevState => ({
                    ...prevState,
                    error: error.message,
                }))
            });

            console.log( test );

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
                <form className="loginform"> 
                    
                    <div class="form-group">
                        <label> Email  </label>
                        <input type="email" className="form-control" name="email" placeholder="Enter Your Email" 
                            value={state.email} onChange={handleChange}
                        />
                    </div>

                    <div class="form-group">
                        <label> Password  </label>
                        <input type="password" className="form-control" name="password" placeholder="Enter Your Password"   
                            value={state.password} onChange={handleChange}
                        />
                    </div>

                    <div class="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Login </button> 
                    </div> 
                </form>
            </div>
        </div>
        </>
    )
}

export default withRouter(Login);