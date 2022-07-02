import { AxiosResponse } from 'axios';
import ApiMethods from 'src/domain/models/ApiMethods';
import Axios from './AxiosConf';

class AxiosApi implements ApiMethods {
  async fetchCards(): Promise<AxiosResponse<any>> {
    return await Axios.get('cardinfo.php');
  }
}

export default new AxiosApi();
