import { RouteProp, useNavigation } from '@react-navigation/native';
import { ROUTES } from 'src/navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from './CardResponse';

export type HomeStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.Search]: undefined;
  [ROUTES.Details]: {
    item: Card;
    color: string;
  };
  [ROUTES.Favorites]: undefined;
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

export const useHomeNavigation = () =>
  useNavigation<StackNavigationProp<HomeStackParamList>>();
