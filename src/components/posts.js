import React, { Component, memo } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { QueryPosts } from '../query/post'
import { deletePostmutation } from '../mutations/Post'

const Posts = () => {
    let history = useHistory();
    const { t } = useTranslation();
    const { loading, error, data, fetchMore } = useQuery(QueryPosts);
    const [ deletePost ] = useMutation( deletePostmutation, {
        refetchQueries: [ { query: QueryPosts } ],
        onError: (error) => {
            console.log('error');
        },

        update: (store, response) => {
            console.log( response );
        }
    } );

    console.log( data );
    console.log( error );

    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const onDelete = (id) => {
        deletePost({
            variables: {
                id: id
            }
        })
    }

    const renderPosts = () => {
        return  data.posts.postFeed.map( ( { id, title, body, category, tag, brand, user } ) => {
            return (
                <>
                    <tr key={id}>
                       <td> {title} </td>
                       <td> {body} </td>
                       <td> { category.map( item => item.name ) }  </td>
                       <td> { tag.map( item => item.name ) }  </td>
                       <td> { brand.map( item => item.name ) }  </td>
                       <td> { user.name } </td>
                       <td>
                            <button className="btn btn-danger" onClick={() => { onDelete(id)}}> { t('Delete') } </button>
                            <Link className="btn btn-primary" to={`/admin/posts/${id}/edit`}> { t('Edit') } </Link>
                        </td>
                    </tr> 
                </>
            )
        })
    } 

    return (
      <>
        <Link className="btn btn-success" to="/admin/posts/create"> create post </Link>

        <table class="table">
            <thead>
                <tr>
                    <th> { t('title') } </th>
                    <th> { t('body') }  </th>
                    <th> Category </th>
                    <th> tag </th>
                    <th> brand </th>
                    <th> Creator </th>
                    <th> { t('Action') } </th>  
                </tr>
            </thead>

            <tbody>
                {
                    renderPosts()
                } 
            </tbody>
        </table>
        { 
            data.posts.pageInfo.hasNextPage ? (
                (
                <button onClick= { () => {
                    const { nextPageCursor } = data.posts.pageInfo
                    fetchMore({
                        variables: { cursor: nextPageCursor },
                        updateQuery: ( prevResult, { fetchMoreResult } ) => {
                            
                            fetchMoreResult.posts.postFeed = [
                                ...prevResult.posts.postFeed,
                                ...fetchMoreResult.posts.postFeed
                            ];

                            return fetchMoreResult;
                        }   
                    })
                }}> { t('Load More') } </button>
                )
            ) : ''
        }
      </>
    )
}

export default memo(Posts);