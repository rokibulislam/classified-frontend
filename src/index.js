import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation } from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './routes'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
