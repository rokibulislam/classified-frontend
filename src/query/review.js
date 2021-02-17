import { gql, useQuery } from '@apollo/client';

export const QueryReviews = gql`
  query GetReviews {
    reviews {
      id
      name
      rating
      comment
    }
  }
`;

export const QueryReview = gql`
  query getReview( $id: ID!)  {
    review( id: $id ) {
      id
      name
    }
  }
`;

export const useReviewssQuery = () => useQuery( QueryReviews );
export const useReviewQuery   = ( options ) => useQuery( QueryReview, options );