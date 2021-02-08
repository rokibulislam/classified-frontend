import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import { signupmutation } from '../mutations/Signup'

const Register = ( props ) => {

    const [state , setState] = useState({
        name: "",
        email : "",
        password : "",
        error: {}
    })

    const [signup, { data }] = useMutation(signupmutation);

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
                "name":  state.name,
                "email":  state.email,
                "password":state.password,
            }

            console.log( payload );
          
            signup({
                variables: {
                    name: payload.name, 
                    email: payload.email, 
                    password: payload.password 
                }
            }).then( (result) => {
               props.history.push('/');

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
            <form className="loginform"> 
                <div className="form-group">
                    <label> Name  </label>
                    <input type="name" className="form-control" name="name" placeholder="Enter Your Name" 
                        value={state.name} onChange={handleChange}
                    />
                </div>
                <div className="form-group">
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

                <div className="form-group">
                    <button type="submit" className="btn btn-primary"  onClick={handleSubmit}> Register  </button>  
                </div>
            </form>
        </div>
    </div>
        </>
    )
}

export default withRouter(Register);