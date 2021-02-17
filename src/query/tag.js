import { gql, useQuery } from '@apollo/client';

export const QueryTags = gql`
    query GetTags {
        tags {
            id
            name
            description
        }
    }
`;

export const QueryTag = gql`
  query getTag( $id: ID!)  {
    tag( id: $id ) {
      id
      name
      description
    }
  }
`;

export const useTagsQuery  = () => useQuery( QueryTags );
export const useTagQuery   = ( options ) => useQuery( QueryTag, options );