import React, { FC } from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { COLORS } from 'src/utils/colors';
import { ChevronDownIcon } from 'src/utils/icons';
import { CardTileProps } from './CardTile.interface';
import styles from './CardTile.styles';

const CardTile: FC<CardTileProps> = ({ item }) => {
  let colorType = COLORS.monster;
  switch (item.type) {
    case 'Spell Card':
      colorType = COLORS.spell;
      break;
    case 'Trap Card':
      colorType = COLORS.trap;
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={{ width: 60, height: 60 }}
          source={{
            uri: item.card_images[0].image_url_small,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View>
          <Text style={styles.textName}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <ChevronDownIcon
              width={15}
              height={15}
              fill={colorType}
              style={{ paddingTop: 16, marginRight: 8 }}
            />
            <Text style={{ ...styles.text, ...{ color: colorType } }}>
              {item.type}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        {item.level ? (
          <>
            <Text style={styles.levelText}>LVL {item.level}</Text>
            <Text
              numberOfLines={2}
              style={styles.atk}
            >{`ATK ${item.atk} / ${item.def} DEF`}</Text>
          </>
        ) : (
          <Text style={styles.raceText}>{item.race}</Text>
        )}
      </View>
    </View>
  );
};

export default CardTile;
