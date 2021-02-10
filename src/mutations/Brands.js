import { gql, useMutation } from '@apollo/client';

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
    mutation updateBrand( $id: ID!, $name: String! ){
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


export const useCreateBrand = () => useMutation( createBrandmutation, {

})

export const useUpdateBrand = () => useMutation( updateBrandmutation, {

})


export const useDeleteBrand = () => useMutation( deleteBrandmutation, {

})