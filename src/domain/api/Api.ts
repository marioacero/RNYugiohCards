import ApiMethods from 'src/domain/models/ApiMethods';
import { CardResponse } from 'src/domain/models/CardResponse';
import AxiosApi from './Axios/AxiosApi';

const apiClient: ApiMethods = AxiosApi;
const Api = () => {
  const getCards = async () => {
    const response = await apiClient.fetchCards();
    const data = response.data as CardResponse;
    const filterData = data.data.filter((card) => card.type !== 'Skill Card');
    const sorted = filterData.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    );
    return sorted;
  };
  return { getCards };
};

export default Api;
