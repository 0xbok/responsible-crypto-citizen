import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './index.css';
import App from './App';

const aaveClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/aave/governance-v2-kovan',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={aaveClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);