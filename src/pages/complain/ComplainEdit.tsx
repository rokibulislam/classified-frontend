import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { QueryComplain, QueryComplains } from '../../query/complain'
import { updateComplainmutation } from '../../mutations/Complain'

const ComplainEdit= ( props  ) => {
    let { id } = useParams();
    const [description, setDescription] = useState('');

    const { loading, error, data } = useQuery(QueryComplain, {
        variables: { id },
        onCompleted: ( data ) => setDescription( data.complain.description )
    });
    
    const [ updateComplain, mutationResult ] = useMutation( updateComplainmutation, {
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/complains')
            console.log( response );
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        updateComplain({
            variables: {
                description: description,
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
                        <input type="text" className="form-control" name="description" placeholder="Enter Name" 
                            value={description} onChange={ (e) => setDescription( e.target.value ) } 
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Complain </button> 
                    </div> 
                </form>
            </AdminLayout>
        </>
    )
}

export default ComplainEdit