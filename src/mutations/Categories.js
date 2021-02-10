import { gql, useMutation } from '@apollo/client';

export const createCategoriesmutation = gql`
    mutation createCategory( $name: String!,  $description: String! ){
        createCategory (input: {
            name: $name,
            description: $description,
        } ) {
            id
            name
            description
        }
    }
`;

export const updateCategorymutation = gql`
    mutation updateCategory( $id: ID!, $name: String!, $description: String! ){
        updateCategory (id: $id, input: {
            name: $name
            description: $description
        } ) {
            id
            name
            description
        }
    }
`;

export const deleteCategorymutation = gql`
    mutation deleteCategory( $id: ID! ){
        deleteCategory (id: $id) {
            id
            name
            description
        }
    }
`;


export const useCreateCategories = () => useMutation( createCategoriesmutation, {

})

export const useUpdateCategories = () => useMutation( updateCategorymutation, {

})


export const useDeleteCategories = () => useMutation( deleteCategorymutation, {

})