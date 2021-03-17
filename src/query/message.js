import { gql, useQuery } from '@apollo/client';

const messagesQuery = gql`
    query MessageQuery {
        messages {
            id
            from
            text
        }
    }
`;

const addMessageMutation = gql`
    mutation AddMessageMutation( $input: MessageInput! ) {
        message: addMessage(input: $input ) {
            id
            from
            text
        }
    }

`;