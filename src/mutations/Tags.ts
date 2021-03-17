import { gql, useMutation } from '@apollo/client';

export const createTagsmutation = gql`
    mutation createTags( $name: String!, $description: String! ){
        createTag(input: {
            name: $name,
            description: $description
        } ) {
            id
            name
            description
        }
    }
`;

export const updateTagsmutation = gql`
    mutation updateTag( $id: ID!, $name: String!, $description: String! ){
        updateTag (id: $id, input: {
            name: $name
            description: $description
        } ) {
            id
            name
            description
        }
    }
`;

export const deleteTagsmutation = gql`
    mutation deleteTag( $id: ID! ){
        deleteTag (id: $id) {
            id
            name
            description
        }
    }
`;

export const useCreateTags = () => useMutation( createTagsmutation, {

})

export const useUpdateTags = () => useMutation( updateTagsmutation, {

})


export const useDeleteTags = () => useMutation( deleteTagsmutation, {

})