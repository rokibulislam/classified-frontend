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