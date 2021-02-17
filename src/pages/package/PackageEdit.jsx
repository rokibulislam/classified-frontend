import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { updatePackagemutation } from '../../mutations/Package'
import { QueryPackage } from '../../query/package'

const PackageEdit = ( props  ) => {
    const [state , setState] = useState({
        name : "",
        amount : "",
        duration: "",
        allowedpost: "",
        error: {}
    })

    let { id } = useParams();

    const [ updatePackage, mutationResult ] = useMutation( updatePackagemutation, {
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/packages');
        }
    })
    
    const { loading, error, data } = useQuery(QueryPackage, {
        variables: { id },
        onCompleted: ( data ) => {
            setState(prevState => ({
                ...prevState,
                name     : data.package.name,
                amount   : data.package.amount,
                duration : data.package.duration,
                allowedpost : data.package.allowedpost
            }))
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
        
        updatePackage({
            variables: {
                name: state.name,
                amount: state.amount,
                duration: state.duration,
                allowedpost: state.allowedpost,
                id: id
            }
        })
    }

    if (loading) return null;
    if (error) return `Error! ${error}`;


    return (
        <>
            <AdminLayout>
                <form className="loginform">     
                
                    <div className="form-group">
                        <label> Name  </label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Name" 
                            value={state.name} onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label> Amount  </label>
                        <input type="text" className="form-control" name="amount" placeholder="Enter Amount" 
                            value={state.amount} onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label> Duration  </label>
                        <input type="text" className="form-control" name="duration" placeholder="Enter Duration" 
                            value={state.duration} onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label> Allowed Post  </label>
                        <input type="text" className="form-control" name="allowedpost" placeholder="Enter Allowed Post" 
                            value={state.allowedpost} onChange={handleChange } 
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Category </button> 
                    </div> 
                </form> 
            </AdminLayout>
        </>
    )
}

export default PackageEdit