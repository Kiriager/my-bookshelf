import axios, { AxiosError, Method, AxiosResponse, AxiosRequestConfig } from 'axios';

import { API_HOST, API_PATH } from 'src/config';
import { refreshUserToken } from './user.service';
import { getUserAccessToken, setUserAccessToken } from './userTokens.service';

export class InvalidSessionError extends Error {
  constructor() {
    super('Invalid session. Try to login again.');
  }
}

export const API_BASE_URL = API_HOST + API_PATH;

export const apiAxios = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const apiAxiosUnauthorized = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

apiAxios.interceptors.request.use(requestConfig => {
  const userAccessToken = getUserAccessToken();

  if (userAccessToken === null) throw new InvalidSessionError();

  requestConfig.headers = { Authorization: `Bearer ${userAccessToken}` };

  return requestConfig;
});

apiAxios.interceptors.response.use(undefined, async function (error) {
  if (error instanceof AxiosError && error?.response?.status === 401) {
    try {
      await refreshUserToken();
    } catch (e) {
      if (e instanceof AxiosError && e?.response?.status === 401) {
        throw new InvalidSessionError();
      }
      throw e;
    }
    if (error.config === undefined) {
      throw new Error(
        'Failed to repeat a request after refreshing. The request config is undefined.',
      );
    }
    return await apiAxios(error.config);
  }
  throw error;
});

export async function requestApi<T = any, D = any>(
  method: Method,
  url: string,
  config?: AxiosRequestConfig<D>,
): Promise<AxiosResponse<T>> {
  return await apiAxios<T, AxiosResponse<T, D>, D>({ ...config, method, url });
}

export async function requestApiUnauthorized<T = any, D = any>(
  method: Method,
  url: string,
  config?: AxiosRequestConfig<D>,
): Promise<AxiosResponse<T>> {
  return await apiAxiosUnauthorized<T, AxiosResponse<T, D>, D>({ ...config, method, url });
}
