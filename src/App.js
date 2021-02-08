import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Classified Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
