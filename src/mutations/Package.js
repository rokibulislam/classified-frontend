import { gql } from '@apollo/client';

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
    mutation updatePackage( $description: String! ){
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