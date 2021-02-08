import { gql, useQuery } from '@apollo/client';

export const QueryPosts = gql`
  query GetPosts {
    posts{
      id
      title
    }
  }
`;

export const QueryPost = gql`
  query getPost( $id: ID!)  {
    post( id: $id ) {
      id
      title
      body
    }
  }
`;

export const usePostsQuery = () => useQuery(QueryPosts);