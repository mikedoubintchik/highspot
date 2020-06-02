import React from "react";

export const initialState = {
  cards: [],
  page: 1,
  filter: false,
  filteredCards: [],
};

const filterCards = (cards, filter) => {
  if (filter) {
    return cards.filter((card, index) =>
      card.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else return [];
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        cards: [],
        page: 1,
        filter: false,
        filteredCards: [],
      };
    case "updateCards":
      return { ...state, cards: [...state.cards, ...action.cards] };
    case "nextPage":
      return { ...state, page: state.page + 1 };
    case "filterCards":
      return {
        ...state,
        filter: action.filter,
        filteredCards: filterCards(state.cards, action.filter),
      };
    default:
      return state;
  }
};

export const Context = React.createContext();
