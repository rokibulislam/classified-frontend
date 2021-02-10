import { gql, useQuery } from '@apollo/client';

export const QueryPackages = gql`
    query GetPackages {
    packages {
        id
        name
    }
    }
`;

export const QueryPackage = gql`
  query getPackage( $id: ID!)  {
    package( id: $id ) {
      id
      name
    }
  }
`;

export const usePackagesQuery = () => useQuery( QueryPackages );
export const usePackageQuery  = ( options ) => useQuery( QueryPackage, options );