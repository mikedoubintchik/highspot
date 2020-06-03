import React, { useContext } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { Context } from '../store';

const Filter = () => {
  const { store, dispatch } = useContext(Context);

  const filterCards = (cards, filter) => {
    if (filter) {
      return cards.filter((card) =>
        // TODO: build a more robust search/filter
        card.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    return [];
  };

  const handleChange = (e) => {
    const filter = e.target.value;
    const filteredCards = filterCards(store.cards, filter);

    dispatch({ type: 'updateFilter', filter });

    dispatch({
      type: 'filterCards',
      filteredCards,
    });
  };

  return (
    <FormGroup>
      <Input
        type="text"
        name="filter"
        id="filter"
        placeholder="Filter by Name"
        value={store.filter}
        onChange={handleChange}
      />
    </FormGroup>
  );
};

export default Filter;
