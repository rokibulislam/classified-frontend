import { gql, useQuery } from '@apollo/client';

export const QueryBrands = gql`
  query GetBrands {
    brands {
      id
      name
      description
    }
  }
`;

export const QueryBrand = gql`
  query getBrand( $id: ID!)  {
    brand( id: $id ) {
      id
      name
      description
    }
  }
`;

export const useBrandsQuery = () => useQuery(QueryBrands);
export const useBrandQuery  = ( options ) => useQuery( QueryBrand, options );