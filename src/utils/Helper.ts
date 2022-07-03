import { Card } from 'src/domain/models/CardResponse';

export const sortResults = (items: Card[]) => {
  const sorted = items.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  );
  return sorted;
};
