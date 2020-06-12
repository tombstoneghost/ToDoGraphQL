import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import  ApolloClient  from 'apollo-boost';
import  { ApolloProvider }  from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://todo-list-app-task.herokuapp.com/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'Hasura_Pass'
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;