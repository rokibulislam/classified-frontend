import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { createPackagemutation } from '../../mutations/Package' 
import { QueryPackages } from '../../query/package'

const PackageCreate: React.FC<{}> = ( props  ) => {
    const [state , setState] = useState({
        name : "",
        amount : "",
        duration: "",
        allowedpost: "",
        error: {}
    })
    
    const [createPackage, { data }] = useMutation( createPackagemutation, {
        refetchQueries: [ { query: QueryPackages } ],
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/packages');
        }
    } );

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createPackage({
            variables: {
                name: state.name,
                amount: state.amount,
                duration: state.duration,
                allowedpost: state.allowedpost,
            }
        })
    }

    return (
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
                    <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Package </button> 
                </div> 
            </form>
        </AdminLayout>
    )
}

export default PackageCreate;