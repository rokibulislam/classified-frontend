import React, { Component, memo } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { QueryUser,QueryUsers } from '../query/user'

const Users = () => {
    let history = useHistory();
    const { t } = useTranslation();
    const { loading, error, data, fetchMore } = useQuery(QueryUsers);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const renderUsers = () => {
        return  data.users.userFeed.map( ( { id, name, email, posts } ) => {
            return (
                <>
                    <tr key={id}>
                       <td> { name } </td>
                       <td> { email } </td>
                       <td> { posts.length } </td>
                    </tr> 
                </>
            )
        })
    } 

    return (
      <> 
        <table class="table">
            <thead>
                <tr>
                    <th> { t('name') } </th>
                    <th> { t('email') } </th>
                    <th> { t('post count') } </th>
                </tr>
            </thead>

            <tbody>
                {
                    renderUsers()
                } 
            </tbody>
        </table>
        
        { 
            data.users.pageInfo.hasNextPage ? (
                (
                <button onClick= { () => {
                    const { nextPageCursor } = data.users.pageInfo
                    fetchMore({
                        variables: { cursor: nextPageCursor },
                        updateQuery: ( prevResult, { fetchMoreResult } ) => {
                            
                            fetchMoreResult.users.userFeed = [
                                ...prevResult.users.userFeed,
                                ...fetchMoreResult.users.userFeed
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

export default memo( Users );