import { AxiosError } from 'axios';
import { requestApiUnauthorized } from './apiAxios';

export interface LoginResult extends User {
  accessToken: string;
}

export interface User {
  id: number;
  email: string;
}

export class LoginServiceError extends Error {}

export class LoginUnregisteredError extends LoginServiceError {
  constructor() {
    super('There is no registered user with this email.');
  }
}

export class LoginInvalidPasswordError extends LoginServiceError {
  constructor() {
    super('Invalid password.');
  }
}

export async function login(email: string, password: string): Promise<LoginResult> {
  try {
    return (
      await requestApiUnauthorized<LoginResult>('POST', 'auth/login', { data: { email, password } })
    ).data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.status === 400) {
      if (e.response?.data?.type === 'unregistered') {
        throw new LoginUnregisteredError();
      } else if (e.response?.data?.type === 'invalidPassword') {
        throw new LoginInvalidPasswordError();
      }

      throw e;
    }

    throw e;
  }
}
