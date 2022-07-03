import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  View,
} from 'react-native';
import SearchBar from 'react-native-platform-searchbar';
import CardTile from 'src/components/CardTile';
import { Card } from 'src/domain/models/CardResponse';
import { useHomeNavigation } from 'src/domain/models/NavigationTypes';
import useCards from 'src/hooks/useCards';
import styles from './SearchScreen.styles';

const SearchScreen = () => {
  const [value, setValue] = useState('');
  const { useSearchCard } = useCards();
  const { isLoading, data, refetch } = useSearchCard(value);
  const navigation = useHomeNavigation();

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onCancel = () => {
    navigation.goBack();
  };

  const renderCard = ({ item }: ListRenderItemInfo<Card>) => {
    return <CardTile item={item} />;
  };

  useEffect(() => {
    if (value.length > 3) {
      refetch();
    }
  }, [refetch, value.length]);

  return (
    <SafeAreaView style={styles.searchBarContainer}>
      <View style={styles.searchBarbody}>
        <SearchBar
          style={styles.inputSearchStyle}
          placeholder="Search"
          value={value}
          theme="light"
          platform="ios"
          autoFocus={true}
          onCancel={onCancel}
          onChangeText={onChangeText}
          returnKeyType="search"
        >
          {isLoading ? (
            <ActivityIndicator style={{ marginRight: 10 }} />
          ) : undefined}
        </SearchBar>
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
