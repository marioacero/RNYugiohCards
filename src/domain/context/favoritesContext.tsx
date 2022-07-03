import React, { Dispatch, ReactNode, useReducer } from 'react';
import { Card } from '../models/CardResponse';

const initialState: State = {
  favorites: [],
};

type State = {
  favorites: Card[];
};

export type ContextData = {
  state: State;
  dispatch: Dispatch<Action>;
};

export type Action = { type: 'setFavorites'; payload: Card[] };

export const FavoriteContext = React.createContext<ContextData>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setFavorites':
      return { ...state, favorites: action.payload };
  }
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
};
