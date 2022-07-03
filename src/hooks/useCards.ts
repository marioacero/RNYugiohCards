import { useQuery } from 'react-query';
import Api from 'src/domain/api/Api';

const useCards = () => {
  const { getCards, searchCard } = Api();
  const useFetchCards = () => {
    return useQuery(['getCards'], getCards, {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    });
  };

  const useSearchCard = (name: string) => {
    return useQuery(['searchCard', name], () => searchCard(name), {
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    });
  };
  return { useFetchCards, useSearchCard };
};

export default useCards;
