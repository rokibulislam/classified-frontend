import { gql } from '@apollo/client';

export const createPostmutation = gql`
    mutation createPost( $title: String!, $body: String! ){
        createPost (input: {
            title: $title,
            body:  $body
        } ) {
            title
            body
        }
    }
`;

export const updatePostmutation = gql`
    mutation updatePost( $title: String!, $body: String! ){
        updatePost (id: $id, input: {
            title: $title,
            body:  $body
        } ) {
            id
            title
            body
        }
    }
`;

export const deletePostmutation = gql`
    mutation deletePost( $id: ID! ){
        deletePost (id: $id) {
            id
            title
            body
        }
    }
`;