import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { QueryPost, QueryPosts } from '../../query/post'
import { updatePostmutation } from '../../mutations/Post'

const PostEdit = ( props  ) => {
    const [state , setState] = useState({
        title : "",
        body : "",
        error: {}
    })

    let { id } = useParams();

    const [ updatePost, mutationResult ] = useMutation( updatePostmutation, {
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/posts');
        }
    } )

    const { loading, error, data } = useQuery(QueryPost, {
        variables: { id },
        onCompleted: ( data ) => {
            setState(prevState => ({
                ...prevState,
                title : data.post.title,
                body: data.post.body
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
        
        updatePost({
            variables: {
                title: state.title,
                body:  state.body,
                id: id
            }
        })
    }
    
    if (loading) return null;
    if (error) return `Error! ${error}`;

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

                            <div className="form-group">
                                <label> Body  </label>
                                <input type="text" className="form-control" name="body" placeholder="Enter Your Body" 
                                    value={state.body} onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
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