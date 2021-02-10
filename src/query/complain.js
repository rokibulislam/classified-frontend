import { gql, useQuery } from '@apollo/client';

export const QueryComplains = gql`
    query GetComplains {
        complains {
            id
            description
        }
    }
`;

export const QueryComplain = gql`
  query getComplain( $id: ID!)  {
    complain( id: $id ) {
      id
      description
    }
  }
`;

export const useComplainsQuery = () => useQuery( QueryComplains );
export const useComplainQuery  = ( options ) => useQuery( QueryComplain, options );
