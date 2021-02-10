import { gql, useQuery } from '@apollo/client';

export const QueryReviews = gql`
  query GetBrands {
    brands {
      id
      name
    }
  }
`;

export const QueryReview = gql`
  query getBrand( $id: ID!)  {
    brand( id: $id ) {
      id
      name
    }
  }
`;

export const useReviewssQuery = () => useQuery( QueryReviews );
export const useReviewQuery   = ( options ) => useQuery( QueryReview, options );