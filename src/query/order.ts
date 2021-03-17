import { gql, useQuery } from '@apollo/client';

export const QueryOrders = gql`
  query GetOrders {
    orders {
      id
      name
    }
  }
`;

export const QueryOrder = gql`
  query getOrder( $id: ID!)  {
    order( id: $id ) {
      id
      name
    }
  }
`;

export const useOrdersQuery = () => useQuery( QueryOrders );
export const useOrderQuery  = ( options ) => useQuery( QueryOrder, options );