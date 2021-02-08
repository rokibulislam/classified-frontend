import { gql } from '@apollo/client';

export const createCategoriesmutation = gql`
    mutation createCategories( $name: String! ){
        createCategory (input: {
            name: $name,
        } ) {
            id
            name
        }
    }
`;

export const updateCategorymutation = gql`
    mutation updateCategory( $name: String! ){
        updateCategory (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deleteCategorymutation = gql`
    mutation deleteCategory( $id: String! ){
        deleteCategory (id: $id) {
            id
            name
        }
    }
`;