import { gql, useQuery } from '@apollo/client';

export const QueryUsersWithoutPagination = gql`
  query GetUsers( $cursor: String ) {
    users(cursor: $cursor)  {
      id
      name
    }
  }
`;

export const QueryUsers = gql`
  query GetUsers( $cursor: String ) {
    users(cursor: $cursor) {
      userFeed {
        id
        name
        email
        posts {
          id 
          title
        }
      }
      pageInfo {
        nextPageCursor,
        hasNextPage
      }
    }
  }
`;

export const QueryUser = gql`
  query getUser( $id: ID!)  {
    post( id: $id ) {
        id
        name
    }
  }
`;

/*
export const QueryPOSTBYCATEGORY = gql`
  query getPostByCategory() {
    PostByCategory(){

    }
  }
`;

export const QueryPOSTBYTAG = gql`
  query getPostByTag() {
    PostByTag(){

    }
  }
`;

export const QueryPOSTBYBRAND = gql`
  query getPostByBrand() {
    PostByBrand(){

    }
  }
`;
*/

export const useUsersQuery = () => useQuery( QueryUsers );
export const useUserQuery  = ( options ) => useQuery( QueryUser, options );

// export const useGetPostsByCategory = options => useQuery( QueryPOSTBYCATEGORY, options )
// export const useGetPostsByTag   = options => useQuery( QueryPOSTBYTAG, options )
// export const useGetPostsByBrand = options => useQuery( QueryPOSTBYBRAND, options )