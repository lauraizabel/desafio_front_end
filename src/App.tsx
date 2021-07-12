import React from 'react';
import { ApolloProvider } from '@apollo/client';
import RegistrationFilling from './pages/RegistrationFilling';
import GlobalStyle from './styles/global';
import HttpClient from './api/httpClient';

import BlockLoadingProvider from './contexts/BlockLoaderContext';

function App() {
  return (
    <ApolloProvider client={HttpClient}>
      <GlobalStyle />
      <BlockLoadingProvider>
        <RegistrationFilling />
      </BlockLoadingProvider>
    </ApolloProvider>
  );
}

export default App;
