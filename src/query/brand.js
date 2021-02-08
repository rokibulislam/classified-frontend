import { gql } from '@apollo/client';

export const QueryBrands = gql`
  query GetBrands {
    brands {
      id
      name
    }
  }
`;