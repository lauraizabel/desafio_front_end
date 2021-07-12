import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const customFetch = (uri: any, options: any) => {
  const { query, operationName } = JSON.parse(options.body);
  const formattedQuery = query.replace(`query ${operationName}`, '');
  return fetch(
    `${uri}?query=${formattedQuery}&token=7s5txcu909kwc48wookgw8g00occokk`,
    options,
  );
};

const link = from([
  new HttpLink({ uri: process.env.REACT_APP_API, fetch: customFetch }),
]);

const HttpClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default HttpClient;
