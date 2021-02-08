import { gql } from '@apollo/client';

export const QueryCategories = gql`
    query GetCategories {
        categories {
            id
            name
        }
    }
`;