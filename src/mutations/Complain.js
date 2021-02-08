import { gql } from '@apollo/client';

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
    mutation updateComplain( $description: String! ){
        updateComplain (id: $id, input: {
            description: $description
        } ) {
            id
            description
        }
    }
`;

export const deleteComplainmutation = gql`
    mutation deleteComplain( $id: String! ){
        deleteComplain (id: $id) {
            id
            description
        }
    }
`;