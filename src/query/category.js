import { gql, useQuery } from '@apollo/client';

export const QueryCategories = gql`
    query GetCategories {
        categories {
            id
            name
        }
    }
`;


export const QueryCategory = gql`
  query getCategory( $id: ID!)  {
    category( id: $id ) {
      id
      name
    }
  }
`;


export const useCategoriesQuery = () => useQuery(QueryCategories);