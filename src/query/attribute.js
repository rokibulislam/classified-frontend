import { gql, useQuery } from '@apollo/client';

export const QueryAttributes = gql`
  query GetAttributes {
    attributes {
      id
      name
    }
  }
`;

export const QueryAttribute = gql`
  query getAttribute( $id: ID!)  {
    attribute( id: $id ) {
      id
      name
    }
  }
`;

export const useAttributesQuery = () => useQuery( QueryAttributes );
export const useAttributeQuery  = ( options ) => useQuery( QueryAttribute, options );