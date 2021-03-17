import { gql, useMutation } from '@apollo/client';

export const createPostmutation = gql`
    mutation createPost( $title: String!, $body: String!, $categories: String, $tags: String,
            $brands: String
        ){
        createPost (input: {
            title: $title,
            body:  $body
            category: $categories,
            tag: $tags,
            brand: $brands
        } ) {
            id
            title
            body
        }
    }
`;

export const updatePostmutation = gql`
    mutation updatePost( $id: ID!, $title: String!, $body: String!,
        $categories: String, $tags: String, $brands: String ) {
        updatePost ( id: $id, input: {
            title: $title,
            body:  $body,
            category: $categories,
            tag: $tags,
            brand: $brands
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

export const bulkdeletePostmutation = gql`
    mutation bulkdeletePost ( $id: [ ID! ]) {
        bulkdeletePost (id: $id ) {
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