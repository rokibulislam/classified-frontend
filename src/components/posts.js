import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryPosts } from '../query/post'
import { deletePostmutation } from '../mutations/Post'

const Posts = () => {
    const { loading, error, data } = useQuery(QueryPosts);
    const [ deletePost ] = useMutation( deletePostmutation );
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const onDelete = (id) => {

    deletePost(
        {
            variables: {
                id: id
            }
        }).then( (response) => {
            console.log(response);

        }).catch(function(error) {
            console.log(error);
        });
    }

    return (
      <>
        <Link to="/admin/posts/create"> create post </Link>
        {
          data.posts.map( ( { id, title } ) => {
            return (
                <>
                    <div key={id}>
                        {title} 
                        <button onClick={() => { onDelete(id)}}> Delete </button>
                        <Link to={`/admin/posts/${id}/edit`}> Edit </Link>
                    </div> 
                </>
            )
        })
        } 
      </>
    )
}

export default withRouter(Posts);