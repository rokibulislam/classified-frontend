import { gql, useQuery } from '@apollo/client';

export const QueryPostsWithoutPagination = gql`
  query GetPosts {
    posts{
      id
      title
      body
      category {
        id
        name
      }
      tag {
        id
        name
      }
      brand {
        id
        name
      }
      user {
        id
        name
      }
    }
  }
`;

export const QueryPosts = gql`
  query GetPosts( $cursor: String ) {
    posts(cursor: $cursor) {
      postFeed {
        id
        title
        body
        category {
          id
          name
        }
        tag {
          id
          name
        }
        brand {
          id
          name
        }
        user {
          id
          name
        }
      }
      pageInfo {
        nextPageCursor,
        hasNextPage
      }
    }
  }
`;

export const QueryPost = gql`
  query getPost( $id: ID!)  {
    post( id: $id ) {
      id
      title
      body
      category {
        id
        name
      }
      tag {
        id
        name
      }
      brand {
        id
        name
      }
      user {
        id
        name
      }
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

export const usePostsQuery = () => useQuery( QueryPosts );
export const usePostQuery  = ( options ) => useQuery( QueryPost, options );

// export const useGetPostsByCategory = options => useQuery( QueryPOSTBYCATEGORY, options )
// export const useGetPostsByTag   = options => useQuery( QueryPOSTBYTAG, options )
// export const useGetPostsByBrand = options => useQuery( QueryPOSTBYBRAND, options )