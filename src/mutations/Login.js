import { gql, useMutation } from '@apollo/client';

export const loginmutation = gql`
  mutation login( $email: String!, $password: String! ) {
    login (input: {
        email: $email,
        password: $password
    }) {
        token
    }
  }
`;
