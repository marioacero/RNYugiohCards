import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import FavoriteButton from 'src/components/FavoriteButton';
import { HomeStackNavProps } from 'src/domain/models/NavigationTypes';
import { useFavorites } from 'src/hooks/useFavorites';
import { ROUTES } from 'src/navigation/routes';
import { ChevronDownIcon } from 'src/utils/icons';
import styles from './DetailsScreen.styles';

const DetailsScreen: FC<HomeStackNavProps<ROUTES.Details>> = ({
  navigation,
  route,
}) => {
  const { item, color } = route.params;
  const { dispatch, state } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);

  const isCardFavorite = () => {
    const filtered = state.favorites.filter((favorite) => {
      return favorite.id === item.id;
    });
    setIsFavorite(filtered.length > 0);
  };

  const headerRight = () => {
    return <FavoriteButton isFavorite={isFavorite} onPress={onPressFavorite} />;
  };

  const onPressFavorite = () => {
    let favorites = state.favorites;
    if (isFavorite) {
      favorites = favorites.filter((fav) => {
        return fav.id !== item.id;
      });
    } else {
      favorites.push(item);
    }
    dispatch({
      type: 'setFavorites',
      payload: favorites,
    });
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    isCardFavorite();
    navigation.setOptions({
      headerRight: headerRight,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={{
                uri: item.card_images[0].image_url,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={styles.typeContainer}>
            <ChevronDownIcon
              width={18}
              height={18}
              fill={color}
              style={styles.chevron}
            />
            <Text style={{ ...styles.textType, ...{ color: color } }}>
              {item.type}
            </Text>
          </View>
          <View style={styles.attributeContainer}>
            <Text style={{ ...styles.textType, ...{ color: color } }}>
              {item.attribute ?? item.race}
            </Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.descText}>{item.desc}</Text>
          </View>
        </View>
        {item.level ? (
          <>
            <View style={styles.levelContainer}>
              <Text style={styles.levelText}>LvL {item.level}</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.statsText}>ATK: {item.atk}</Text>
              <Text style={styles.statsText}>DEF: {item.def}</Text>
            </View>
            {item.card_sets ? (
              <View style={styles.cardSetContainer}>
                <Text style={styles.setTitle}>Find this card into: </Text>
                {item.card_sets.map((card, index) => {
                  return (
                    <Text
                      key={`${card.set_code}-${index}`}
                      style={styles.setText}
                    >
                      {`\u2022 ${card.set_name}`}
                    </Text>
                  );
                })}
              </View>
            ) : null}
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
