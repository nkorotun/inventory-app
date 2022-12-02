import axios from 'axios';
import { API } from '../constants/api';

const getInstance = (reduxToken?:string) => {
  const instance = axios.create({
    baseURL: API.baseUrl,
    timeout: 10000,
  });
  instance.interceptors.request.use( (config) => {
    const {user} = JSON.parse(
      localStorage.getItem('persist:authType') as any
    );  
    const { token } = JSON.parse(user);
  
    if (!token && !reduxToken) {
      return config;
    }
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${reduxToken || token}`,
      },
    };
    return config;
  });
  return instance;
};
export const postData = (requestUrl: string, payload: any) => {
  return getInstance().post(`${requestUrl}`, payload);
};
export const fetchData = async (requestUrl: string, params?: {},token?:string) => {
  return getInstance(token).get(`${requestUrl}`, { params });
};
export const changeData = async (requestUrl: string, payload: any,) => {
  return getInstance().put(`${requestUrl}`, payload,);
};
export const deleteData = (requestUrl: string, params: {}) => {
  return getInstance().delete(`${requestUrl}`, { params });
};
