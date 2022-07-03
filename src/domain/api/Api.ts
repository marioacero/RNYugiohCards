import ApiMethods from 'src/domain/models/ApiMethods';
import { CardResponse } from 'src/domain/models/CardResponse';
import { sortResults } from 'src/utils/Helper';
import AxiosApi from './Axios/AxiosApi';

const apiClient: ApiMethods = AxiosApi;
const Api = () => {
  const getCards = async () => {
    const response = await apiClient.fetchCards();
    const data = response.data as CardResponse;
    const filteredData = data.data.filter((card) => card.type !== 'Skill Card');
    const sorted = sortResults(filteredData);
    return sorted;
  };

  const searchCard = async (text: string) => {
    const response = await apiClient.searchCard(text);
    const data = response.data as CardResponse;
    const sorted = sortResults(data.data);
    return sorted;
  };
  return { getCards, searchCard };
};

export default Api;
