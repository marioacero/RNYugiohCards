import React from 'react';
import { View, SafeAreaView, FlatList, ListRenderItemInfo } from 'react-native';
import CardTile from 'src/components/CardTile';
import Loading from 'src/components/Loading';
import { Card } from 'src/domain/models/CardResponse';
import useCards from 'src/hooks/useCards';
import styles from './HomeScreen.styles';

const HomeScreen = () => {
  const { data, isLoading, error } = useCards();

  const renderCard = ({ item }: ListRenderItemInfo<Card>) => {
    return <CardTile item={item} />;
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Loading isLoading={isLoading} />
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
