import React, { Component } from 'react'
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryPosts } from '../query/post'

const Posts = () => {
    const { loading, error, data } = useQuery(QueryPosts);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        
    return (
      <>
        <Link to="/admin/create-post"> create post </Link>
        {
          data.posts.map( ( { id, title } ) => <div key={id}>{title} </div> )
        } 
      </>
    )
}

export default withRouter(Posts);