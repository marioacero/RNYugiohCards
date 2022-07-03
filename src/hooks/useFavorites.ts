import { useContext } from 'react';
import { FavoriteContext } from 'src/domain/context/favoritesContext';

export const useFavorites = () => {
  const result = useContext(FavoriteContext);
  return result;
};
