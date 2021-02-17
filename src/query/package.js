import { gql, useQuery } from '@apollo/client';

export const QueryPackages = gql`
    query GetPackages {
      packages {
          id
          name
          amount
          duration
          allowedpost
      }
    }
`;

export const QueryPackage = gql`
  query getPackage( $id: ID!)  {
    package( id: $id ) {
      id
      name
      amount
      duration
      allowedpost
    }
  }
`;

export const usePackagesQuery = () => useQuery( QueryPackages );
export const usePackageQuery  = ( options ) => useQuery( QueryPackage, options );