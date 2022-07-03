import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { COLORS } from 'src/utils/colors';
import { FavoriteHeartEmptyIcon, FavoriteHeartFullIcon } from 'src/utils/icons';

import { FavoriteButtonProps } from './FavoriteButton.interface';

const FavoriteButton: FC<FavoriteButtonProps> = ({ isFavorite, onPress }) => {
  const Icon = isFavorite ? FavoriteHeartFullIcon : FavoriteHeartEmptyIcon;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Icon width={25} height={25} fill={COLORS.white} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
