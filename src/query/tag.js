import { gql, useQuery } from '@apollo/client';

export const QueryTags = gql`
    query GetTags {
        tags {
            id
            name
        }
    }
`;

export const QueryTag = gql`
  query getTag( $id: ID!)  {
    tag( id: $id ) {
      id
      name
    }
  }
`;

export const useTagsQuery = () => useQuery(QueryTags);
