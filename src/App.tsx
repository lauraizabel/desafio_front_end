import React from 'react';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from './styles/global';
import HttpClient from './api/httpClient';
import BlockLoadingProvider from './contexts/BlockLoaderContext';
import Routes from './routes';

function App() {
  return (
    <ApolloProvider client={HttpClient}>
      <GlobalStyle />
      <BlockLoadingProvider>
        <Routes />
      </BlockLoadingProvider>
    </ApolloProvider>
  );
}

export default App;
