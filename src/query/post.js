import { gql } from '@apollo/client';

export const QueryPosts = gql`
  query GetPosts {
    posts{
      id
      title
    }
  }
`;

