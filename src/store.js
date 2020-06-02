import React from "react";

export const initialState = {
  cards: [],
  page: 1,
  filter: "",
  filteredCards: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        cards: [],
        page: 1,
        filter: "",
        filteredCards: [],
      };
    case "updateCards":
      return { ...state, cards: [...state.cards, ...action.cards] };
    case "nextPage":
      return { ...state, page: state.page + 1 };
    case "updateFilter":
      return {
        ...state,
        filter: action.filter,
      };
    case "filterCards":
      return {
        ...state,
        filteredCards: action.filteredCards,
      };
    default:
      return state;
  }
};

export const Context = React.createContext();
