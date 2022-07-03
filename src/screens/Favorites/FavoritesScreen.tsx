import React from 'react';
import { View, SafeAreaView, FlatList, ListRenderItemInfo } from 'react-native';
import CardTile from 'src/components/CardTile';
import { Card } from 'src/domain/models/CardResponse';
import { useFavorites } from 'src/hooks/useFavorites';
import styles from '../Home/HomeScreen.styles';

const FavoritesScreen = () => {
  const { state } = useFavorites();
  const renderCard = ({ item }: ListRenderItemInfo<Card>) => {
    return <CardTile item={item} />;
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={state.favorites}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
