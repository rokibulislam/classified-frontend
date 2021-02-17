import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider,ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes'
import { getJwt } from './services/authService'
import './i18n';
// const httpLink = new HttpLink({ uri: "http://localhost:3001/graphql" });

const authLink = setContext((_, { headers }) => {
  const token = getJwt();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const httpLink = createHttpLink({
  uri: 'http://localhost:3002/graphql',
});

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);