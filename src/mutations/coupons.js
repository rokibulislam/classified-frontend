import { gql, useMutation } from '@apollo/client';

export const createCouponmutation = gql`
    mutation createCoupon ( $name: String! ){
        createCoupon (input: {
            name: $name,
        } ) {
            id
            name
        }
    }
`;

export const updateCouponmutation = gql`
    mutation updateCoupon( $id: ID!, $name: String!){
        updateCoupon (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deleteCouponmutation = gql`
    mutation deleteCoupon( $id: ID! ){
        deleteCoupon (id: $id) {
            id
            name
        }
    }
`;


export const useCreateCoupon = () => useMutation( createCouponmutation, {

})

export const useUpdateCoupon = () => useMutation( updateCouponmutation, {

})


export const useDeleteCoupon = () => useMutation( deleteCouponmutation, {

})