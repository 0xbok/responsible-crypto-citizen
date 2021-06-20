import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './index.css';
import AaveApp from './component/aave/App';
import CompoundApp from './component/compound/App';


const aaveClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/aave/governance-v2',
  cache: new InMemoryCache()
});

const compoundClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/protofire/compound-governance',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={aaveClient}>
    <AaveApp />
  </ApolloProvider>,
  document.getElementById('AaveList')
);

ReactDOM.render(
  <ApolloProvider client={compoundClient}>
    <CompoundApp />
  </ApolloProvider>,
  document.getElementById('CompoundList')
);