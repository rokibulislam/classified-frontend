import { gql, useMutation } from '@apollo/client';

export const createTagsmutation = gql`
    mutation createTags( $name: String! ){
        createTag(input: {
            name: $name,
        } ) {
            id
            name
        }
    }
`;

export const updateTagsmutation = gql`
    mutation updateTag( $id: ID!, $name: String! ){
        updateTag (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deleteTagsmutation = gql`
    mutation deleteTag( $id: ID! ){
        deleteTag (id: $id) {
            id
            name
        }
    }
`;

export const useCreateTags = () => useMutation( createTagsmutation, {

})

export const useUpdateTags = () => useMutation( updateTagsmutation, {

})


export const useDeleteTags = () => useMutation( deleteTagsmutation, {

})