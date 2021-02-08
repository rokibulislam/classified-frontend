import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryCategories } from '../query/category'
import { deleteCategorymutation } from '../mutations/Categories'

const Categories = () => {
    const { loading, error, data } = useQuery(QueryCategories);
    const [ deleteCategory ] = useMutation( deleteCategorymutation );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {

        deleteCategory(
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
            <Link to="/admin/categories/create"> create Categories </Link>
            {
                data.categories.map( ( { id, name } ) => {
                    return (
                        <>
                            <div key={id}>
                                {name} 
                                <button onClick={() => { onDelete(id)}}> Delete </button>
                                <Link to={`/admin/categories/${id}/edit`}> Edit</Link>
                            </div> 
                        </>
                    )
                })
            } 
        </>
    )
}

export default withRouter(Categories);