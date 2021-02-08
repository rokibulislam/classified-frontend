import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import AdminLayout from '../../layout/AdminLayout'
import { QueryPost } from '../../query/post'

const PostEdit = ( props  ) => {
    
    const [state , setState] = useState({
        title : "",
        body : "",
        error: {}
    })

    let { id } = useParams();

    const { loading, error, data } = useQuery(QueryPost, {
        variables: { id },
    });

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = () => {

    }
    
    if (loading) return null;
    if (error) return `Error! ${error}`;

    
    setState(prevState => ({
        ...prevState,
        title : data.post.title
    }))
    

    return (
        <>
            <AdminLayout>
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-offset-4 col-md-4">
                        <form className="loginform"> 
                            <div className="form-group">
                                <label> Title  </label>
                                <input type="text" className="form-control" name="title" placeholder="Enter Your Title" 
                                    value={state.title} onChange={handleChange}
                                />
                            </div>

                            <div class="form-group">
                                <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Post </button> 
                            </div> 
                        </form>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default PostEdit