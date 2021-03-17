import { gql, useMutation } from '@apollo/client';

export const createReviewmutation = gql`
    mutation createReview ( $name: String!, $rating: String!, $comment: String! ){
        createReview (input: {
            name: $name,
            rating: $rating,
            comment: $comment,
        } ) {
            id
            name
            rating,
            comment
        }
    }
`;

export const updateReviewmutation = gql`
    mutation updateReview( $name: String! ){
        updateReview (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deleteReviewmutation = gql`
    mutation deleteReview( $id: ID! ){
        deleteReview (id: $id) {
            id
            name
        }
    }
`;

export const useCreateReview = () => useMutation( createReviewmutation, {

})

export const useUpdateReview = () => useMutation( updateReviewmutation, {

})


export const useDeleteReview = () => useMutation( deleteReviewmutation, {

})