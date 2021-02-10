import { gql, useMutation } from '@apollo/client';

export const createPackagemutation = gql`
    mutation createPackage ( $name: String! ){
        createPackage (input: {
            name: $name,
        } ) {
            id
            name
        }
    }
`;

export const updatePackagemutation = gql`
    mutation updatePackage( $id: ID! $name: String! ){
        updatePackage (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deletePackagemutation = gql`
    mutation deletePackage( $id: ID! ){
        deletePackage (id: $id) {
            id
            name
        }
    }
`;


export const useCreatePackage = () => useMutation( createPackagemutation, {

})

export const useUpdatePackage = () => useMutation( updatePackagemutation, {

})


export const useDeletePackage = () => useMutation( deletePackagemutation, {

})