import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom'
import { QueryPosts } from '../query/post'
import { deletePostmutation } from '../mutations/Post'

const Posts = () => {
    let history = useHistory();
    const { loading, error, data } = useQuery(QueryPosts);
    const [ deletePost ] = useMutation( deletePostmutation, {
        refetchQueries: [ { query: QueryPosts } ],
        onError: (error) => {
            console.log('error');
        },

        update: (store, response) => {
            console.log( response );
        }
    } );
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const onDelete = (id) => {
        deletePost({
            variables: {
                id: id
            }
        })
    }

    return (
      <>
        <Link className="btn btn-success" to="/admin/posts/create"> create post </Link>

        <table class="table">
            <thead>
                <tr>
                    <th> title </th>
                    <th> body  </th>
                    <th> Action </th>  
                </tr>
            </thead>

            <tbody>
                {
                    data.posts.map( ( { id, title, body } ) => {
                        return (
                            <>
                                <tr key={id}>
                                   <td> {title} </td>
                                   <td> {body} </td>
                                   <td>
                                        <button className="btn btn-danger" onClick={() => { onDelete(id)}}> Delete </button>
                                        <Link className="btn btn-primary" to={`/admin/posts/${id}/edit`}> Edit </Link>
                                    </td>
                                </tr> 
                            </>
                        )
                    })
                } 
            </tbody>
        </table>
      </>
    )
}

export default Posts;