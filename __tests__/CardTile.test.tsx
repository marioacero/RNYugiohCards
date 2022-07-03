import React from 'react';
import CardTile from 'src/components/CardTile';
import { Card } from 'src/domain/models/CardResponse';
import { cleanup, render } from '@testing-library/react-native';

describe('CardTile', () => {
  afterEach(cleanup);

  test('it should render a monster card tile', () => {
    const monsterCard: Card = {
      id: 1,
      name: '',
      type: 'monsterCard',
      desc: '',
      race: '',
      level: 1,
      card_images: [
        {
          image_url_small: '',
          id: 2,
          image_url: '',
        },
      ],
    };
    const tree = render(<CardTile item={monsterCard} />);
    const cardType = tree.getByTestId('card-level');
    expect(cardType).toBeTruthy();
  });

  test('it should render a non monster card tile', () => {
    const monsterCard: Card = {
      id: 1,
      name: '',
      type: 'Spell card',
      desc: '',
      race: '',
      card_images: [
        {
          image_url_small: '',
          id: 2,
          image_url: '',
        },
      ],
    };
    const tree = render(<CardTile item={monsterCard} />);
    const cardType = tree.getByTestId('card-race');
    expect(cardType).toBeTruthy();
  });
});
