import { AxiosResponse } from 'axios';
import { ApiMethods } from 'src/domain/models/ApiMethods';
import Axios from './AxiosConf';

class Api implements ApiMethods {
  async signIn(login: Login): Promise<AxiosResponse<any>> {
    const body = {
      username: login.email,
      password: login.password,
    };
    return await Axios.post('auth/login', body);
  }
}

export default new Api();
