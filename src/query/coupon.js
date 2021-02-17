import { gql, useQuery } from '@apollo/client';

export const QueryCoupons = gql`
  query GetCoupons {
    coupons {
      id
      name
    }
  }
`;

export const QueryCoupon = gql`
  query getCoupon( $id: ID!)  {
    coupon( id: $id ) {
      id
      name
    }
  }
`;

export const useCouponsQuery = () => useQuery( QueryCoupons );
export const useCouponQuery  = ( options ) => useQuery( QueryCoupon, options );