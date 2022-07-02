import { useQuery } from 'react-query';
import Api from 'src/domain/api/Api';

const useCards = () => {
  const { getCards } = Api();
  return useQuery(['getCards'], getCards, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useCards;
