import { gql, useMutation } from '@apollo/client';

export const createComplainmutation = gql`
    mutation createComplain ( $description: String! ){
        createComplain (input: {
            description: $description,
        } ) {
            id
            description
        }
    }
`;

export const updateComplainmutation = gql`
    mutation updateComplain( $id: ID!, $description: String! ){
        updateComplain (id: $id, input: {
            description: $description
        } ) {
            id
            description
        }
    }
`;

export const deleteComplainmutation = gql`
    mutation deleteComplain( $id: ID! ){
        deleteComplain (id: $id) {
            id
            description
        }
    }
`;

export const useCreateComplain = () => useMutation( createComplainmutation, {

})

export const useUpdateComplain = () => useMutation( updateComplainmutation, {

})


export const useDeleteComplain = () => useMutation( deleteComplainmutation, {

})