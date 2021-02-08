import { gql } from '@apollo/client';

export const createTagsmutation = gql`
    mutation createTags( $name: String! ){
        createTag(input: {
            name: $name,
        } ) {
            id
            name
        }
    }
`;

export const updateTagsmutation = gql`
    mutation updateTags( $name: String! ){
        updateTags (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;

export const deleteTagsmutation = gql`
    mutation deleteTag( $id: ID! ){
        deleteTag (id: $id) {
            id
            name
        }
    }
`;