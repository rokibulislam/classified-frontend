import React, { memo } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { QueryReviews } from '../query/review'
import { deleteReviewmutation } from '../mutations/review'

const Reviews: React.FC<{}> = ( props ) => {
    const { loading, error, data } = useQuery(QueryReviews);
    
    const [ deleteReview ] = useMutation( deleteReviewmutation, {
        refetchQueries: [ { query: QueryReviews } ],
        onError: (error) => {
            console.log('error');
        },

        update: (store, response) => {
            console.log( response );
        }
    } );

    const onDelete = ( id ) => {
        deleteReview({
            variables: {
                id: id
            }
        })
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
        <table class="table">
            <thead>
                <tr>
                    <th> name </th>
                    <th> rating  </th>
                    <th> comment  </th>
                    <th> Action </th>  
                </tr>
            </thead>

            <tbody>
                {
                    data.reviews.map( ( { id, name, rating, comment } ) => {
                        return (
                            <>
                                <tr key={id}>
                                <td> {name} </td>
                                <td> {rating} </td>
                                <td> {comment} </td>
                                <td>
                                        <button className="btn btn-danger" onClick={() => { onDelete(id)}}> Delete </button>
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

export default memo( Reviews );