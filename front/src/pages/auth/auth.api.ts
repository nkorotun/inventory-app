import { postData } from '../../service/api';
import { AUTH_ROUTES } from './auth.constants';

export const authApiServices = {
  async login(data: { email: string; password: string }) {
    return await postData(AUTH_ROUTES.login, data);
  },
 
};
