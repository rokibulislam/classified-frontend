import { gql, useMutation } from '@apollo/client';

export const createPostmutation = gql`
    mutation createPost( $title: String!, $body: String!, $categories: ID, $tags: ID,
            $brands: ID
        ){
        createPost (input: {
            title: $title,
            body:  $body
            categories: $categories,
            tags: $tags,
            brands: $brands
        } ) {
            id
            title
            body
        }
    }
`;

export const updatePostmutation = gql`
    mutation updatePost( $id: ID!, $title: String!, $body: String! ){
        updatePost ( id: $id, input: {
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

export const useCreatePost = () => useMutation( createPostmutation, {

})

export const useUpdatePost = () => useMutation( updatePostmutation, {

})


export const useDeletePost = () => useMutation( deletePostmutation, {

})