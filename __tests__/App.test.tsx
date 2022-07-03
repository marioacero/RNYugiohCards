import React from 'react';
import FavoriteButton from 'src/components/FavoriteButton';
import { cleanup, render } from '@testing-library/react-native';

describe('FavoriteButton', () => {
  afterEach(cleanup);

  test('should render empty favorite button ', () => {
    const tree = render(
      <FavoriteButton isFavorite={false} onPress={jest.fn} />
    );
    expect(tree).toMatchSnapshot();
  });

  test('should render filled favorite button ', () => {
    const tree = render(<FavoriteButton isFavorite={true} onPress={jest.fn} />);
    expect(tree).toMatchSnapshot();
  });
});
