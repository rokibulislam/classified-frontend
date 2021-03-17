export const updateProfilemutation = gql`
    mutation updateProfile( $name: String! ){
        updateProfile (id: $id, input: {
            name: $name
        } ) {
            id
            name
        }
    }
`;