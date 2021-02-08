import { gql } from '@apollo/client';

export const QueryComplains = gql`
    query GetComplains {
        complains {
            description
        }
    }
`;