jest.mock('src/utils/icons.ts');
jest.mock('assets/icons/favorite-empty.svg', () => 'FavoriteHeartEmptyIcon');
jest.mock('assets/icons/favorite-fill.svg', () => 'FavoriteHeartFullIcon');
jest.mock('@react-navigation/native');