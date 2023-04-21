import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { PersonajeComponent } from './components/Personaje/PersonajeComponent';


/* Esta es una instancia de Apollo Client a la API de Rick and Morty */
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <PersonajeComponent/>
    </ApolloProvider>
  );
}

export default App; 
