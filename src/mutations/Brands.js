import { gql, useMutation } from '@apollo/client';

export const createBrandmutation = gql`
    mutation createBrand ( $name: String!, $description: String! ){
        createBrand (input: {
            name: $name,
            description: $description
        } ) {
            id
            name
            description
        }
    }
`;

export const updateBrandmutation = gql`
    mutation updateBrand( $id: ID!, $name: String!, $description: String! ){
        updateBrand (id: $id, input: {
            name: $name
            description: $description
        } ) {
            id
            name
            description
        }
    }
`;

export const deleteBrandmutation = gql`
    mutation deleteBrand( $id: ID! ){
        deleteBrand (id: $id) {
            id
            name
            description
        }
    }
`;


export const useCreateBrand = () => useMutation( createBrandmutation, {

})

export const useUpdateBrand = () => useMutation( updateBrandmutation, {

})


export const useDeleteBrand = () => useMutation( deleteBrandmutation, {

})