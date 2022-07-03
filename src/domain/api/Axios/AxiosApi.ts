import { AxiosResponse } from 'axios';
import ApiMethods from 'src/domain/models/ApiMethods';
import Axios from './AxiosConf';

class AxiosApi implements ApiMethods {
  async fetchCards(): Promise<AxiosResponse<any>> {
    return await Axios.get('cardinfo.php');
  }

  async searchCard(text: string): Promise<AxiosResponse<any>> {
    return await Axios.get('cardinfo.php', { params: { fname: text } });
  }
}

export default new AxiosApi();
