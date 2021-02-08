import { gql, useMutation } from '@apollo/client';

export const signupmutation = gql`
  mutation signup( $name:  String!, $email: String!, $password: String! ) {
    signup (input: {
        name: $name,
        email: $email,
        password: $password
    }) {
        id
        name
    }
  }
`;

