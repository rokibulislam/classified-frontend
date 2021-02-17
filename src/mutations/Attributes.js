import { gql, useMutation } from '@apollo/client';

export const createAttributemutation = gql`
    mutation createAttribute ( $name: String! ){
        createAttribute (input: {
            name: $name,
        } ) {
            id
            name
        }
    }
`;

export const updateAttributemutation = gql`
    mutation updateAttribute( $id: ID!, $name: String!){
        updateAttribute (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deleteAttributemutation = gql`
    mutation deleteAttribute( $id: ID! ){
        deleteAttribute (id: $id) {
            id
            name
        }
    }
`;


export const useCreateAttribute = () => useMutation( createAttributemutation, {

})

export const useUpdateAttribute = () => useMutation( updateAttributemutation, {

})


export const useDeleteAttribute = () => useMutation( deleteAttributemutation, {

})