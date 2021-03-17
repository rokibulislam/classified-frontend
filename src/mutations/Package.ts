import { gql, useMutation } from '@apollo/client';

export const createPackagemutation = gql`
    mutation createPackage ( $name: String!, 
        $amount: String!,
        $duration: String!,
        $allowedpost: String!
    ) {
        createPackage (input: {
            name: $name,
            amount: $amount,
            duration: $duration,
            allowedpost: $allowedpost,
        } ) {
            id
            name
            amount
            duration
            allowedpost
        }
    }
`;

export const updatePackagemutation = gql`
    mutation updatePackage( $id: ID! $name: String!,$amount: String!,
        $duration: String!,
        $allowedpost: String! ){
        updatePackage (id: $id, input: {
            name: $name,
            amount: $amount,
            duration: $duration,
            allowedpost: $allowedpost,
        } ) {
            id
            name
            amount
            duration
            allowedpost
        }
    }
`;

export const deletePackagemutation = gql`
    mutation deletePackage( $id: ID! ){
        deletePackage (id: $id) {
            id
            name
            amount
            duration
            allowedpost
        }
    }
`;


export const useCreatePackage = () => useMutation( createPackagemutation, {

})

export const useUpdatePackage = () => useMutation( updatePackagemutation, {

})


export const useDeletePackage = () => useMutation( deletePackagemutation, {

})