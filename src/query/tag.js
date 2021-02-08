import { gql } from '@apollo/client';

export const QueryTags = gql`
    query GetTags {
        tags {
            id
            name
        }
    }
`;