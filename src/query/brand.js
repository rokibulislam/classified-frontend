import { gql, useQuery } from '@apollo/client';

export const QueryBrands = gql`
  query GetBrands {
    brands {
      id
      name
    }
  }
`;

export const QueryBrand = gql`
  query getBrand( $id: ID!)  {
    brand( id: $id ) {
      id
      name
    }
  }
`;

export const useBrandsQuery = () => useQuery(QueryBrands);