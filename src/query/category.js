import { gql, useQuery } from '@apollo/client';

export const QueryCategories = gql`
    query GetCategories {
        categories {
            id
            name
            description
        }
    }
`;


export const QueryCategory = gql`
  query getCategory( $id: ID!)  {
    category( id: $id ) {
      id
      name
      description
    }
  }
`;


export const useCategoriesQuery = () => useQuery( QueryCategories );
export const useBrandQuery  = ( options ) => useQuery( QueryCategory, options );