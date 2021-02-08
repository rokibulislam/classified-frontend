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


export const useLoginMutation = ( email, password ) => {
    console.log( email );
    console.log('mutation');
    const [mutation, mutationResults] = useMutation(loginmutation, {
      onCompleted: (data) => {
        console.log('on complete');
        console.log( data);
      },
    });

      // full login function
    const login = (email, password) => {
      return mutation({
        variables: {
          email: email,
          password,
        },
      });
    }
    
    return [login, mutationResults]
}