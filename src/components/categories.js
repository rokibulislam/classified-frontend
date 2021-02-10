import React, { Component } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom'
import { QueryCategories } from '../query/category'
import { deleteCategorymutation } from '../mutations/Categories'

const Categories = () => {
  
    const { loading, error, data } = useQuery(QueryCategories);
  
    const [ deleteCategory ] = useMutation( deleteCategorymutation, {
        refetchQueries: [  {query: QueryCategories} ],
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            console.log( 'Delete' );
            console.log( response );
        }
    } );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onDelete = (id) => {

        deleteCategory({
            variables: {
                id: id
            }
        })
    }

    return (
        <>
            <Link className="btn btn-success" to="/admin/categories/create"> create Categories </Link>

            <table class="table">
                <thead>
                    <tr>
                        <th> name </th>
                        <th> description </th>
                        <th> Action </th>  
                    </tr>
                </thead>

                <tbody>
                    {
                        data.categories.map( ( { id, name, description } ) => {
                            return (
                                <>
                                    <tr key={id}>
                                        <td> {name} </td>
                                        <td> {description} </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => { onDelete(id)}}> Delete </button>
                                            <Link className="btn btn-primary" to={`/admin/categories/${id}/edit`}> Edit</Link>
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

export default withRouter(Categories);