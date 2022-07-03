import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useHomeNavigation } from 'src/domain/models/NavigationTypes';
import { ROUTES } from 'src/navigation/routes';
import { COLORS } from 'src/utils/colors';
import { SearchIcon } from 'src/utils/icons';
import styles from './SearchItem.styles';

const SearchItem = () => {
  const navigation = useHomeNavigation();

  const onPress = () => {
    navigation.navigate(ROUTES.Search);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <SearchIcon width={24} height={24} fill={COLORS.whiteSand} />
    </TouchableOpacity>
  );
};
export default SearchItem;
