import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import Filter from './components/Filter';
import Grid from './components/Grid';
import { Context, initialState, reducer } from './store'; // global store

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <Container>
        <h1>Elder Scrolls Cards</h1>
        <Filter />
        <Grid />
      </Container>
    </Context.Provider>
  );
};

export default App;
