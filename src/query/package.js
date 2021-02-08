import { gql } from '@apollo/client';

export const QueryPackages = gql`
    query GetPackages {
    packages {
        id
        name
    }
    }
`;