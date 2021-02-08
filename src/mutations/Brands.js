import { gql } from '@apollo/client';

export const createBrandmutation = gql`
    mutation createBrand ( $name: String! ){
        createBrand (input: {
            name: $name,
        } ) {
            id
            name
        }
    }
`;

export const updateBrandmutation = gql`
    mutation updateBrand( $name: String! ){
        updateBrand (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deleteBrandmutation = gql`
    mutation deleteBrand( $id: ID! ){
        deleteBrand (id: $id) {
            id
            name
        }
    }
`;